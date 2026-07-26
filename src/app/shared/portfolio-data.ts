export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  featured?: boolean;
  placeholder?: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 7, suffix: '+', label: 'Años de experiencia' },
  { value: 10, suffix: '+', label: 'Proyectos y desarrollos' },
  { value: 6, suffix: '', label: 'Certificaciones' },
  { value: 2, suffix: '', label: 'Idiomas · Inglés C2' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Encargado TI',
    company: 'AKVA Group Chile',
    period: 'May 2025 — Actualidad',
    current: true,
    highlights: [
      'Administración de redes organizacionales con Windows Active Directory.',
      'Soporte integral de software y hardware transversal a toda la compañía.',
      'Desarrollo de plataformas internas web con Angular y .NET.',
      'Comunicación constante con casa matriz noruega: licencias, autorizaciones y mejoras de procesos.',
    ],
    tags: ['Active Directory', 'Angular', '.NET', 'Office 365', 'Redes'],
  },
  {
    role: 'Desarrollador / Soporte TI Freelance',
    company: 'Profesional independiente',
    period: 'Sep 2024 — May 2025',
    highlights: [
      'Desarrollo de productos SaaS a medida para startups y medianas empresas.',
      'Configuración de servidores, análisis de servicios y mantenimiento industrial.',
      'Entornos Windows, macOS y Linux; ticketing con Jira, Zendesk y GLPI.',
    ],
    tags: ['SaaS', 'Linux', 'Servidores', 'Jira', 'Zendesk'],
  },
  {
    role: 'Desarrollador de Software',
    company: 'GXConsultores',
    period: 'May 2024 — Sep 2024',
    highlights: [
      'Aplicación web y móvil en Genexus 18 para gestión de comprobantes y gastos.',
      'Creación y optimización de bases de datos en SQL Server.',
      'Diseño UI con Figma y planificación con Trello.',
    ],
    tags: ['Genexus 18', 'SQL Server', 'Figma', 'Trello'],
  },
  {
    role: 'Service Technician',
    company: 'MSD Chile',
    period: 'Sep 2020 — Abr 2024',
    highlights: [
      'Automatizaciones de inventario con Power Automate y Moreapp: reportes y analítica.',
      'Soporte técnico especializado en terreno y remoto para clientes.',
      'Instalación, configuración y mantenimiento de redes y equipos.',
    ],
    tags: ['Power Automate', 'Automatización', 'Redes', 'Soporte'],
  },
  {
    role: 'Técnico en Computación',
    company: 'Vector Spa',
    period: 'Oct 2018 — Jun 2020',
    highlights: [
      'Validación de garantías para retail Falabella y revisión de productos tecnológicos.',
      'Administración de bodega y coordinación de despachos.',
    ],
    tags: ['Hardware', 'Diagnóstico', 'Logística'],
  },
];

export const EDUCATION = [
  {
    title: 'Ingeniero Informático',
    institution: 'Universidad Tecnológica de Chile, INACAP',
    period: '2024 — 2025',
  },
  {
    title: 'Analista Programador',
    institution: 'Centro de Formación Técnica, INACAP',
    period: '2017 — 2021',
  },
  {
    title: 'Técnico Electrónico',
    institution: 'Instituto Inglés Antuquenu',
    period: '2012 — 2017',
  },
];

export const CERTIFICATES = [
  'Fundamentos profesionales del análisis de datos — Microsoft & LinkedIn · 2025',
  'Fundamentos profesionales de gestión de proyectos — Microsoft & LinkedIn · 2025',
  'Fundamentos profesionales en ciberseguridad — Microsoft & LinkedIn · 2025',
  'EF SET Certificate C2 Proficient (75/100) · 2024',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Desarrollo',
    icon: '⌨️',
    skills: ['JavaScript', 'TypeScript', 'Python', 'NodeJS', 'Angular', '.NET', 'SQL Server', 'Integración con APIs', 'Genexus'],
  },
  {
    title: 'Infraestructura & Cloud',
    icon: '☁️',
    skills: ['Azure', 'Azure Entra ID', 'Oracle Cloud', 'Active Directory', 'Windows Admin Center', 'Virtualización', 'Networking', 'Exchange'],
  },
  {
    title: 'Datos & Automatización',
    icon: '📊',
    skills: ['Power BI', 'Análisis de datos', 'Diseño de bases de datos', 'Automatización', 'Power Automate', 'Generación de reportes'],
  },
  {
    title: 'Soporte & Sistemas',
    icon: '🛠️',
    skills: ['Windows', 'macOS', 'Linux', 'Office 365', 'Zendesk', 'TeamViewer', 'Citrix', 'Diagnóstico de hardware', 'Seguridad IT'],
  },
  {
    title: 'Electrónica & Industria',
    icon: '🔌',
    skills: ['Electrónica', 'PLCs', 'IoT', 'Mediciones eléctricas', 'Equipamiento industrial'],
  },
  {
    title: 'Habilidades personales',
    icon: '🤝',
    skills: ['Resolución de problemas', 'Trabajo en equipo', 'Comunicación', 'Proactividad', 'Servicio al cliente', 'Mejora continua'],
  },
];

export const MARQUEE_TECH = [
  'Angular', '.NET', 'TypeScript', 'JavaScript', 'Python', 'NodeJS', 'SQL Server',
  'Azure', 'Power BI', 'Active Directory', 'Linux', 'Office 365', 'IoT', 'PLCs',
];

export const PROJECTS: Project[] = [
  {
    title: 'AKVA Servicios',
    description:
      'Plataforma web de pedidos para servicios internos de AKVA Group Chile: los colaboradores generan pedidos de servicios (almuerzos, gas y más) con reglas de negocio, fechas de cierre y flujos por servicio. Frontend construido íntegramente con Angular y CSS puro; backend en .NET.',
    tags: ['Angular', 'CSS', '.NET', 'SPA', 'Responsive'],
    link: 'https://akvaservicios.akvaproveedores.cl/',
    image: 'projects/akva.png',
    featured: true,
  },
  {
    title: 'Burnout',
    description:
      'Un roguelike de cubículos: gestioná energía, estrés y tareas de oficina jugando cartas en un mazo que evoluciona día a día. Desarrollado con Angular.',
    tags: ['Angular', 'TypeScript', 'Roguelike', 'Juego de cartas'],
    link: 'https://mayorgahdev.github.io/burnout-game/',
    image: 'projects/burnout.png',
    featured: true,
  },
  {
    title: 'Próximo proyecto',
    description: 'Espacio reservado para el siguiente proyecto del portafolio.',
    tags: ['Próximamente'],
    placeholder: true,
  },
];

export const CONTACT = {
  email: 'gabriel.mhollstein@gmail.com',
  location: 'Chile',
};
