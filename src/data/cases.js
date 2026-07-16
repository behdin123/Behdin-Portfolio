// Case-data for /projekter og /projekter/:slug
// Tekster: { dk, en, de } — vælges med pick() fra @/js/lang

export const cases = [
  {
    slug: 'dk-skonhedsklinik-social',
    mix: 15,
    featured: true,
    categories: ['social', 'design'],
    year: '2025',
    client: 'DK Skønhedsklinik',
    image: require('@/assets/SoMe/DSK1.webp'),
    tools: ['Photoshop', 'Illustrator', 'Meta Ads Manager', 'Premiere Pro'],
    stats: [
      { from: 140, to: 560, label: { dk: 'Instagram-følgere', en: 'Instagram followers', de: 'Instagram-Follower' } },
      { to: 30, suffix: '+', label: { dk: 'Bookinger via Meta Ads', en: 'Bookings via Meta Ads', de: 'Buchungen über Meta Ads' } },
    ],
    role: { dk: 'Social Media & Content Manager', en: 'Social Media & Content Manager', de: 'Social Media & Content Manager' },
    kicker: { dk: 'Social media & Meta Ads', en: 'Social media & Meta Ads', de: 'Social Media & Meta Ads' },
    title: {
      dk: 'Fra 140 til 560 følgere – og 30+ bookinger',
      en: 'From 140 to 560 followers – and 30+ bookings',
      de: 'Von 140 auf 560 Follower – und 30+ Buchungen',
    },
    tagline: {
      dk: 'Organisk branding og datadrevet annoncering for en skønhedsklinik i vækst.',
      en: 'Organic branding and data-driven advertising for a growing beauty clinic.',
      de: 'Organisches Branding und datengetriebene Werbung für eine wachsende Schönheitsklinik.',
    },
    line: {
      dk: '140 → 560 følgere og 30+ kundebookinger gennem visuel identitet og Meta Ads.',
      en: '140 → 560 followers and 30+ client bookings through visual identity and Meta Ads.',
      de: '140 → 560 Follower und 30+ Buchungen durch visuelle Identität und Meta Ads.',
    },
    challenge: {
      dk: 'Klinikken havde en spinkel digital tilstedeværelse: en Instagram-profil uden ensartet visuel identitet, få følgere og næsten ingen henvendelser fra sociale medier. Målet var en professionel, genkendelig profil – og målbare kundebookinger.',
      en: 'The clinic had a thin digital presence: an Instagram profile without a consistent visual identity, few followers and almost no inquiries from social media. The goal was a professional, recognisable profile – and measurable bookings.',
      de: 'Die Klinik hatte eine schwache digitale Präsenz: ein Instagram-Profil ohne einheitliche visuelle Identität, wenige Follower und kaum Anfragen über Social Media. Ziel war ein professionelles, wiedererkennbares Profil – und messbare Buchungen.',
    },
    process: {
      dk: [
        'Jeg byggede først den visuelle identitet op: optimeret bio, gennemgående farver og typografi, designede highlights og story-skabeloner, så profilen fremstod professionel og genkendelig.',
        'Derefter producerede jeg løbende indhold – carousels, before/after-billeder og video – tilpasset kanalens format og klinikkens brand.',
        'Parallelt satte jeg kampagner op i Meta Ads Manager med funnels og målrettede målgrupper, og optimerede løbende på baggrund af data: hvilke annoncer konverterede, og hvor faldt folk fra.',
      ],
      en: [
        'I first built the visual identity: optimised bio, consistent colours and typography, designed highlights and story templates, making the profile look professional and recognisable.',
        'I then produced continuous content – carousels, before/after images and video – adapted to the channel and the clinic’s brand.',
        'In parallel I set up campaigns in Meta Ads Manager with funnels and targeted audiences, optimising continuously based on data: which ads converted, and where people dropped off.',
      ],
      de: [
        'Zuerst baute ich die visuelle Identität auf: optimierte Bio, durchgängige Farben und Typografie, gestaltete Highlights und Story-Vorlagen für einen professionellen, wiedererkennbaren Auftritt.',
        'Danach produzierte ich laufend Inhalte – Carousels, Vorher/Nachher-Bilder und Video – angepasst an Kanal und Marke der Klinik.',
        'Parallel richtete ich Kampagnen im Meta Ads Manager mit Funnels und Zielgruppen ein und optimierte laufend anhand der Daten.',
      ],
    },
    result: {
      dk: 'Instagram-profilen voksede fra 140 til 560 følgere, og Meta Ads-kampagnerne skabte 30+ kundebookinger. Klinikken fik en sammenhængende digital identitet, der stadig bærer deres markedsføring.',
      en: 'The Instagram profile grew from 140 to 560 followers, and the Meta Ads campaigns generated 30+ client bookings. The clinic gained a coherent digital identity that still carries their marketing.',
      de: 'Das Instagram-Profil wuchs von 140 auf 560 Follower, und die Meta-Ads-Kampagnen erzeugten 30+ Buchungen. Die Klinik erhielt eine kohärente digitale Identität.',
    },
    mockup: {
      src: require('@/assets/MobileScreenMockup.webp'),
      frame: 'none',
      caption: {
        dk: 'Klinikkens Instagram-profil med gennemført visuel identitet.',
        en: 'The clinic’s Instagram profile with a consistent visual identity.',
        de: 'Das Instagram-Profil der Klinik mit durchgängiger visueller Identität.',
      },
    },
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/dk_skonhedsklinik/' },
      { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054595142567' },
    ],
  },

  {
    slug: 'viking-employer-branding-video',
    mix: 8,
    featured: true,
    categories: ['video'],
    year: '2024–2025',
    client: 'VIKING Life-Saving Equipment',
    image: require('@/assets/Behdin/Viking-camera.webp'),
    imagePosition: 'center top',
    heroVideo: {
      poster: '/video/ContentCreationBanner_poster.webp',
      sources: [
        { src: '/video/ContentCreationBanner-720.mp4', type: 'video/mp4' },
      ],
    },
    tools: ['Premiere Pro', 'After Effects', 'Storykit', 'Kamera/gimbal/lyd'],
    role: { dk: 'Corporate Communication Specialist', en: 'Corporate Communication Specialist', de: 'Corporate Communication Specialist' },
    kicker: { dk: 'Videoproduktion & employer branding', en: 'Video production & employer branding', de: 'Videoproduktion & Employer Branding' },
    title: {
      dk: 'Video der formidler strategi og kultur hos VIKING',
      en: 'Video that communicates strategy and culture at VIKING',
      de: 'Video, das Strategie und Kultur bei VIKING vermittelt',
    },
    tagline: {
      dk: 'Fra strategimøder til employer branding – planlagt, optaget og klippet af mig.',
      en: 'From strategy meetings to employer branding – planned, filmed and edited by me.',
      de: 'Von Strategiemeetings bis Employer Branding – geplant, gefilmt und geschnitten von mir.',
    },
    line: {
      dk: 'Intern strategi-kommunikation og employer branding-videoer for 3.000+ medarbejdere.',
      en: 'Internal strategy communication and employer branding video for a global organisation.',
      de: 'Interne Strategiekommunikation und Employer-Branding-Videos für eine globale Organisation.',
    },
    challenge: {
      dk: 'VIKINGs strategier og værdier skulle nå alle medarbejdere på en engagerende måde – og samtidig skulle virksomheden stå stærkere udadtil som attraktiv arbejdsplads.',
      en: 'VIKING’s strategies and values had to reach every employee in an engaging way – while strengthening the company’s position as an attractive workplace.',
      de: 'VIKINGs Strategien und Werte sollten alle Mitarbeitenden erreichen – und zugleich die Arbeitgebermarke stärken.',
    },
    process: {
      dk: [
        'Jeg planlagde og optog videoer fra strategiske møder og store forsamlinger: interviews, b-roll og stemningsklip, der tilsammen formidlede mødernes indhold og formål.',
        'Med professionelt udstyr – kamera, lys, gimbal og mikrofoner – optog jeg desuden materiale fra virksomhedens afdelinger til employer branding.',
        'Alt blev klippet i Premiere Pro og After Effects og tilpasset platformen – internt til strategiformidling, eksternt til LinkedIn gennem Storykit.',
      ],
      en: [
        'I planned and filmed videos from strategic meetings and large gatherings: interviews, b-roll and atmosphere shots communicating the content and purpose of each event.',
        'With professional equipment – camera, lighting, gimbal and microphones – I also captured material from the company’s departments for employer branding.',
        'Everything was edited in Premiere Pro and After Effects and adapted per platform – internally for strategy communication, externally for LinkedIn via Storykit.',
      ],
      de: [
        'Ich plante und filmte Videos von Strategiemeetings und großen Versammlungen: Interviews, B-Roll und Stimmungsaufnahmen.',
        'Mit professionellem Equipment nahm ich außerdem Material aus den Abteilungen für das Employer Branding auf.',
        'Geschnitten wurde in Premiere Pro und After Effects, angepasst pro Plattform – intern und extern über Storykit für LinkedIn.',
      ],
    },
    result: {
      dk: 'Videoerne gjorde strategien konkret for den enkelte medarbejder og gav et autentisk indblik i hverdagen på tværs af organisationen – en indsats der styrkede VIKINGs position som attraktiv arbejdsplads.',
      en: 'The videos made strategy concrete for each employee and gave an authentic view of everyday life across the organisation – strengthening VIKING’s position as an attractive workplace.',
      de: 'Die Videos machten die Strategie konkret und gaben einen authentischen Einblick in den Alltag – und stärkten VIKINGs Arbeitgebermarke.',
    },
    resultCta: {
      label: { dk: 'Se showreel', en: 'Watch showreel', de: 'Showreel ansehen' },
      to: '/VIDEO#showreel',
    },
    gallery: [
      require('@/assets/VIKING/employer-branding/foto-3.webp'),
      require('@/assets/VIKING/employer-branding/eb-4.webp'),
      require('@/assets/VIKING/employer-branding/foto-2.webp'),
      require('@/assets/VIKING/employer-branding/eb-5.webp'),
      require('@/assets/VIKING/employer-branding/eb-6.webp'),
      require('@/assets/VIKING/employer-branding/foto-7.webp'),
      require('@/assets/VIKING/employer-branding/foto-1.webp'),
      require('@/assets/VIKING/employer-branding/foto-4.webp'),
    ],
    testimonial: {
      quote:
        'Behdin has demonstrated a solid understanding of visual storytelling and a strong ability to create impactful communication materials. I can fully recommend him.',
      name: 'Malte Vermehren Eggers',
      photo: require('@/assets/VIKING/Leder/malte.webp'),
      titleLabel: {
        dk: 'Kommunikationschef, VIKING – ledede Behdin direkte',
        en: 'Head of Communications, VIKING – Behdin’s direct manager',
        de: 'Kommunikationschef, VIKING – direkter Vorgesetzter',
      },
    },
  },

  {
    slug: 'viking-elearning',
    mix: 18,
    featured: false,
    categories: ['video', 'design'],
    year: '2024',
    client: 'VIKING Safety Academy',
    image: require('@/assets/sikkerhedsemner_poster.webp'),
    heroVideo: {
      poster: '/video/sikkerhedsemner_poster.webp',
      sources: [
        { src: '/video/sikkerhedsemner_video-720.mp4', type: 'video/mp4' },
      ],
    },
    tools: ['After Effects', 'Premiere Pro', 'Illustrator', 'Photoshop'],
    role: { dk: 'Grafisk designer, VIKING Academy', en: 'Graphic designer, VIKING Academy', de: 'Grafikdesigner, VIKING Academy' },
    kicker: { dk: 'E-læring & animation', en: 'E-learning & animation', de: 'E-Learning & Animation' },
    title: {
      dk: 'Komplekse sikkerhedsemner gjort tilgængelige med video',
      en: 'Complex safety topics made accessible with video',
      de: 'Komplexe Sicherheitsthemen zugänglich gemacht mit Video',
    },
    tagline: {
      dk: 'Trænings- og e-læringsindhold for VIKING Safety Academy.',
      en: 'Training and e-learning content for VIKING Safety Academy.',
      de: 'Trainings- und E-Learning-Inhalte für die VIKING Safety Academy.',
    },
    line: {
      dk: 'Video og animation der gør sikkerhedstræning engagerende og til at huske.',
      en: 'Video and animation making safety training engaging and memorable.',
      de: 'Video und Animation für einprägsames Sicherheitstraining.',
    },
    challenge: {
      dk: 'Sikkerhedsudstyr og -procedurer er komplekst stof. Træningen skulle være præcis – men også engagerende og til at huske for meget forskellige målgrupper.',
      en: 'Safety equipment and procedures are complex material. The training had to be precise – but also engaging and memorable for very different audiences.',
      de: 'Sicherheitsausrüstung und -verfahren sind komplexer Stoff. Das Training musste präzise – aber auch einprägsam sein.',
    },
    process: {
      dk: [
        'Jeg omsatte skriftligt fagmateriale til video, animationer og visuelle hjælpemidler til e-læringskurser – altid med afsæt i den konkrete målgruppe.',
        'Animationer blev bygget i After Effects, understøttet af grafik i Illustrator og Photoshop, og klippet sammen i Premiere Pro.',
      ],
      en: [
        'I translated written subject material into video, animations and visual aids for e-learning courses – always grounded in the specific audience.',
        'Animations were built in After Effects, supported by graphics in Illustrator and Photoshop, and edited in Premiere Pro.',
      ],
      de: [
        'Ich übersetzte schriftliches Fachmaterial in Video, Animationen und visuelle Hilfsmittel für E-Learning-Kurse.',
        'Animationen entstanden in After Effects, unterstützt von Grafiken aus Illustrator und Photoshop.',
      ],
    },
    result: {
      dk: 'Trænings­indholdet gjorde komplekse emner tilgængelige og huskbare – dokumenteret i anbefalingerne fra mine ledere i Academy-afdelingen.',
      en: 'The training content made complex topics accessible and memorable – documented in the recommendations from my managers in the Academy department.',
      de: 'Die Inhalte machten komplexe Themen zugänglich und einprägsam – dokumentiert in den Empfehlungen meiner Vorgesetzten.',
    },
    testimonial: {
      quote:
        'Behdin consistently delivered engaging video content tailored to specific target audiences, making complex topics accessible and memorable.',
      name: 'Camilla Runge Nissen',
      photo: require('@/assets/VIKING/Leder/camilla.webp'),
      titleLabel: {
        dk: 'Senior Manager, VIKING – ledede Behdin direkte',
        en: 'Senior Manager, VIKING – Behdin’s direct manager',
        de: 'Senior Manager, VIKING – direkte Vorgesetzte',
      },
    },
  },

  {
    slug: 'viking-praesentationsdesign',
    mix: 12,
    featured: false,
    categories: ['design'],
    year: '2024–2025',
    client: 'VIKING Life-Saving Equipment',
    image: require('@/assets/Powerpoint-slide1.webp'),
    tools: ['PowerPoint', 'Illustrator', 'Photoshop'],
    role: { dk: 'Corporate Communication Specialist', en: 'Corporate Communication Specialist', de: 'Corporate Communication Specialist' },
    kicker: { dk: 'Præsentationsdesign', en: 'Presentation design', de: 'Präsentationsdesign' },
    title: {
      dk: 'Fra kompleks strategi til klare præsentationer',
      en: 'From complex strategy to clear presentations',
      de: 'Von komplexer Strategie zu klaren Präsentationen',
    },
    tagline: {
      dk: 'PowerPoint-skabeloner og illustrationer i VIKINGs visuelle identitet.',
      en: 'PowerPoint templates and illustrations in VIKING’s visual identity.',
      de: 'PowerPoint-Vorlagen und Illustrationen in VIKINGs visueller Identität.',
    },
    line: {
      dk: 'Skabeloner der omsætter strategi til visuelt engagerende formater.',
      en: 'Templates that turn strategy into visually engaging formats.',
      de: 'Vorlagen, die Strategie visuell ansprechend vermitteln.',
    },
    challenge: {
      dk: 'Komplekse informationer og strategier blev præsenteret uden ensartet visuel linje – budskaberne druknede i tætte slides.',
      en: 'Complex information and strategies were presented without a consistent visual line – messages drowned in dense slides.',
      de: 'Komplexe Informationen wurden ohne einheitliche visuelle Linie präsentiert – Botschaften gingen unter.',
    },
    process: {
      dk: [
        'Jeg udviklede og forbedrede virksomhedens PowerPoint-skabeloner, så de afspejlede VIKINGs visuelle identitet og kommunikationsmål.',
        'I tæt samarbejde med Marketing og Corporate Communication omdannede jeg strategisk indhold til klare, målgruppetilpassede formater – understøttet af egne illustrationer og billedstruktur bygget i Adobe-værktøjerne.',
      ],
      en: [
        'I developed and improved the company’s PowerPoint templates to reflect VIKING’s visual identity and communication goals.',
        'In close collaboration with Marketing and Corporate Communication I turned strategic content into clear, audience-targeted formats – supported by my own illustrations built in the Adobe tools.',
      ],
      de: [
        'Ich entwickelte und verbesserte die PowerPoint-Vorlagen des Unternehmens im Einklang mit VIKINGs visueller Identität.',
        'In enger Zusammenarbeit mit Marketing und Corporate Communication entstanden klare, zielgruppengerechte Formate.',
      ],
    },
    result: {
      dk: 'En sammenhængende, professionel præsentationsstil på tværs af organisationen – fremhævet i min leders anbefaling som evnen til at "transformere strategisk indhold til klare og engagerende præsentationer".',
      en: 'A coherent, professional presentation style across the organisation – highlighted in my manager’s recommendation as the ability to "transform strategic content into clear and engaging presentations".',
      de: 'Ein kohärenter, professioneller Präsentationsstil in der gesamten Organisation – hervorgehoben in der Empfehlung meines Vorgesetzten.',
    },
    slides: {
      title: { dk: 'Udvalgte slides', en: 'Selected slides', de: 'Ausgewählte Slides' },
      items: [
        require('@/assets/Powerpoint/slide-1.webp'),
        require('@/assets/Powerpoint/slide-2.webp'),
        require('@/assets/Powerpoint/slide-3.webp'),
        require('@/assets/Powerpoint/slide-4.webp'),
        require('@/assets/Powerpoint/slide-5.webp'),
        require('@/assets/Powerpoint/slide-6.webp'),
        require('@/assets/Powerpoint/slide-7.webp'),
        require('@/assets/Powerpoint/slide-8.webp'),
        require('@/assets/Powerpoint/slide-9.webp'),
        require('@/assets/Powerpoint/slide-10.webp'),
      ],
    },
    testimonial: {
      quote:
        'He has helped improve our PowerPoint templates, collaborating with both Marketing and Corporate Communication to transform strategic content into clear and engaging presentations.',
      name: 'Malte Vermehren Eggers',
      photo: require('@/assets/VIKING/Leder/malte.webp'),
      titleLabel: {
        dk: 'Kommunikationschef, VIKING – ledede Behdin direkte',
        en: 'Head of Communications, VIKING – Behdin’s direct manager',
        de: 'Kommunikationschef, VIKING – direkter Vorgesetzter',
      },
    },
  },

  {
    slug: 'viking-fotografi',
    mix: 5,
    featured: false,
    categories: ['foto'],
    year: '2024–2025',
    client: 'VIKING Life-Saving Equipment',
    image: require('@/assets/VIKING/Harbor3.webp'),
    imagePosition: 'center bottom',
    tools: ['Kamera & lysopsætning', 'Photoshop', 'Topaz Photo AI'],
    role: { dk: 'Corporate Communication Specialist', en: 'Corporate Communication Specialist', de: 'Corporate Communication Specialist' },
    kicker: { dk: 'Fotografi', en: 'Photography', de: 'Fotografie' },
    title: {
      dk: 'Event- og portrætfotografi hos VIKING',
      en: 'Event and portrait photography at VIKING',
      de: 'Event- und Porträtfotografie bei VIKING',
    },
    tagline: {
      dk: 'Autentiske billeder fra events, møder og hverdagen – til intern og ekstern brug.',
      en: 'Authentic images from events, meetings and everyday life – for internal and external use.',
      de: 'Authentische Bilder von Events, Meetings und Alltag – für interne und externe Nutzung.',
    },
    line: {
      dk: 'Portrætter og reportage der fanger stemning og autenticitet.',
      en: 'Portraits and reportage capturing atmosphere and authenticity.',
      de: 'Porträts und Reportagen mit Stimmung und Authentizität.',
    },
    challenge: {
      dk: 'Virksomheden havde brug for autentisk billedmateriale – portrætter samt situations- og stemningsbilleder fra events og store forsamlinger – frem for generiske stockfotos.',
      en: 'The company needed authentic imagery – portraits plus situational shots from events and large gatherings – rather than generic stock photos.',
      de: 'Das Unternehmen brauchte authentisches Bildmaterial statt generischer Stockfotos.',
    },
    process: {
      dk: [
        'Jeg fotograferede portrætter og reportage fra events, møder og afdelinger med professionelt kameraudstyr og egne lysopsætninger.',
        'Efterbehandlingen skete i Photoshop og Topaz Photo AI, hvor farver, lys og kontrast blev harmoniseret med VIKINGs visuelle udtryk.',
      ],
      en: [
        'I shot portraits and reportage from events, meetings and departments using professional camera equipment and my own lighting setups.',
        'Post-processing in Photoshop and Topaz Photo AI harmonised colours, light and contrast with VIKING’s visual expression.',
      ],
      de: [
        'Ich fotografierte Porträts und Reportagen mit professionellem Equipment und eigenen Lichtaufbauten.',
        'Die Nachbearbeitung in Photoshop und Topaz Photo AI harmonisierte Farben, Licht und Kontrast mit VIKINGs visuellem Ausdruck.',
      ],
    },
    result: {
      dk: 'Et bibliotek af autentisk billedmateriale brugt i intern kommunikation, employer branding og eksterne kanaler.',
      en: 'A library of authentic imagery used in internal communication, employer branding and external channels.',
      de: 'Eine Bibliothek authentischen Bildmaterials für interne Kommunikation und Employer Branding.',
    },
    gallery: [
      require('@/assets/VIKING/HR1.webp'),
      require('@/assets/VIKING/Harbor5.webp'),
      require('@/assets/VIKING/Lager1.webp'),
      require('@/assets/VIKING/Harbor4.webp'),
      require('@/assets/VIKING/Sy7.webp'),
      require('@/assets/VIKING/Rely3.webp'),
      require('@/assets/VIKING/employer-branding/foto-5.webp'),
    ],
  },

  {
    slug: 'dk-skonhedsklinik-website',
    mix: 55,
    featured: true,
    categories: ['web', 'uxui'],
    year: '2025',
    client: 'DK Skønhedsklinik',
    image: require('@/assets/web_background11.webp'),
    imagePosition: 'center top',
    tools: ['UX/UI-design', 'WordPress', 'SEO'],
    role: { dk: 'Webdesigner & udvikler', en: 'Web designer & developer', de: 'Webdesigner & Entwickler' },
    kicker: { dk: 'Webdesign & udvikling', en: 'Web design & development', de: 'Webdesign & Entwicklung' },
    title: {
      dk: 'Website med online forundersøgelse der konverterer',
      en: 'A website with an online pre-assessment that converts',
      de: 'Website mit Online-Voruntersuchung, die konvertiert',
    },
    tagline: {
      dk: 'Design og udvikling af klinikkens website – bygget til at skabe henvendelser.',
      en: 'Design and development of the clinic’s website – built to generate inquiries.',
      de: 'Design und Entwicklung der Klinik-Website – gebaut für Anfragen.',
    },
    line: {
      dk: 'Fra design til drift: klinikkens website med indbygget konverteringsflow.',
      en: 'From design to launch: the clinic’s website with a built-in conversion flow.',
      de: 'Von Design bis Betrieb: Klinik-Website mit Conversion-Flow.',
    },
    challenge: {
      dk: 'Klinikken manglede et professionelt website, der kunne omsætte interessen fra sociale medier til konkrete henvendelser og bookinger.',
      en: 'The clinic lacked a professional website that could turn social media interest into concrete inquiries and bookings.',
      de: 'Der Klinik fehlte eine professionelle Website, die Interesse in konkrete Anfragen umwandelt.',
    },
    process: {
      dk: [
        'Jeg designede og byggede sitet mobile-first med klinikkens visuelle identitet – samme udtryk som på de sociale medier, så kunderejsen hænger sammen.',
        'Kernen er en gratis online forundersøgelse: et enkelt flow, hvor besøgende beskriver deres behov og modtager svar – en lav tærskel, der gør det nemt at række ud.',
      ],
      en: [
        'I designed and built the site mobile-first with the clinic’s visual identity – matching the social channels so the customer journey feels coherent.',
        'The core is a free online pre-assessment: a simple flow where visitors describe their needs and get a response – a low threshold that makes reaching out easy.',
      ],
      de: [
        'Ich gestaltete und baute die Website mobile-first in der visuellen Identität der Klinik.',
        'Kern ist eine kostenlose Online-Voruntersuchung: ein einfacher Flow mit niedriger Schwelle für Anfragen.',
      ],
    },
    result: {
      dk: 'Et professionelt website der samler klinikkens digitale tilstedeværelse og fungerer som landingsside for Meta Ads-kampagnerne – en central del af de 30+ bookinger.',
      en: 'A professional website that anchors the clinic’s digital presence and serves as the landing page for the Meta Ads campaigns – a key part of the 30+ bookings.',
      de: 'Eine professionelle Website als Anker der digitalen Präsenz und Landingpage der Meta-Ads-Kampagnen.',
    },
    mockup: {
      srcs: [require('@/assets/screenshots/webMob3.webp'), require('@/assets/screenshots/webMob2.webp')],
      frame: 'phone',
      caption: {
        dk: 'Klinikkens website i mobilvisning – med den gratis online forundersøgelse.',
        en: 'The clinic’s website in mobile view – with the free online pre-assessment.',
        de: 'Die Website der Klinik in der mobilen Ansicht – mit der kostenlosen Online-Voruntersuchung.',
      },
    },
  },

  {
    slug: 'portfolio-site',
    mix: 78,
    featured: false,
    categories: ['web'],
    year: '2024–2026',
    client: { dk: 'Eget projekt', en: 'Own project', de: 'Eigenes Projekt' },
    image: require('@/assets/behdin3.webp'),
    tools: ['Vue 3', 'Vue Router', 'i18next', 'SCSS'],
    role: { dk: 'Design & frontend-udvikling', en: 'Design & front-end development', de: 'Design & Frontend-Entwicklung' },
    kicker: { dk: 'Frontend – Vue 3', en: 'Front end – Vue 3', de: 'Frontend – Vue 3' },
    title: {
      dk: 'Dette portfolio: Vue 3, tre sprog og dark mode',
      en: 'This portfolio: Vue 3, three languages and dark mode',
      de: 'Dieses Portfolio: Vue 3, drei Sprachen und Dark Mode',
    },
    tagline: {
      dk: 'Designet og kodet fra bunden – sitet du kigger på lige nu.',
      en: 'Designed and coded from scratch – the site you are looking at right now.',
      de: 'Von Grund auf gestaltet und entwickelt – die Website, die Sie gerade ansehen.',
    },
    line: {
      dk: 'Designet og kodet fra bunden i Vue 3 – med i18n og dark mode.',
      en: 'Designed and coded from scratch in Vue 3 – with i18n and dark mode.',
      de: 'Von Grund auf in Vue 3 entwickelt – mit i18n und Dark Mode.',
    },
    challenge: {
      dk: 'Et portfolio skal bevise det, det påstår. Derfor er sitet her ikke en skabelon, men designet og udviklet fra bunden som demonstration af både design- og frontend-kompetencer.',
      en: 'A portfolio must prove what it claims. This site is not a template but designed and developed from scratch as a demonstration of both design and front-end skills.',
      de: 'Ein Portfolio muss beweisen, was es behauptet. Diese Website ist keine Vorlage, sondern von Grund auf entwickelt.',
    },
    process: {
      dk: [
        'Bygget med Vue 3 og Vue Router med lazy-loadede sider, i18next med sprogdetektion (dansk, engelsk, tysk) og gennemført dark mode.',
        'Billeder er konverteret til WebP og lazy-loades; komponenterne er strukturerede efter genbrug – som denne case-skabelon, der driver alle projektsider fra ét datamodul.',
      ],
      en: [
        'Built with Vue 3 and Vue Router with lazy-loaded pages, i18next with language detection (Danish, English, German) and full dark mode.',
        'Images are converted to WebP and lazy-loaded; components are structured for reuse – like this case template, driving all project pages from a single data module.',
      ],
      de: [
        'Gebaut mit Vue 3 und Vue Router, i18next mit Spracherkennung (Dänisch, Englisch, Deutsch) und durchgängigem Dark Mode.',
        'Bilder sind WebP-optimiert; die Komponenten sind auf Wiederverwendung ausgelegt.',
      ],
    },
    result: {
      dk: 'Et levende bevis på arbejdsmetoden: brugercentreret design, ren kode og løbende iteration – senest omstruktureret fra kompetence-sider til case-drevet arkitektur.',
      en: 'Living proof of the working method: user-centred design, clean code and continuous iteration – most recently restructured into a case-driven architecture.',
      de: 'Ein lebendiger Beweis der Arbeitsweise: nutzerzentriertes Design, sauberer Code und kontinuierliche Iteration.',
    },
    links: [{ label: 'behdin.dk', url: 'https://behdin.dk' }],
  },

  {
    slug: 'inoplay-webudvikling',
    mix: 72,
    featured: false,
    categories: ['web'],
    year: '2026–',
    client: 'InoPlay ApS',
    image: require('@/assets/InoPlay/web/JeboToys.webp'),
    heroImages: {
      images: [
        require('@/assets/InoPlay/web/JeboToys.webp'),
        require('@/assets/InoPlay/web/Kreatool.webp'),
        require('@/assets/InoPlay/web/InoPlay.webp'),
      ],
      fit: 'cover',
      interval: 4500,
    },
    tools: ['Shopify', 'HTML/CSS', 'JavaScript', 'Produktdata', 'SEO'],
    role: { dk: 'Web- & systemudvikling, InoPlay', en: 'Web & system development, InoPlay', de: 'Web- & Systementwicklung, InoPlay' },
    kicker: { dk: 'Web- & systemudvikling', en: 'Web & system development', de: 'Web- & Systementwicklung' },
    title: {
      dk: 'Webshops og produktsystem på tværs af tre brands',
      en: 'Webshops and a product system across three brands',
      de: 'Webshops und ein Produktsystem über drei Marken',
    },
    tagline: {
      dk: 'Udvikling, drift og optimering af JeboToys, InoPlay og Kreatool – bundet sammen af én produktdatabase.',
      en: 'Development, operation and optimisation of JeboToys, InoPlay and Kreatool – tied together by one product database.',
      de: 'Entwicklung, Betrieb und Optimierung von JeboToys, InoPlay und Kreatool – verbunden durch eine Produktdatenbank.',
    },
    line: {
      dk: 'Shopify, produktdata og løbende webudvikling for tre brands i ét system.',
      en: 'Shopify, product data and ongoing web development for three brands in one system.',
      de: 'Shopify, Produktdaten und laufende Webentwicklung für drei Marken in einem System.',
    },
    challenge: {
      dk: 'InoPlay driver flere webshops og brands – bl.a. JeboToys og Kreatool – med tusindvis af produkter. Uden fælles struktur ender data i dubletter, forældede sider og manuelt dobbeltarbejde, og shoppene mister både overblik og salgskraft.',
      en: 'InoPlay runs several webshops and brands – including JeboToys and Kreatool – with thousands of products. Without a shared structure, data ends up in duplicates, outdated pages and manual double work, and the shops lose both overview and selling power.',
      de: 'InoPlay betreibt mehrere Webshops und Marken – darunter JeboToys und Kreatool – mit Tausenden von Produkten. Ohne gemeinsame Struktur landen Daten in Dubletten, veralteten Seiten und manueller Doppelarbeit.',
    },
    process: {
      dk: [
        'Jeg står for udvikling, drift og løbende optimering af brandenes websites – herunder JeboToys på Shopify, hvor jeg opdaterer og vedligeholder produkter og bygger nye elementer som bannere og downloadbare PDF-filer ind i sitet.',
        'På InoPlays eget site håndterer jeg produktopdatering og vedligehold og tilføjer både funktionelle og visuelle dele, mens jeg har lagt en struktureret plan for den kommende opdatering af Kreatool.',
        'Under det hele ligger en samlet produktdatabase, hvor alle produkter fra brandene samles ét sted – det modvirker dubletter på tværs af shoppene og understøtter lagerstyring og forsendelse.',
      ],
      en: [
        'I handle development, operation and continuous optimisation of the brand websites – including JeboToys on Shopify, where I update and maintain products and build new elements such as banners and downloadable PDF files into the site.',
        'On the InoPlay site I manage product updates and maintenance and add both functional and visual parts, while I have laid out a structured plan for the upcoming update of Kreatool.',
        'Underneath it all sits a unified product database that gathers every product from the brands in one place – preventing duplicates across the shops and supporting inventory and shipping.',
      ],
      de: [
        'Ich verantworte Entwicklung, Betrieb und laufende Optimierung der Marken-Websites – darunter JeboToys auf Shopify, wo ich Produkte pflege und neue Elemente wie Banner und herunterladbare PDF-Dateien einbaue.',
        'Auf der InoPlay-Website übernehme ich Produktaktualisierung und Wartung und ergänze funktionale wie visuelle Teile, während ich einen strukturierten Plan für die kommende Aktualisierung von Kreatool erstellt habe.',
        'Darunter liegt eine zentrale Produktdatenbank, die alle Produkte der Marken an einem Ort bündelt – das verhindert Dubletten und unterstützt Lager und Versand.',
      ],
    },
    result: {
      dk: 'Tre webshops der vedligeholdes fra ét fælles datagrundlag – med færre fejl, hurtigere opdateringer og en skalerbar struktur, der er klar til at vokse med forretningen.',
      en: 'Three webshops maintained from one shared data foundation – with fewer errors, faster updates and a scalable structure ready to grow with the business.',
      de: 'Drei Webshops, gepflegt aus einer gemeinsamen Datenbasis – mit weniger Fehlern, schnelleren Updates und einer skalierbaren Struktur.',
    },
  },

  {
    slug: 'inoplay-social-media',
    mix: 30,
    featured: false,
    categories: ['social', 'design'],
    year: '2026–',
    client: 'InoPlay ApS',
    image: require('@/assets/InoPlay/SoMe-web/post-1.webp'),
    heroImages: {
      images: [
        require('@/assets/InoPlay/SoMe-web/post-1.webp'),
        require('@/assets/InoPlay/SoMe-web/post-2.webp'),
        require('@/assets/InoPlay/SoMe-web/post-4.webp'),
        require('@/assets/InoPlay/SoMe-web/post-5.webp'),
        require('@/assets/InoPlay/SoMe-web/post-6.webp'),
      ],
      fit: 'contain',
      interval: 4000,
    },
    tools: ['Photoshop', 'Illustrator', 'Meta Ads Manager', 'AI-billedgenerering', 'Copywriting'],
    role: { dk: 'Social media & content, InoPlay', en: 'Social media & content, InoPlay', de: 'Social Media & Content, InoPlay' },
    kicker: { dk: 'Social media & content', en: 'Social media & content', de: 'Social Media & Content' },
    title: {
      dk: 'Content og kampagner for tre brands på fire kanaler',
      en: 'Content and campaigns for three brands across four channels',
      de: 'Content und Kampagnen für drei Marken auf vier Kanälen',
    },
    tagline: {
      dk: 'Fra strategi og årshjul til færdige opslag – organisk og betalt vækst for JeboToys, Kreatool og InoPlay.',
      en: 'From strategy and an annual plan to finished posts – organic and paid growth for JeboToys, Kreatool and InoPlay.',
      de: 'Von Strategie und Jahresplan bis zu fertigen Posts – organisches und bezahltes Wachstum für JeboToys, Kreatool und InoPlay.',
    },
    line: {
      dk: 'Content creation, copywriting og kampagnestrategi på tværs af tre brands.',
      en: 'Content creation, copywriting and campaign strategy across three brands.',
      de: 'Content Creation, Copywriting und Kampagnenstrategie über drei Marken.',
    },
    challenge: {
      dk: 'Tre brands med hver sin målgruppe og et bredt sortiment af produktkategorier skal have en aktiv, genkendelig tilstedeværelse på flere kanaler – uden at indholdet bliver tilfældigt eller usammenhængende.',
      en: 'Three brands, each with its own audience and a wide range of product categories, need an active, recognisable presence across several channels – without the content becoming random or inconsistent.',
      de: 'Drei Marken mit je eigener Zielgruppe und breitem Sortiment brauchen eine aktive, wiedererkennbare Präsenz auf mehreren Kanälen – ohne dass die Inhalte beliebig werden.',
    },
    process: {
      dk: [
        'Jeg driver Facebook og Instagram for JeboToys, Kreatool og InoPlay samt LinkedIn for InoPlay – fra idé til færdigt opslag. Visuelt arbejder jeg med AI-billedgenerering og efterbehandling i Photoshop og Illustrator, så hvert opslag lever op til brandets udtryk.',
        'Jeg skriver copy og captions tilpasset målgruppe og budskab på hver kanal og lægger strategien for både organisk og betalt vækst.',
        'For at holde indsatsen struktureret udarbejder jeg et årshjul med klar ansvarsfordeling, en strategi for de enkelte opslag og en fast metode til at evaluere effekten af hvert opslag – så vi ved, hvad der virker, og hvorfor.',
      ],
      en: [
        'I run Facebook and Instagram for JeboToys, Kreatool and InoPlay plus LinkedIn for InoPlay – from idea to finished post. Visually I work with AI image generation and post-processing in Photoshop and Illustrator, so every post lives up to the brand expression.',
        'I write copy and captions adapted to audience and message on each channel, and set the strategy for both organic and paid growth.',
        'To keep the effort structured, I build an annual content plan with clear ownership, a strategy for the individual posts and a fixed method for evaluating the effect of each post – so we know what works, and why.',
      ],
      de: [
        'Ich betreue Facebook und Instagram für JeboToys, Kreatool und InoPlay sowie LinkedIn für InoPlay – von der Idee bis zum fertigen Post. Visuell arbeite ich mit KI-Bildgenerierung und Nachbearbeitung in Photoshop und Illustrator.',
        'Ich schreibe Copy und Captions passend zu Zielgruppe und Botschaft je Kanal und lege die Strategie für organisches und bezahltes Wachstum fest.',
        'Für Struktur sorge ich mit einem Jahresplan samt klarer Verantwortungsverteilung, einer Strategie für die einzelnen Posts und einer festen Methode zur Auswertung jedes Posts.',
      ],
    },
    result: {
      dk: 'En sammenhængende, datadrevet tilstedeværelse på tværs af tre brands og fire kanaler – hvor hvert opslag har et formål, en målgruppe og en målbar effekt.',
      en: 'A coherent, data-driven presence across three brands and four channels – where every post has a purpose, an audience and a measurable effect.',
      de: 'Eine kohärente, datengetriebene Präsenz über drei Marken und vier Kanäle – bei der jeder Post Zweck, Zielgruppe und messbare Wirkung hat.',
    },
    logos: {
      title: { dk: 'Kanaler jeg har arbejdet med', en: 'Channels I have worked with', de: 'Kanäle, mit denen ich gearbeitet habe' },
      variant: 'channels',
      items: [
        { src: require('@/assets/Logo/case/instagram.webp'), label: 'Instagram' },
        { src: require('@/assets/Logo/case/facebook.webp'), label: 'Facebook' },
        { src: require('@/assets/Logo/case/linkedin.webp'), label: 'LinkedIn' },
      ],
    },
  },

  {
    slug: 'inoplay-katalog-print',
    mix: 8,
    featured: false,
    categories: ['design'],
    year: '2026–',
    client: 'InoPlay ApS',
    image: require('@/assets/InoPlay/Katalog/katalog-banner.webp'),
    cardImage: require('@/assets/InoPlay/Katalog/katalog-banner1.webp'),
    tools: ['InDesign', 'Illustrator', 'Photoshop', 'Print & tryk', 'Produktdata'],
    role: { dk: 'Katalog & print, InoPlay', en: 'Catalogue & print, InoPlay', de: 'Katalog & Print, InoPlay' },
    kicker: { dk: 'Katalog & print', en: 'Catalogue & print', de: 'Katalog & Print' },
    title: {
      dk: 'Produktkatalog på 60+ sider – fra design til tryk',
      en: 'A 60+ page product catalogue – from design to print',
      de: 'Ein Produktkatalog mit 60+ Seiten – vom Design bis zum Druck',
    },
    tagline: {
      dk: 'Ansvar for hele processen: layout, struktur, produkttekster og direkte dialog med trykkeriet.',
      en: 'Responsible for the whole process: layout, structure, product copy and direct dialogue with the printer.',
      de: 'Verantwortlich für den gesamten Prozess: Layout, Struktur, Produkttexte und direkter Kontakt mit der Druckerei.',
    },
    line: {
      dk: '60+ siders katalog med 350+ produkter – designet, struktureret og sat i tryk.',
      en: 'A 60+ page catalogue with 350+ products – designed, structured and sent to print.',
      de: 'Ein Katalog mit 60+ Seiten und 350+ Produkten – gestaltet, strukturiert und in den Druck gebracht.',
    },
    challenge: {
      dk: 'Et produktkatalog med over 350 produkter skal ikke bare se godt ud – det skal være struktureret, konsistent og trykklart, så både kunder og trykkeri kan stole på det fra første til sidste side.',
      en: 'A product catalogue with more than 350 products must not just look good – it has to be structured, consistent and print-ready, so both customers and the printer can rely on it from the first to the last page.',
      de: 'Ein Produktkatalog mit über 350 Produkten muss nicht nur gut aussehen – er muss strukturiert, konsistent und druckfertig sein, damit Kunden und Druckerei sich darauf verlassen können.',
    },
    process: {
      dk: [
        'Jeg har ansvaret for hele kataloget på over 60 sider og 350+ produkter – fra design og visuel stil til struktur, opsætning af produkter og al tekst, fra sidetitler til de enkelte produktbeskrivelser.',
        'Ved siden af kataloget løser jeg det øvrige grafiske og trykte arbejde: væg- og dørfolie, bannere og plakater til forskellige projekter.',
        'Bestilling og den direkte kontakt med trykkeri og kunder er mit ansvarsområde, så materialet lander korrekt trykt og til tiden.',
      ],
      en: [
        'I am responsible for the entire catalogue of more than 60 pages and 350+ products – from design and visual style to structure, product setup and all the text, from page titles to the individual product descriptions.',
        'Alongside the catalogue I handle the rest of the graphic and print work: wall and door film, banners and posters for various projects.',
        'Ordering and the direct contact with the printer and clients is my area of responsibility, so the material arrives correctly printed and on time.',
      ],
      de: [
        'Ich verantworte den gesamten Katalog mit über 60 Seiten und 350+ Produkten – von Design und visuellem Stil über Struktur und Produkt-Setup bis zu allen Texten, von Seitentiteln bis zu den einzelnen Produktbeschreibungen.',
        'Neben dem Katalog übernehme ich die übrige Grafik- und Druckarbeit: Wand- und Türfolien, Banner und Poster für verschiedene Projekte.',
        'Bestellung und der direkte Kontakt mit Druckerei und Kunden liegen in meinem Verantwortungsbereich, damit das Material korrekt gedruckt und pünktlich ankommt.',
      ],
    },
    result: {
      dk: 'Et gennemført katalog og et bibliotek af trykt materiale i konsistent visuel identitet – produceret med styr på både det kreative og den praktiske leverance til tryk.',
      en: 'A polished catalogue and a library of printed material in a consistent visual identity – produced with control of both the creative side and the practical delivery to print.',
      de: 'Ein durchgestalteter Katalog und eine Bibliothek gedruckten Materials in konsistenter visueller Identität – produziert mit Kontrolle über Kreatives und die praktische Lieferung in den Druck.',
    },
    catalog: {
      title: { dk: 'Se nærmer på kataloget', en: 'Flip through the catalogue', de: 'Im Katalog blättern' },
      pageCount: 60,
      pathBase: '/catalog/page-',
    },
  },

  {
    slug: 'ux-ui-prototyper',
    mix: 45,
    featured: false,
    categories: ['uxui', 'design'],
    year: '2020–2023',
    client: { dk: 'Studie- & kundeprojekter', en: 'Study & client projects', de: 'Studien- & Kundenprojekte' },
    image: require('@/assets/screenshots/Figma2.webp'),
    heroImages: {
      images: [
        require('@/assets/screenshots/Figma1.webp'),
        require('@/assets/screenshots/Portfolio.webp'),
        require('@/assets/screenshots/VIKING_PPE.webp'),
      ],
      fit: 'cover',
      interval: 4500,
    },
    tools: ['Figma', 'Adobe XD'],
    role: { dk: 'UX/UI-designer', en: 'UX/UI designer', de: 'UX/UI-Designer' },
    kicker: { dk: 'UX/UI-design', en: 'UX/UI design', de: 'UX/UI-Design' },
    title: {
      dk: 'Prototyper: fra brugerbehov til testbart design',
      en: 'Prototypes: from user needs to testable design',
      de: 'Prototypen: vom Nutzerbedürfnis zum testbaren Design',
    },
    tagline: {
      dk: 'Wireframes og prototyper i Figma og Adobe XD – bl.a. booking-flow og responsive layouts.',
      en: 'Wireframes and prototypes in Figma and Adobe XD – incl. booking flow and responsive layouts.',
      de: 'Wireframes und Prototypen in Figma und Adobe XD.',
    },
    line: {
      dk: 'Brugercentrerede prototyper testet før en linje kode blev skrevet.',
      en: 'User-centred prototypes tested before a single line of code.',
      de: 'Nutzerzentrierte Prototypen, getestet vor der ersten Codezeile.',
    },
    challenge: {
      dk: 'Et website eller en app skal designes, testes og valideres som prototype, før den implementeres – ellers bygger man på antagelser.',
      en: 'A website or app must be designed, tested and validated as a prototype before implementation – otherwise you build on assumptions.',
      de: 'Eine Website oder App muss als Prototyp getestet werden, bevor sie umgesetzt wird.',
    },
    process: {
      dk: [
        'Med afsæt i brugerrejser og målgruppeanalyser byggede jeg wireframes og klikbare prototyper – bl.a. et booking-flow til NemTakeAway og responsive layouts for VIKING PPE.',
        'Prototyperne blev brugertestet og itereret efter feedback, med fokus på brandidentitet, typografi og en konsistent visuel oplevelse.',
      ],
      en: [
        'Based on user journeys and audience analysis I built wireframes and clickable prototypes – incl. a booking flow for NemTakeAway and responsive layouts for VIKING PPE.',
        'The prototypes were user-tested and iterated on feedback, focusing on brand identity, typography and a consistent visual experience.',
      ],
      de: [
        'Auf Basis von User Journeys baute ich Wireframes und klickbare Prototypen – u.a. einen Booking-Flow und responsive Layouts.',
        'Die Prototypen wurden getestet und nach Feedback iteriert.',
      ],
    },
    result: {
      dk: 'En arbejdsmetode, hvor design-beslutninger dokumenteres og valideres hos brugerne, før udviklingen går i gang.',
      en: 'A working method where design decisions are documented and validated with users before development starts.',
      de: 'Eine Arbeitsweise, in der Designentscheidungen validiert werden, bevor die Entwicklung beginnt.',
    },
    logos: {
      title: { dk: 'Værktøjer jeg har arbejdet i', en: 'Tools I have worked in', de: 'Werkzeuge, mit denen ich gearbeitet habe' },
      variant: 'programs',
      items: [
        { src: require('@/assets/Logo/case/figma.webp'), label: 'Figma' },
        { src: require('@/assets/Logo/case/adobexd.webp'), label: 'Adobe XD' },
      ],
    },
  },
];

export const categoryLabels = {
  all: { dk: 'Alle', en: 'All', de: 'Alle' },
  video: { dk: 'Video', en: 'Video', de: 'Video' },
  foto: { dk: 'Foto', en: 'Photo', de: 'Foto' },
  design: { dk: 'Design', en: 'Design', de: 'Design' },
  web: { dk: 'Web', en: 'Web', de: 'Web' },
  social: { dk: 'Social media', en: 'Social media', de: 'Social Media' },
  uxui: { dk: 'UX/UI', en: 'UX/UI', de: 'UX/UI' },
};

export function getCase(slug) {
  return cases.find((c) => c.slug === slug);
}
