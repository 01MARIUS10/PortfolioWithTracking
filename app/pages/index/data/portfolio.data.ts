// Entities — types representing the data shape for the portfolio page

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
  tags: string[]
}

export interface Project {
  icon: string
  title: string
  desc: string
  tags: string[]
  github: string | null
  demo: string | null
}

export interface SkillCategory {
  label: string
  items: string[]
}

export interface Language {
  flag: string
  name: string
  level: string
}

export interface AboutData {
  paragraphs: { html: string }[]
  languages: Language[]
}

export const about: AboutData = {
  paragraphs: [
    {
      html: 'Développeur Fullstack spécialisé dans l\'écosystème <span class="text-slate-200">PHP (Laravel)</span> et <span class="text-slate-200">JavaScript (Vue.js, React)</span>. Confirmé dans la conception d\'architectures scalables — Clean , Modulaire, Hexagonale — et l\'automatisation des déploiements CI/CD.',
    },
    {
      html: 'Mon parcours international — <span class="text-slate-200">Madagascar</span>, <span class="text-slate-200">Mayotte</span>, <span class="text-slate-200">Canada</span> — m\'a permis de développer une forte adaptabilité. Je maîtrise Scrum/Kanban et suis à l\'aise en autonomie comme en équipe distribuée.',
    },
  ],
  languages: [
    { flag: '🇫🇷', name: 'Français', level: 'Maternel / Bilingue' },
    { flag: '🇬🇧', name: 'Anglais',  level: 'Professionnel (réunions techniques)' },
  ],
}

// Static data — separated from UI so it can be replaced by an API call later

export interface HeroData {
  greeting: string
  name: string
  typewriterPhrases: string[]
  stack: string
  bio: string
  cta: { label: string; href: string; primary: boolean }[]
  avatar: { src: string; alt: string }
}

export interface ContactData {
  tagline: string
  phone: string
  whatsapp: string
  location: string
  email: string
  emailLabel: string
  links: { label: string; href: string }[]
  freelance: { nif: string; stat: string }
}

