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
      html: 'Développeur Fullstack spécialisé dans l\'écosystème <span class="text-slate-200">PHP (Laravel)</span> et <span class="text-slate-200">JavaScript (Vue.js, React)</span>. Expert dans la conception d\'architectures scalables — SOA, Hexagonale — et l\'automatisation des déploiements CI/CD.',
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
  email: string
  emailLabel: string
  links: { label: string; href: string }[]
}

export const contact: ContactData = {
  tagline: 'Un projet, une opportunité ou envie d\'échanger sur une architecture technique ?',
  email: 'mailto:mariustsiorimbola@email.com',
  emailLabel: 'Envoyer un email',
  links: [
    { label: 'GitHub ↗',   href: 'https://github.com/01MARIUS10' },
    { label: 'GitLab ↗',   href: 'https://gitlab.com/01MARIUS10' },
    { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/razafitsalama-marius-08517b227/' },
  ],
}

export const hero: HeroData = {
  greeting: 'Bonjour, je suis',
  name: 'Marius',
  typewriterPhrases: [
    'Développeur Fullstack Senior',
    'Architecte Logiciel',
    'Expert Laravel · Vue.js',
    'Passionné de DevOps',
  ],
  stack: 'Laravel · Vue.js · Architecture logicielle · DevOps',
  bio: 'Plus de 3 ans d\'expérience dans la conception d\'architectures scalables (SOA, Hexagonale) et l\'automatisation des déploiements. Parcours international : Madagascar · Mayotte · Canada.',
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
    role: 'FullStack Developer',
    company: 'Mahafaka',
    location: 'Antananarivo, Madagascar',
    period: '02/2023 – Présent',
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
    desc: 'Dashboard d\'analytics en temps réel. Architecture port-adapter, auth Supabase 100% backend, SSR Nuxt 4.',
    tags: ['Nuxt 4', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/01MARIUS10/PortfolioWithTracking',
    demo: null,
  },
  {
    icon: '🚚',
    title: 'JejeLivraison Platform',
    desc: 'Plateforme de livraison avec GPS/Géofencing, paiement PayPal et impression thermique automatisée.',
    tags: ['Laravel', 'ReactJS', 'PayPal API', 'GPS', 'REST API', 'MySQL'],
    github: null,
    demo: null,
  },
  {
    icon: '⚖️',
    title: 'Kianja',
    desc: 'Suite pour huissiers : signature électronique, validation de documents légaux, archivage sécurisé.',
    tags: ['Laravel', 'Modular Architecture', 'API REST', 'PostgreSQL'],
    github: null,
    demo: null,
  },
  {
    icon: '⚖️',
    title: 'E-poketra',
    desc: 'Suite pour huissiers : signature électronique, validation de documents légaux, archivage sécurisé.',
    tags: ['Laravel', 'Vue.js', 'API REST', 'PostgreSQL'],
    github: null,
    demo: null,
  },
  {
    icon: '⚖️',
    title: 'Bank Transaction Microservices',
    desc: 'Microservices pour la gestion des transactions bancaires : sécurité, scalabilité et fiabilité.',
    tags: ['Laravel', 'Clean Architecture', 'Docker', 'PostgreSQL'],
    github: null,
    demo: null,
  },
  {
    icon: '⚖️',
    title: 'Forum ',
    desc: 'Microservices pour la gestion des transactions bancaires : sécurité, scalabilité et fiabilité.',
    tags: ['Laravel', 'API REST', 'MySQL'],
    github: null,
    demo: null,
  },
]

export const skills: SkillCategory[] = [
  { label: 'Backend',        items: ['Laravel', 'PHP', 'Node.js', 'Nitro', 'REST API', 'PostgreSQL', 'MySQL'] },
  { label: 'Frontend',       items: ['Vue.js 3', 'React', 'Nuxt 4', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Architecture',   items: ['SOA', 'Architecture Hexagonale', 'SOLID', 'Design Patterns', 'Port-Adapter'] },
  { label: 'DevOps & Cloud', items: ['CI/CD', 'GitHub Actions', 'Linux / Nginx', 'Docker', 'Supabase', 'Vercel'] },
  { label: 'Méthodes & Tests', items: ['Scrum / Kanban', 'PHPUnit', 'Pest', 'Vitest', 'Cypress'] },
]
