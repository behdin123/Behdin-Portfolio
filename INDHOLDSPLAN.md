# Indholdsplan – omstrukturering af portfolio

Mål: Fra kompetence-sider til case-drevet portfolio målrettet **rekruttere**.
Arkitektur: 4 faste sider + case-skabelon. Kontakt = footer-sektion på alle sider.

---

## 1. Forside `/`

Maks 5 sektioner, hver ca. én skærmhøjde:

1. **Hero** – Navn, titel ("Multimediedesigner & Webudvikler"), én sætnings value proposition, foto, CTA: "Se mine projekter" + "Download CV". Ingen emojis i overskrifter.
2. **Udvalgte cases (3)** – Employer branding-video (VIKING), Social media (DK Skønhedsklinik), Website (DK Skønhedsklinik). Kort: billede + titel + én linje + link.
3. **To spor** – Content Creation / Webudvikling som to kort med link til filtreret projektvisning. Erstatter nuværende split-hero.
4. **Anbefalinger** – 2-3 citater fra LinkedIn (se afsnit 6) med navn, titel og foto-initialer.
5. **Kontakt-CTA** – "Åben for muligheder" + footer med formular.

---

## 2. Projekter `/projekter`

- Galleri med filter-tags: `Video` `Foto` `Design` `Web` `UX/UI` `Social Media`
- Hvert kort: billede, titel, én linje, tags. Ingen brødtekst.
- Video-CV'et (YouTube) kan ligge øverst eller på Om mig.

---

## 3. Case-skabelon `/projekter/[slug]`

Fast struktur, 300-500 ord i alt:

| Element | Omfang |
|---|---|
| Hero-visual | 1 billede/video |
| Faktaboks | Rolle · Værktøjer · År · Kunde |
| Udfordring | 50-80 ord |
| Proces | 100-150 ord + 3-6 visuals |
| Resultat | 50-80 ord, helst tal/feedback |
| Anbefaling (hvis relevant) | Citat |
| Næste case | Link |

---

## 4. Cases (7 stk.)

### Case 1: Employer branding & video – VIKING ⭐ (featured)
- **Genbrug:** Videoerne fra VIDEO-siden (LinkedIn-tilpassede, Storykit), tekster fra "Min Erfaring med video arbejde hos VIKING" og videoExperience-afsnit.
- **Vinkel:** Strategivideoer + employer branding-indhold der formidler kultur og værdier.
- **Anbefaling:** Malte Vermehren Eggers (citat om visual storytelling & employer branding).
- **Mangler fra Behdin:** Tal (antal videoer, views/engagement på LinkedIn hvis muligt).

### Case 2: E-læringsvideoer & grafik – VIKING Academy
- **Genbrug:** Videobeskrivelser fra Home/VIDEO-siden om e-læringskurser.
- **Vinkel:** Komplekse emner gjort tilgængelige gennem video og animation til træning.
- **Anbefalinger:** Camilla Runge Nissen + Marie Louise Cooper (begge handler direkte om dette).
- **Mangler:** 2-4 eksempler/stills fra e-læringsindhold der må vises.

### Case 3: Præsentationsdesign – VIKING
- **Genbrug:** Powerpoint-slide.webp, presentationDesign-teksterne.
- **Vinkel:** Fra kompleks strategi til klare, brand-konsistente skabeloner; samarbejde med Marketing & Corporate Communication.
- **Anbefaling:** Malte (nævner PowerPoint-skabeloner eksplicit).
- **Mangler:** Før/efter-eksempel på slide-design hvis muligt.

### Case 4: Event- & portrætfotografi – VIKING
- **Genbrug:** Arbejds-/kontorbilleder fra ART-WORKS (allerede godkendt), fotografi-tekster fra Home.
- **Vinkel:** Autentisk materiale til intern/ekstern kommunikation; lyssætning, professionelt udstyr.
- **Mangler:** Intet kritisk – materialet findes.

### Case 5: Social media management – DK Skønhedsklinik ⭐ (featured)
- **Genbrug:** Hele "Social Media Erfaring"-sektionen + carousel (Forundersøgelse 1-4) fra Content Creation-siden, links til IG/FB.
- **Vinkel:** Organisk branding (bio, visuel identitet, stories/highlights) + Meta Ads med funnels → flere kundehenvendelser og synlighed.
- **Godkendte tal (fra sendte ansøgninger):** Instagram-følgere **140 → 560**, **30+ kundebookinger via Meta Ads**. Periode: 2025.

### Case 6: Website – DK Skønhedsklinik ⭐ (featured)
- **Genbrug:** DSK2/DSK3 + mobile screenshots fra WebDevelopment-swiperen.
- **Vinkel:** Design + udvikling af klinikkens site inkl. gratis online forundersøgelse (konverteringsfunktion). UX-beslutninger → resultat.
- **Mangler:** Platform/teknologi bag sitet, live-URL, evt. trafik-/konverteringstal.

### Case 7: Portfolio-site (dette site)
- **Vinkel:** Vue 3, i18n (3 sprog), dark mode, performance-optimering. Viser frontend-kompetencer i praksis. Kan udvides med "fra 7 sider til case-arkitektur" som mini-UX-case.
- **Mangler:** GitHub-link hvis koden må vises.

### Case 8: Visuel kommunikation & produktdata – InoPlay (nuværende stilling)
- **Vinkel:** Tryk-/materialeproduktion (kataloger, posters, salgsmaterialer), branding på tværs af sub-brands (Jebo Toys, Kreatool m.fl.), SEO/landing pages — plus backweb/produktstyring: single database-løsning der samler alle brands' produkter og understøtter lagerstyring. Viser både design- og udviklerprofilen i ét job.
- **Mangler fra Behdin:** Visuelt materiale der må vises (kataloguddrag, landing pages) — afklar med InoPlay.