export const contact: ContactData = {
  tagline: 'Un projet, une opportunité ou envie d\'échanger sur une architecture technique ?',
  phone: '+261 32 80 77 805',
  whatsapp: '+261 34 99 486 84',
  location: 'Antananarivo, Madagascar',
  email: 'mailto:mariustsiorimbola@email.com',
  emailLabel: 'Envoyer un email',
  links: [
    { label: 'Portfolio ↗', href: 'https://01marius10-portfolio.netlify.app' },
    { label: 'GitHub ↗',   href: 'https://github.com/01MARIUS10' },
    { label: 'GitLab ↗',   href: 'https://gitlab.com/01MARIUS10' },
    { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/razafitsalama-marius-08517b227/' },
  ],
  freelance: {
    nif:  '501837****',
    stat: '70209 11 2023 0 0****',
  },
}

export const hero: HeroData = {
  greeting: 'Bonjour, je suis',
  name: 'Marius',
  typewriterPhrases: [
    'Développeur Fullstack Confirmé',
    'Architecte Logiciel',
    'Laravel · Vue.js · DevOps',
    'Passionné de DevOps',
  ],
  stack: 'Laravel · Vue.js · Architecture logicielle · DevOps',
  bio: 'Plus de 3 ans d\'expérience dans la conception d\'architectures scalables (Clean, Modulaire, Hexagonale) et l\'automatisation des déploiements. Parcours international : Madagascar · Mayotte · Canada.',
  cta: [
    { label: 'Voir mes projets', href: '#projects', primary: true },
    { label: 'Me contacter',    href: '#contact',  primary: false },
  ],
  avatar: {
    src: '/images/profil-caricature.png',
    alt: 'Caricature de Marius — développeur fullstack',
  },
}

export const experiences: Experience[] = [
  {
    role: 'Mid-Senior Developer',
    company: 'Nuklear',
    location: 'Antananarivo, Madagascar',
    period: '06/2026 – Présent',
    highlights: [
      'Projet Software as a Service (SaaS) pour vente de formation en ligne exclusive multilangue .',
      'Optimisation de la performance de l\'application ',
      'Performance de la base de données et optimisation des requêtes SQL pour réduire le temps de réponse.',
      'Optimisation des cas d\'usage de la RAM et du CPU pour minimiser les overlocking de la base de données',
      'Solution d\'innovation de l\'existant avec indice KPI temps d\'execution AVG et P95',
    ],
    tags: ['Laravel', 'Vue.js 3', 'Docker', 'SaaS', 'Nginx', 'Linux', 'Mysql'],
  },
  {
    role: 'FullStack Developer',
    company: 'Mahafaka',
    location: 'Antananarivo, Madagascar',
    period: '02/2023 – 05/2026',
    highlights: [
      'Conception d\'architectures orientées services (SOA) pour des applications mobiles et web scalables.',
      'Administration complète de serveurs Linux — sécurité, optimisation Nginx/Apache.',
      'Mise en place de pipelines CI/CD via GitHub Actions, réduisant les erreurs de production.',
      'Modélisation et optimisation de bases de données relationnelles complexes (haute performance).',
    ],
    tags: ['Laravel', 'Vue.js 3', 'SOA', 'CI/CD', 'GitHub Actions', 'Linux', 'PostgreSQL'],
  },
  {
    role: 'FullStack Developer',
    company: 'JejeLivraison',
    location: 'Mayotte',
    period: '11/2023 – Présent',
    highlights: [
      'Intégration complète de PayPal API avec gestion sécurisée des transactions.',
      'Module "HideZone" pour la gestion dynamique des zones de livraison via GPS.',
      'Connexion logicielle avec des imprimantes thermiques pour l\'automatisation des tickets.',
      'Fonctionnalités avancées : système de notation, gestion de panier, réédition de commandes.',
    ],
    tags: ['Laravel', 'ReactJS', 'PayPal API', 'GPS / Géofencing', 'REST API'],
  },
  {
    role: 'FullStack Developer',
    company: 'The 23creative',
    location: 'Antananarivo, Madagascar',
    period: '07/2022 – 02/2023',
    highlights: [
      'Outils LegalTech pour huissiers : signature électronique et validation de documents légaux.',
      'Système d\'archivage sécurisé avec génération automatique de clôtures de contrats.',
    ],
    tags: ['Laravel', 'Vue.js', 'LegalTech', 'Signature électronique'],
  },
  {
    role: 'Backend Developer',
    company: 'Vivre en Résidence',
    location: 'Québec, Canada',
    period: '09/2022 – 07/2023',
    highlights: [
      'Migration d\'infrastructure critique sans interruption de service via base de données annexe.',
      'Intégration d\'interfaces optimisées pour la gestion des demandes de services des résidents.',
    ],
    tags: ['PHP', 'Libcms', 'Migration de données', 'UI/UX Backend'],
  },
]

export const projects: Project[] = [
  {
    icon: '📊',
    title: 'Portfolio Analytics',
    desc: 'POrtfolio avec Dashboard d\'analytics en temps réel. Architecture port-adapter, avec Supabase sur SSR Nuxt 4.',
    tags: ['Nuxt 4', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/01MARIUS10/PortfolioWithTracking',
    demo: null,
  },
  {
    icon: '🛵',
    title: 'JejeLivraison Platform',
    desc: 'Plateforme E-Commerce avec GPS/Géofencing, paiement PayPal et impression thermique automatisée.',
    tags: ['Laravel', 'ReactJS', 'PayPal API','Paygreen API', 'Stripe', 'GPS', 'REST API', 'MySQL'],
    github: null,
    demo: "https://jejelivraison.com",
  },
  {
    icon: '🏦',
    title: 'Bank Transaction Microservices',
    desc: 'Microservices pour la gestion des transactions bancaires : sécurité, scalabilité et fiabilité.',
    tags: ['Laravel', 'Clean Architecture', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/01MARIUS10/BankMicroservice',
    demo: null,
  },
  {
    icon: '📢',
    title: 'MIPS',
    desc: "Plateforme de publicité . Centraliser et structurer des annonces pour aider les utilisateurs à trouver des services locaux, des offres d'emploi, des événements et des opportunités commerciales à Madagascar.",
    tags: ['Laravel','Vue.js', 'Features Based Architecture', 'API REST', 'PostgreSQL'],
    github: null,
    demo: "https://mips.mg",
  },
  {
    icon: '⚖️',
    title: 'Kianja',
    desc: 'API REST documentée pour la gestion de dossiers légaux : archivage, validation et traçabilité des actes.',
    tags: ['Laravel', 'Modular Architecture', 'API REST', 'PostgreSQL'],
    github: null,
    demo: "https://kianja.mips.mg/api/documentation",
  },
  {
    icon: '🌍',
    title: 'Paika - ONG',
    desc: 'Plateforme numérique qui permet à chaque citoyen de contribuer et suivre des projets associatifs.',
    tags: ['Nuxt 4', 'Vue.js', 'Pinia', 'API REST', 'Supabase','PostgreSQL'],
    github: null,
    demo: 'https://paika-ong.netlify.app/',
  },
  {
    icon: '👛',
    title: 'E-poketra',
    desc: 'Application de gestion de portefeuille personnel : suivi des transactions, budgets et historique.',
    tags: ['Laravel', 'Vue.js', 'Supabase', 'PostgreSQL'],
    github: "https://github.com/01MARIUS10/WalletManagement",
    demo: null,
  },
  {
    icon: '💬',
    title: 'Forum',
    desc: 'API REST de forum communautaire : gestion des sujets, réponses, votes et modération.',
    tags: ['Laravel', 'API REST', 'MySQL'],
    github: 'https://github.com/01MARIUS10/projet_forum_apiLaravel',
    demo: null,
  },
]

export const skills: SkillCategory[] = [
  { label: 'Backend',        items: ['Laravel', 'PHP', 'Node.js', 'Nitro', 'REST API', 'PostgreSQL', 'MySQL'] },
  { label: 'Frontend',       items: ['Vue.js 3', 'React', 'Nuxt 4', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Architecture',   items: ['SOA', 'Architecture Hexagonale', 'SOLID', 'Design Patterns', 'Port-Adapter'] },
  { label: 'DevOps & Cloud', items: ['CI/CD', 'GitHub Actions', 'Linux / Nginx', 'Docker','Cloudflare', 'Supabase', 'Vercel'] },
  { label: 'Méthodes & Tests', items: ['Scrum / Kanban', 'PHPUnit', 'Pest', 'Vitest', 'Cypress'] },
]
