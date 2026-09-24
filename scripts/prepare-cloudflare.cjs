const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'dist');
const output = path.join(root, '.cloudflare');
const youtube = {
  'video/VIKING_Office_Theme_LinkedIn.mp4': '_mayRk3eDRU',
  'video/VIKING_Production_Theme_LinkedIn.mp4': '_NIlei7Twqs',
};
const excluded = new Set(['.htaccess', 'video/Edited-video.mp4', ...Object.keys(youtube)]);
async function filesIn(dir, prefix = '') {
  const result = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Unexpected symlink: ${relative}`);
    if (entry.isDirectory()) result.push(...await filesIn(path.join(dir, entry.name), relative));
    else result.push(relative);
  }
  return result.sort();
}
async function main() {
  await fs.access(path.join(source, 'index.html'));
  const files = (await filesIn(source)).filter(file => !excluded.has(file));
  if (files.includes('_redirects') || files.includes('404.html')) throw new Error('Review existing _redirects/404.html before enabling SPA routing.');
  if (files.length + 1 > 20000) throw new Error('Pages Free file limit exceeded.');
  for (const relative of files) {
    const file = path.join(source, relative);
    const { size } = await fs.stat(file);
    if (size > 25 * 1024 * 1024) throw new Error(`File exceeds Pages 25 MiB limit: ${relative}`);
    if (size < 1024 && (await fs.readFile(file, 'utf8')).startsWith('version https://git-lfs.github.com/spec/v1')) throw new Error(`Unresolved Git LFS pointer: ${relative}. Run git lfs pull and rebuild.`);
  }
  // Only reset this generated directory; preserve dist and all original media.
  if (path.dirname(output) !== root || path.basename(output) !== '.cloudflare') throw new Error('Unsafe staging path.');
  await fs.rm(output, { recursive: true, force: true });
  const pages = path.join(output, 'pages');
  await fs.mkdir(pages, { recursive: true });
  for (const relative of files) {
    const destination = path.join(pages, relative);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.copyFile(path.join(source, relative), destination);
  }
  const redirects = Object.entries(youtube).map(([file, id]) => `/${file} https://www.youtube.com/watch?v=${id} 302`);
  await fs.writeFile(path.join(pages, '_redirects'), redirects.join('\n') + '\n');
  console.log(`Pages ready: ${files.length + 1} files, each <= 25 MiB. YouTube embeds; no R2 required.`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
