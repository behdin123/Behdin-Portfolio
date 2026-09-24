# Cloudflare Pages + YouTube

The two VIKING videos on /VIDEO now use YouTube embeds:
- Office: https://www.youtube.com/watch?v=_mayRk3eDRU
- Production: https://www.youtube.com/watch?v=_NIlei7Twqs

The existing showreel embed is unchanged. R2 is no longer required.
The original VIKING file deletions were present in the working tree at the next
inspection; staging excludes these filenames even if restored locally.
Edited-video.mp4 is also excluded if present. Its local deletion was already
present before the YouTube changes. Old VIKING file URLs redirect to YouTube.

## Build

Run `npm ci` then `npm run build:cloudflare`.
Publish `.cloudflare/pages`, not `dist`. Preparation validates the 25 MiB
per-file limit, 20,000-file limit and resolved Git LFS objects. No R2 variables
or credentials are needed. Source files are preserved. The generated ignored
`.cloudflare` directory is replaced on each successful preparation.

Pages default SPA routing supports direct Vue history URLs because there is
no top-level 404.html. Apache .htaccess is omitted and Pages caching defaults
are used. Small local video files are still published.

## Cloudflare and GitHub setup

Create a Pages Direct Upload project, production branch main (suggested name:
behdin-portfolio). Do not enable native Git integration alongside Actions.

GitHub Actions secrets:
- CLOUDFLARE_ACCOUNT_ID: Cloudflare account ID.
- CLOUDFLARE_API_TOKEN: Account / Cloudflare Pages / Edit scoped to this account.
  Add the token securely in GitHub, never in source or chat.

GitHub Actions variables:
- CLOUDFLARE_PAGES_PROJECT: actual project name.
- CLOUDFLARE_ENABLED: leave unset until the initial deployment is verified.

Push reviewed changes, then manually run Build and deploy to Cloudflare on
main. With CLOUDFLARE_ENABLED unset, one.com still deploys on pushes and
Cloudflare only deploys manually. After verification, set CLOUDFLARE_ENABLED
true: subsequent main pushes publish to Cloudflare and skip one.com.

## Cutover

Check the pages.dev address: home, /VIDEO, direct navigation and refresh on
/projekter and a case page, all YouTube embeds and fullscreen, local small
videos, downloads, images and languages. Test YouTube on the deployed HTTPS
origin; playback depends on uploader visibility and embedding settings.

Add behdin.dk and www.behdin.dk as Pages custom domains. Reproduce existing
DNS records (especially email MX/TXT) before changing nameservers. The apex
requires Cloudflare nameservers. Registration can remain with one.com.
Check HTTPS and routes after the change.

After migration and backup of one.com-only files/email, confirm Domain only
pricing and a corrected invoice, then remove hosting. Do not cancel the domain.
Domain only deletes hosted data. To roll back while hosting is still active,
unset CLOUDFLARE_ENABLED and restore old DNS if it has changed.

The initial manual deployment is live at https://behdin-portfolio.pages.dev/.
Both YouTube embeds were loaded and played on /VIDEO. GitHub Actions still
needs its credentials and activation. No DNS or one.com subscription change
has been made. On 2026-09-24, public DNS still used ns01.one.com / ns02.one.com
and apex IPv4 46.30.215.174. MX was a null MX (0 .); inspect the full one.com
DNS panel before changing nameservers.

References:
- https://developers.cloudflare.com/pages/platform/limits/
- https://developers.cloudflare.com/pages/configuration/serving-pages/
- https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