### Sekundært (indarbejdes i cases eller som mindre kort)
- **UX/UI-prototyper:** NemTakeAway (booking-flow), VIKING PPE, Figma-wireframes → egen lille case eller del af case 6/7.
- **Logo & visitkort** (fra uddannelsen) → lille kort under Design-filter.
- **Full stack-projekt** (Node/Express, JWT, Mocha/Chai) → lille case under Web hvis GitHub-link findes.
- **Dansk Venecenter / NHG:** 100-dages SoMe-plan, Meta Ads-materiale, QR-review-koncept (materiale i E:\Documents\Behdin-CV\NHG) → mulig ekstra SoMe-case.
- **Memento Frame:** eget brand-/webshopprojekt 2026 (logo, hero-design, produktbilleder) → mulig case under Design/Web.

### Generel teori der UDGÅR som selvstændige sektioner
UX/UI-definitioner, statistik-tal uden kilde, GDPR/A/B-afsnit, Design Thinking-bokse, backend-kort, ServiceNow/Dynamics-afsnit. Nøgleord flyttes ind som værktøjs-tags og enkeltsætninger i relevante cases. ServiceNow/Dynamics + kompetencelisten får plads på Om mig under "Værktøjer & teknologier".

---

## 5. Om mig `/om-mig`

1. Foto + historie (~150 ord, personlig men professionel: Danmark siden 2009, drivkraft, retning).
2. Video-CV (YouTube-embed, 3 minutter — skriv aldrig "60 sekunder").
3. Timeline (verificeret): Multimediedesigner, EASV (2020) → Webudvikler (2022) → VIKING Life-Saving, to roller: Grafisk designer i Academy + Corporate Communication Specialist (feb. 2024–marts 2025) → DK Skønhedsklinik (2025) → InoPlay ApS, Visual Communication Specialist (marts 2026–nu). Erstatter hele Uddannelse-siden.
4. Værktøjer & teknologier (ikon-grid – genbrug logo-grids).
5. CV-download (DK/EN) + anbefalinger i fuld længde.

---

## 6. Anbefalinger fra LinkedIn (godkendt materiale)

**Malte Vermehren Eggers** – Strategic Leadership | Corporate Communication & PR (ledede Behdin direkte, feb. 2025):
> "Behdin has demonstrated a solid understanding of visual storytelling and a strong ability to create impactful communication materials. I can fully recommend him..."
Nævner også: PowerPoint-skabeloner, employer branding, "translate complex information into compelling and easily digestible formats".

**Marie Louise Cooper** – Digital learning specialist, VIKING Safety Academy (jan. 2025):
> "Behdin's strength in video creation is remarkable. Whether it's crafting impactful training content or producing visually stunning animations, he has a talent for turning ideas into engaging and meaningful visuals."

**Camilla Runge Nissen** – Senior Manager, VIKING (ledede Behdin direkte, nov. 2024):
> "Behdin consistently delivered engaging video content tailored to specific target audiences, making complex topics accessible and memorable. ... I highly recommend him for roles that prioritize quality and impactful visual communication."

Brug: Korte uddrag på forsiden og i cases; fuld længde på Om mig.

---

## 7. Migration (gamle sider → nyt)

| Nuværende side | Skæbne |
|---|---|
| `/` (split-hero) | Ny forside (sektion 1) |
| `/Content-Creation` | Opløses → case 1, 3, 5 + logo-grid til Om mig |
| `/Web-Development` | Opløses → case 6, 7 + UX/UI-prototyper; teori udgår |
| `/VIDEO` | Opløses → case 1, 2 |
| `/ART-WORKS` | Opløses → case 4 + mindre design-kort |
| `/OM-MIG` (VIKING-indhold) | → case 1-4 |
| `/Uddannelse` | → timeline på Om mig |

Nye ruter: `/`, `/projekter`, `/projekter/[slug]`, `/om-mig`. Gamle URL'er redirectes.

---

## 8. Tjekliste – det Behdin samler

- [ ] Tal til case 1 (antal videoer, engagement)
- [ ] E-læringseksempler til case 2
- [ ] Før/efter-slide til case 3
- [x] Tal til case 5: **140→560 følgere, 30+ bookinger via Meta Ads** (verificeret fra sendte ansøgninger)
- [ ] Teknologi + URL + tal til case 6
- [ ] GitHub-links (case 7 + full stack)
- [ ] Visuelt materiale til case 8 (InoPlay – afklar hvad der må vises)
- [ ] Godt portrætfoto til hero + Om mig
- [ ] Value proposition-sætning (jeg laver udkast)

## 9. Verificerede fakta (fra CV-/ansøgningsarbejdet — brug altid disse)

- **Kompetencer:** Adobe-pakken (Premiere Pro, After Effects, Photoshop, Illustrator, InDesign), WordPress & Shopify, Vue.js, React, Express.js, Node/API, JavaScript/HTML/CSS, Microsoft Office. **Nævn aldrig Canva eller CapCut.**
- **Video-CV:** https://www.youtube.com/watch?v=exRoLR61OAw — 3 minutter.
- **Live portfolio:** behdin.dk (nævnes i alle ansøgninger — rekruttere klikker derind; derfor haster omstruktureringen).
- **VIKING-perioden:** feb. 2024 – marts 2025 (opdater "Siden 2021"/"Fra februar 2024"-formuleringer på sitet, så de stemmer).
