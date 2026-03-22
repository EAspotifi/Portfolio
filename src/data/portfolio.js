// ─── PERSONAL INFO ──────────────────────────────────────────────────────────
export const personal = {
  name: 'Ernesto Vílchez',
  role: 'Backend Developer .NET',
  tagline: 'Construyendo APIs RESTful escalables y seguras con .NET y Clean Architecture.',
  bio: `Desarrollador Backend .NET (C#) centrado en construir APIs RESTful escalables y mantenibles.
  Con experiencia en .NET 5/8, Entity Framework Core, Dapper, optimización de consultas SQL
  (SQL Server, MySQL/MariaDB), Docker, CI/CD y autenticación JWT. Aplico Clean Architecture
  y patrones de diseño para entregar soluciones eficientes, seguras y sostenibles.`,
  email: 'ernestjvs2002@gmail.com',
  phone: '+505 5819-7506',
  location: 'Masaya, Nicaragua',
  availability: 'Disponible para nuevos proyectos',
  github: 'https://github.com/EAspotifi',
};

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────
export const social = [
  { platform: 'GitHub', url: 'https://github.com/EAspotifi', icon: 'FaGithub' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/', icon: 'FaLinkedin' },
  { platform: 'Email', url: 'mailto:ernestjvs2002@gmail.com', icon: 'FaEnvelope' },
];

// ─── STATS ───────────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Años de experiencia', value: '3+' },
  { label: 'Proyectos completados', value: '5+' },
  { label: 'Tecnologías dominadas', value: '15+' },
  { label: 'Commits realizados', value: '500+' },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Desarrollo .NET',
    items: [
      { name: 'C# / .NET 5-8', level: 90 },
      { name: 'ASP.NET Core / Web API', level: 88 },
      { name: 'Entity Framework Core', level: 85 },
      { name: 'Dapper / ADO.NET', level: 80 },
      { name: 'MediatR / CQRS', level: 75 },
      { name: 'AutoMapper / FluentVal.', level: 78 },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'SQL Server (MSSQL)', level: 88 },
      { name: 'MySQL / MariaDB', level: 82 },
      { name: 'Índices & SP', level: 85 },
      { name: 'Procedimientos alm.', level: 80 },
    ],
  },
  {
    category: 'Arquitectura & Patrones',
    items: [
      { name: 'Clean Architecture', level: 82 },
      { name: 'REST API Design', level: 88 },
      { name: 'Autenticación JWT', level: 85 },
      { name: 'Control de roles', level: 80 },
      { name: 'Reportes (Crystal/DevExpress)', level: 75 },
    ],
  },
  {
    category: 'DevOps & Herramientas',
    items: [
      { name: 'Docker', level: 78 },
      { name: 'CI/CD (GitHub/GitLab)', level: 75 },
      { name: 'Git / GitLab / GitHub', level: 90 },
      { name: 'Swagger / OpenAPI', level: 82 },
    ],
  },
  {
    category: 'Frontend (complementario)',
    items: [
      { name: 'Angular', level: 65 },
      { name: 'React + Vite', level: 62 },
      { name: 'Python / MicroPython', level: 60 },
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// La sección está abierta deliberadamente para ir agregando proyectos públicos.
// Agrega tus repositorios aquí cuando los hagas públicos.
export const projects = [
  {
    id: 1,
    title: 'Sistema POS',
    description:
      'Sistema punto de venta local desarrollado en .NET 5. Módulos: Kardex, facturación, gestión de clientes. Reportes con SAP Crystal Reports, exportación e impresión. Base de datos MSSQL Server con diseño orientado a integridad y rendimiento.',
    tech: ['.NET 5', 'C#', 'MSSQL Server', 'Crystal Reports', 'WinForms'],
    github: null,
    demo: null,
    featured: true,
    category: 'desktop',
    status: 'completed',
  },
  {
    id: 2,
    title: 'API REST UNI · Sistemas Institucionales',
    description:
      'Diseño y optimización de APIs RESTful con .NET 8 para la Universidad Nacional de Ingeniería. Implementación de autenticación JWT, control de roles, y reportes con DevExpress / FastReport / iTextSharp.',
    tech: ['.NET 8', 'C#', 'Entity Framework Core', 'Dapper', 'JWT', 'SQL Server', 'Docker'],
    github: null,
    demo: null,
    featured: true,
    category: 'backend',
    status: 'active',
  },
  {
    id: 3,
    title: 'PowerAdmin AsusStation',
    description:
      'Aplicación de escritorio en Python con PyQt6 para administrar supergfxctl, asusctl y system76-power en portátiles ASUS y System76/Pop!_OS. Controla modos gráficos, perfiles de energía y batería. Empaquetada como ejecutable .deb para Ubuntu, Fedora y Debian.',
    tech: ['Python', 'PyQt6', 'asusctl', 'supergfxctl', 'system76-power', 'Linux', 'Shell'],
    github: 'https://github.com/EAspotifi/PowerAdmin-AsusStation',
    demo: null,
    featured: true,
    category: 'desktop',
    status: 'active',
  },
  {
    id: 4,
    title: 'PortKiller — GNOME Shell Extension',
    description:
      'Extensión para GNOME Shell orientada a desarrolladores que monitoriza puertos TCP/UDP activos (LISTEN). Permite terminar procesos con un solo clic desde la barra superior, terminación masiva segura, filtros inteligentes para puertos del sistema, contador en la barra y configuración visual.',
    tech: ['JavaScript', 'GNOME Shell', 'CSS', 'Shell', 'Linux'],
    github: 'https://github.com/EAspotifi/portkiller',
    demo: null,
    featured: true,
    category: 'desktop',
    status: 'completed',
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    company: 'Universidad Nacional de Ingeniería · Nic.Ni / DTI',
    role: 'Analista de Sistemas',
    period: 'Ago 2024 – Presente',
    location: 'Managua, Nicaragua',
    description:
      'Diseño y optimización de sistemas críticos institucionales. Desarrollo de APIs seguras, contenedorización y automatización de pipelines.',
    bullets: [
      'Diseñé y optimicé esquemas y consultas en SQL Server (índices, procedimientos almacenados, vistas y funciones) para mejorar el rendimiento de sistemas críticos.',
      'Desarrollé APIs RESTful con .NET 8 usando Entity Framework Core y Dapper; implementé autenticación JWT y control de roles.',
      'Contenerycé servicios con Docker y configuré pipelines CI/CD en GitHub/GitLab, reduciendo fallos de integración.',
      'Elaboré reportes con DevExpress y FastReport; generé PDFs con iTextSharp.',
      'Desarrollé y desplegué frontend con Angular y React (Vite) integrados con APIs backend.',
    ],
    tech: ['.NET 8', 'C#', 'SQL Server', 'EF Core', 'Dapper', 'JWT', 'Docker', 'CI/CD', 'Angular', 'React'],
  },
  {
    id: 2,
    company: 'Centro Juvenil Don Bosco',
    role: 'Profesor de Robótica',
    period: 'Feb 2024 – Jul 2024',
    location: 'Managua, Nicaragua',
    description:
      'Docencia en lógica de programación, Python y robótica práctica con hardware real.',
    bullets: [
      'Impartí clases de lógica de programación y Python/MicroPython adaptando contenidos a distintos niveles.',
      'Diseñé y guié proyectos prácticos con LEGO Mindstorms EV3, Arduino y ESP32.',
      'Evalué progreso de estudiantes y ofrecí retroalimentación personalizada.',
    ],
    tech: ['Python', 'MicroPython', 'Arduino', 'ESP32', 'LEGO Mindstorms'],
  },
  {
    id: 3,
    company: 'Casa del Cerrajero',
    role: 'Desarrollador Full-Stack',
    period: 'Sep 2022 – Dic 2023',
    location: 'Managua, Nicaragua',
    description:
      'Desarrollo completo de sistema POS local: desde diseño de base de datos hasta despliegue y mantenimiento.',
    bullets: [
      'Desarrollé un sistema POS con .NET 5, diseñando y modelando la base de datos en MSSQL Server.',
      'Implementé módulos clave: Kardex, facturación y gestión de clientes con Crystal Reports.',
      'Gestioné el proyecto: planificación, control de versiones y prácticas de release.',
      'Realicé pruebas, refactorización y mejoras de usabilidad para mayor robustez.',
    ],
    tech: ['.NET 5', 'C#', 'MSSQL Server', 'Crystal Reports', 'WinForms'],
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    institution: 'Universidad Nacional de Ingeniería',
    degree: 'Ingeniería en Computación (Egresado)',
    period: 'Ene 2020 – Oct 2024',
    location: 'Managua, Nicaragua',
  },
  {
    id: 2,
    institution: 'Academia de Ciencias Comerciales',
    degree: 'Excel Avanzado',
    period: 'Ene 2023 – Abr 2024',
    location: 'Masaya, Nicaragua',
  },
];

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const certifications = [
  { name: 'Microsoft C# Fundamentals', issuer: 'Microsoft' },
  { name: 'IT Essentials', issuer: 'Cisco' },
  { name: 'Excel Avanzado', issuer: 'Academia' },
  { name: 'Backend Developer .NET 8+', issuer: 'Udemy' },
];

// ─── LANGUAGES ───────────────────────────────────────────────────────────────
export const languages = [
  { name: 'Español', level: 'Nativo', percent: 100, flag: '🇳🇮' },
  { name: 'Inglés', level: 'Intermedio', percent: 65, flag: '🇺🇸' },
];
