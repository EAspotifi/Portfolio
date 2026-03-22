export const translations = {
  es: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    nav: {
      about:      'Sobre mí',
      skills:     'Habilidades',
      projects:   'Proyectos',
      experience: 'Experiencia',
      contact:    'Contacto',
    },

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      greeting:     'Hola, soy',
      role:         'Backend Developer .NET',
      tagline:      'Construyendo APIs RESTful escalables y seguras con .NET y Clean Architecture.',
      availability: 'Disponible para nuevos proyectos',
      ctaProjects:  'Ver proyectos',
      ctaContact:   'Contactar',
      socialLabel:  'Encuéntrame en',
      scrollHint:   'Scroll',
    },

    // ── About ────────────────────────────────────────────────────────────────
    about: {
      eyebrow:   '¿Quién soy?',
      title:     'Sobre mí',
      subtitle:  'Desarrollador backend apasionado por la arquitectura limpia y las soluciones sostenibles.',
      bio: `Desarrollador Backend .NET (C#) centrado en construir APIs RESTful escalables y mantenibles.
      Con experiencia en .NET 5/8, Entity Framework Core, Dapper, optimización de consultas SQL
      (SQL Server, MySQL/MariaDB), Docker, CI/CD y autenticación JWT. Aplico Clean Architecture
      y patrones de diseño para entregar soluciones eficientes, seguras y sostenibles.`,
      location:       'Ubicación',
      email:          'Email',
      phone:          'Teléfono',
      openToWork:     'Open to work',
      certTitle:      'Certificaciones',
      langTitle:      'Idiomas',
      eduTitle:       'Educación',
      statsExperience:'Años de experiencia',
      statsProjects:  'Proyectos completados',
      statsTech:      'Tecnologías dominadas',
      statsCommits:   'Commits realizados',
      languages: [
        { name: 'Español', level: 'Nativo',     percent: 100, flag: '🇳🇮' },
        { name: 'Inglés',  level: 'Intermedio', percent: 65,  flag: '🇺🇸' },
      ],
    },

    // ── Skills ───────────────────────────────────────────────────────────────
    skills: {
      eyebrow:  'Stack técnico',
      title:    'Habilidades',
      subtitle: 'Tecnologías y herramientas que uso en el día a día.',
      categories: [
        {
          category: 'Desarrollo .NET',
          items: [
            { name: 'C# / .NET 5-8',           level: 90 },
            { name: 'ASP.NET Core / Web API',   level: 88 },
            { name: 'Entity Framework Core',    level: 85 },
            { name: 'Dapper / ADO.NET',         level: 80 },
            { name: 'MediatR / CQRS',           level: 75 },
            { name: 'AutoMapper / FluentVal.',  level: 78 },
          ],
        },
        {
          category: 'Bases de Datos',
          items: [
            { name: 'SQL Server (MSSQL)',  level: 88 },
            { name: 'MySQL / MariaDB',     level: 82 },
            { name: 'Índices & SP',        level: 85 },
            { name: 'Procedimientos alm.', level: 80 },
          ],
        },
        {
          category: 'Arquitectura & Patrones',
          items: [
            { name: 'Clean Architecture',           level: 82 },
            { name: 'REST API Design',              level: 88 },
            { name: 'Autenticación JWT',            level: 85 },
            { name: 'Control de roles',             level: 80 },
            { name: 'Reportes (Crystal/DevExpress)',level: 75 },
          ],
        },
        {
          category: 'DevOps & Herramientas',
          items: [
            { name: 'Docker',               level: 78 },
            { name: 'CI/CD (GitHub/GitLab)',level: 75 },
            { name: 'Git / GitLab / GitHub',level: 90 },
            { name: 'Swagger / OpenAPI',    level: 82 },
          ],
        },
        {
          category: 'Frontend (complementario)',
          items: [
            { name: 'Angular',              level: 65 },
            { name: 'React + Vite',         level: 62 },
            { name: 'Python / MicroPython', level: 60 },
          ],
        },
      ],
    },

    // ── Projects ─────────────────────────────────────────────────────────────
    projects: {
      eyebrow:        'Lo que construyo',
      title:          'Proyectos',
      subtitle:       'Proyectos reales y repositorios públicos que seguiré agregando aquí.',
      featured:       '★ Destacado',
      statusCompleted:'Completado',
      statusActive:   'Activo',
      statusPlanned:  'Planeado',
      githubCTALabel: 'Sigo construyendo cosas · sígueme para ver las novedades',
      githubCTA:      'Ver mis repositorios en GitHub',
      comingSoonTitle:'Próximos proyectos',
      comingSoonDesc: 'Nuevos repositorios públicos en camino.',
      privateRepo:    'Repositorio privado / próximamente público',
      items: [
        {
          id: 1,
          title: 'Sistema POS',
          description:
            'Sistema punto de venta local desarrollado en .NET 5. Módulos: Kardex, facturación, gestión de clientes. Reportes con SAP Crystal Reports, exportación e impresión. Base de datos MSSQL Server con diseño orientado a integridad y rendimiento.',
          tech: ['.NET 5', 'C#', 'MSSQL Server', 'Crystal Reports', 'WinForms'],
          github: null, demo: null, featured: true, status: 'completed',
        },
        {
          id: 2,
          title: 'API REST UNI · Sistemas Institucionales',
          description:
            'Diseño y optimización de APIs RESTful con .NET 8 para la Universidad Nacional de Ingeniería. Implementación de autenticación JWT, control de roles, y reportes con DevExpress / FastReport / iTextSharp.',
          tech: ['.NET 8', 'C#', 'Entity Framework Core', 'Dapper', 'JWT', 'SQL Server', 'Docker'],
          github: null, demo: null, featured: true, status: 'active',
        },
        {
          id: 3,
          title: 'PowerAdmin AsusStation',
          description:
            'Aplicación de escritorio en Python con PyQt6 para administrar supergfxctl, asusctl y system76-power en portátiles ASUS y System76/Pop!_OS. Controla modos gráficos, perfiles de energía y batería. Empaquetada como .deb para Ubuntu, Fedora y Debian.',
          tech: ['Python', 'PyQt6', 'asusctl', 'supergfxctl', 'system76-power', 'Linux', 'Shell'],
          github: 'https://github.com/EAspotifi/PowerAdmin-AsusStation',
          demo: null, featured: true, status: 'active',
        },
        {
          id: 4,
          title: 'PortKiller — GNOME Shell Extension',
          description:
            'Extensión para GNOME Shell orientada a desarrolladores que monitoriza puertos TCP/UDP activos (LISTEN). Permite terminar procesos con un solo clic desde la barra superior, terminación masiva segura, filtros inteligentes para puertos del sistema, contador en la barra y configuración visual.',
          tech: ['JavaScript', 'GNOME Shell', 'CSS', 'Shell', 'Linux'],
          github: 'https://github.com/EAspotifi/portkiller',
          demo: null, featured: true, status: 'completed',
        },
      ],
    },

    // ── Experience ───────────────────────────────────────────────────────────
    experience: {
      eyebrow:  'Trayectoria',
      title:    'Experiencia',
      subtitle: 'Mi camino profesional construyendo productos de software.',
      items: [
        {
          id: 1,
          company: 'Universidad Nacional de Ingeniería · Nic.Ni / DTI',
          role: 'Analista de Sistemas',
          period: 'Ago 2024 – Presente',
          location: 'Managua, Nicaragua',
          description: 'Diseño y optimización de sistemas críticos institucionales. Desarrollo de APIs seguras, contenedorización y automatización de pipelines.',
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
          description: 'Docencia en lógica de programación, Python y robótica práctica con hardware real.',
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
          description: 'Desarrollo completo de sistema POS local: desde diseño de base de datos hasta despliegue y mantenimiento.',
          bullets: [
            'Desarrollé un sistema POS con .NET 5, diseñando y modelando la base de datos en MSSQL Server.',
            'Implementé módulos clave: Kardex, facturación y gestión de clientes con Crystal Reports.',
            'Gestioné el proyecto: planificación, control de versiones y prácticas de release.',
            'Realicé pruebas, refactorización y mejoras de usabilidad para mayor robustez.',
          ],
          tech: ['.NET 5', 'C#', 'MSSQL Server', 'Crystal Reports', 'WinForms'],
        },
      ],
    },

    // ── Contact ──────────────────────────────────────────────────────────────
    contact: {
      eyebrow:       'Hablemos',
      title:         'Contacto',
      subtitle:      '¿Tienes un proyecto o una oportunidad? Escríbeme.',
      heading:       '¡Trabajemos juntos!',
      description:   'Estoy disponible para proyectos freelance, posiciones de backend y consultoría técnica .NET. Si tienes un reto o quieres colaborar, cuéntamelo.',
      socialLabel:   'También en',
      formName:      'Nombre',
      formEmail:     'Email',
      formMessage:   'Mensaje',
      formSend:      'Enviar mensaje',
      formSentTitle: '¡Mensaje enviado!',
      formSentDesc:  'Gracias por escribirme. Te responderé pronto.',
      namePlaceholder:    'Tu nombre...',
      emailPlaceholder:   'Tu email...',
      messagePlaceholder: 'Tu mensaje...',
    },

    // ── Footer ───────────────────────────────────────────────────────────────
    footer: {
      built: 'Construido con React + Vite + Tailwind.',
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ══════════════════════════════════════════════════════════════════════════
  en: {
    nav: {
      about:      'About',
      skills:     'Skills',
      projects:   'Projects',
      experience: 'Experience',
      contact:    'Contact',
    },

    hero: {
      greeting:     "Hi, I'm",
      role:         '.NET Backend Developer',
      tagline:      'Building scalable and secure RESTful APIs with .NET and Clean Architecture.',
      availability: 'Available for new projects',
      ctaProjects:  'View projects',
      ctaContact:   'Contact me',
      socialLabel:  'Find me on',
      scrollHint:   'Scroll',
    },

    about: {
      eyebrow:   'Who am I?',
      title:     'About me',
      subtitle:  'A backend developer passionate about clean architecture and sustainable solutions.',
      bio: `Backend .NET (C#) developer focused on building scalable and maintainable RESTful APIs.
      Experienced in .NET 5/8, Entity Framework Core, Dapper, SQL query optimization
      (SQL Server, MySQL/MariaDB), Docker, CI/CD, and JWT authentication. I apply Clean Architecture
      and design patterns to deliver efficient, secure, and sustainable solutions.`,
      location:        'Location',
      email:           'Email',
      phone:           'Phone',
      openToWork:      'Open to work',
      certTitle:       'Certifications',
      langTitle:       'Languages',
      eduTitle:        'Education',
      statsExperience: 'Years of experience',
      statsProjects:   'Projects completed',
      statsTech:       'Technologies mastered',
      statsCommits:    'Commits made',
      languages: [
        { name: 'Spanish', level: 'Native',       percent: 100, flag: '🇳🇮' },
        { name: 'English', level: 'Intermediate', percent: 65,  flag: '🇺🇸' },
      ],
    },

    skills: {
      eyebrow:  'Tech stack',
      title:    'Skills',
      subtitle: 'Technologies and tools I use on a daily basis.',
      categories: [
        {
          category: '.NET Development',
          items: [
            { name: 'C# / .NET 5-8',           level: 90 },
            { name: 'ASP.NET Core / Web API',   level: 88 },
            { name: 'Entity Framework Core',    level: 85 },
            { name: 'Dapper / ADO.NET',         level: 80 },
            { name: 'MediatR / CQRS',           level: 75 },
            { name: 'AutoMapper / FluentVal.',  level: 78 },
          ],
        },
        {
          category: 'Databases',
          items: [
            { name: 'SQL Server (MSSQL)',  level: 88 },
            { name: 'MySQL / MariaDB',     level: 82 },
            { name: 'Indexes & SPs',       level: 85 },
            { name: 'Stored Procedures',   level: 80 },
          ],
        },
        {
          category: 'Architecture & Patterns',
          items: [
            { name: 'Clean Architecture',          level: 82 },
            { name: 'REST API Design',             level: 88 },
            { name: 'JWT Authentication',          level: 85 },
            { name: 'Role-based Access Control',   level: 80 },
            { name: 'Reports (Crystal/DevExpress)',level: 75 },
          ],
        },
        {
          category: 'DevOps & Tools',
          items: [
            { name: 'Docker',               level: 78 },
            { name: 'CI/CD (GitHub/GitLab)',level: 75 },
            { name: 'Git / GitLab / GitHub',level: 90 },
            { name: 'Swagger / OpenAPI',    level: 82 },
          ],
        },
        {
          category: 'Frontend (complementary)',
          items: [
            { name: 'Angular',              level: 65 },
            { name: 'React + Vite',         level: 62 },
            { name: 'Python / MicroPython', level: 60 },
          ],
        },
      ],
    },

    projects: {
      eyebrow:        'What I build',
      title:          'Projects',
      subtitle:       'Real projects and public repositories I will keep adding here.',
      featured:       '★ Featured',
      statusCompleted:'Completed',
      statusActive:   'Active',
      statusPlanned:  'Planned',
      githubCTALabel: 'Still building things · follow me to see what\'s coming',
      githubCTA:      'View my repositories on GitHub',
      comingSoonTitle:'Upcoming projects',
      comingSoonDesc: 'New public repositories on the way.',
      privateRepo:    'Private repository / coming soon as public',
      items: [
        {
          id: 1,
          title: 'POS System',
          description:
            'Local point-of-sale system built with .NET 5. Modules: Kardex, invoicing, customer management. Reports with SAP Crystal Reports, export and printing. MSSQL Server database designed for integrity and performance.',
          tech: ['.NET 5', 'C#', 'MSSQL Server', 'Crystal Reports', 'WinForms'],
          github: null, demo: null, featured: true, status: 'completed',
        },
        {
          id: 2,
          title: 'REST API UNI · Institutional Systems',
          description:
            'Design and optimization of RESTful APIs with .NET 8 for the National University of Engineering. JWT authentication, role-based access control, and reports with DevExpress / FastReport / iTextSharp.',
          tech: ['.NET 8', 'C#', 'Entity Framework Core', 'Dapper', 'JWT', 'SQL Server', 'Docker'],
          github: null, demo: null, featured: true, status: 'active',
        },
        {
          id: 3,
          title: 'PowerAdmin AsusStation',
          description:
            'Desktop application in Python with PyQt6 to manage supergfxctl, asusctl and system76-power on ASUS and System76/Pop!_OS laptops. Controls graphics modes, power profiles and battery. Packaged as .deb for Ubuntu, Fedora and Debian.',
          tech: ['Python', 'PyQt6', 'asusctl', 'supergfxctl', 'system76-power', 'Linux', 'Shell'],
          github: 'https://github.com/EAspotifi/PowerAdmin-AsusStation',
          demo: null, featured: true, status: 'active',
        },
        {
          id: 4,
          title: 'PortKiller — GNOME Shell Extension',
          description:
            'Developer-focused GNOME Shell extension that monitors active TCP/UDP ports (LISTEN). Allows terminating processes with a single click from the top bar, safe mass kill, smart filters for system ports, port counter badge, and visual configuration.',
          tech: ['JavaScript', 'GNOME Shell', 'CSS', 'Shell', 'Linux'],
          github: 'https://github.com/EAspotifi/portkiller',
          demo: null, featured: true, status: 'completed',
        },
      ],
    },

    experience: {
      eyebrow:  'Career',
      title:    'Experience',
      subtitle: 'My professional journey building software products.',
      items: [
        {
          id: 1,
          company: 'National University of Engineering · Nic.Ni / DTI',
          role: 'Systems Analyst',
          period: 'Aug 2024 – Present',
          location: 'Managua, Nicaragua',
          description: 'Design and optimization of critical institutional systems. Secure API development, containerization and pipeline automation.',
          bullets: [
            'Designed and optimized SQL Server schemas and queries (indexes, stored procedures, views, functions) to improve critical system performance.',
            'Developed RESTful APIs with .NET 8 using Entity Framework Core and Dapper; implemented JWT authentication and role-based access control.',
            'Containerized services with Docker and configured CI/CD pipelines in GitHub/GitLab, reducing integration failures.',
            'Generated reports with DevExpress and FastReport; exported PDFs with iTextSharp.',
            'Developed and deployed frontend with Angular and React (Vite) integrated with backend APIs.',
          ],
          tech: ['.NET 8', 'C#', 'SQL Server', 'EF Core', 'Dapper', 'JWT', 'Docker', 'CI/CD', 'Angular', 'React'],
        },
        {
          id: 2,
          company: 'Centro Juvenil Don Bosco',
          role: 'Robotics Teacher',
          period: 'Feb 2024 – Jul 2024',
          location: 'Managua, Nicaragua',
          description: 'Teaching programming logic, Python and hands-on robotics with real hardware.',
          bullets: [
            'Taught programming logic and Python/MicroPython, adapting content to different learning levels.',
            'Designed and guided hands-on projects with LEGO Mindstorms EV3, Arduino and ESP32.',
            'Assessed student progress and provided personalized feedback.',
          ],
          tech: ['Python', 'MicroPython', 'Arduino', 'ESP32', 'LEGO Mindstorms'],
        },
        {
          id: 3,
          company: 'Casa del Cerrajero',
          role: 'Full-Stack Developer',
          period: 'Sep 2022 – Dec 2023',
          location: 'Managua, Nicaragua',
          description: 'Full development of a local POS system: from database design to deployment and maintenance.',
          bullets: [
            'Built a POS system with .NET 5, designing and modeling the database in MSSQL Server.',
            'Implemented core modules: Kardex, invoicing, and customer management with Crystal Reports.',
            'Managed the project: task planning, version control and release practices.',
            'Performed testing, refactoring and usability improvements for greater robustness.',
          ],
          tech: ['.NET 5', 'C#', 'MSSQL Server', 'Crystal Reports', 'WinForms'],
        },
      ],
    },

    contact: {
      eyebrow:       "Let's talk",
      title:         'Contact',
      subtitle:      'Have a project or opportunity in mind? Write to me.',
      heading:       "Let's work together!",
      description:   'I am available for freelance projects, backend positions and .NET technical consulting. If you have a challenge or want to collaborate, tell me about it.',
      socialLabel:   'Also on',
      formName:      'Name',
      formEmail:     'Email',
      formMessage:   'Message',
      formSend:      'Send message',
      formSentTitle: 'Message sent!',
      formSentDesc:  'Thank you for reaching out. I will get back to you soon.',
      namePlaceholder:    'Your name...',
      emailPlaceholder:   'Your email...',
      messagePlaceholder: 'Your message...',
    },

    footer: {
      built: 'Built with React + Vite + Tailwind.',
    },
  },
};
