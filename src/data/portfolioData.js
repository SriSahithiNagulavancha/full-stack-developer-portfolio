export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Sri Sahithi Nagulavancha",
  role: "Frontend-Focused Full-Stack Developer",
  location: "Bangalore, India",
  email: "nsahithi2000@gmail.com",
  github: "https://github.com/SriSahithiNagulavancha",
  LinkedinIcon: "https://www.linkedin.com/in/srisahithi-nagulavancha/",
  resume: "/resume.pdf",
  tagline:
    "I build responsive React applications and I am expanding into MERN stack and Java Spring Boot backend development.",
};

export const metrics = [
  { value: "6+", label: "Projects" },
  { value: "MERN", label: "Current Stack" },
  { value: "Java", label: "Backend Learning" },
  { value: "React", label: "Current focus" },
];

export const skills = [
  {
    category: "Frontend",
    level: "Strong",
    items: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI",
      "Framer Motion",
    ],
  },
  {
    category: "React Ecosystem",
    level: "Building advanced",
    items: [
      "Components",
      "Props",
      "State",
      "Hooks",
      "React Router",
      "Context API",
      "API Integration",
    ],
  },
  {
    category: "MERN Stack",
    level: "Currently learning",
    items: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "JWT Auth",
      "CRUD Apps",
    ],
  },
  {
    category: "Java Backend",
    level: "Learning",
    items: [
      "Core Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "Spring MVC",
      "REST API Design",
    ],
  },
  {
    category: "Tools",
    level: "Daily use",
    items: ["Git", "GitHub", "VS Code", "Vite", "Postman", "Vercel", "Render"],
  },
  {
    category: "Software Engineering",
    level: "Growing",
    items: [
      "Agile/Scrum",
      "CI/CD Concepts",
      "Unit Testing",
      "Debugging",
      "MVC Architecture",
      "Performance Optimization",
    ],
  },
];

export const journey = [
  {
    period: "Foundation",
    title: "HTML, CSS and JavaScript",
    text: "Built landing pages, clone layouts, DOM tasks and responsive UI projects to strengthen core frontend fundamentals.",
  },
  {
    period: "Frontend Focus",
    title: "React, Tailwind CSS and UI Engineering",
    text: "Built dashboard apps, e-commerce UI, portfolio systems, reusable components, routing, animations and API-based interfaces.",
  },
  {
    period: "Current Learning",
    title: "MERN Stack Development",
    text: "Learning full-stack development with MongoDB, Express.js, React.js and Node.js through CRUD apps, authentication and REST API projects.",
  },
  {
    period: "Backend Expansion",
    title: "Java Spring Boot Backend",
    text: "Expanding backend skills with Core Java, Spring Boot, Hibernate, MySQL, MVC architecture and production-style REST API design.",
  },
];

export const projects = [
  {
    title: "Atmos Weather Dashboard",
    category: "Featured React Project",
    description:
      "Responsive weather dashboard with real-time city weather, AQI insights, forecast visualization, search history, geolocation and dynamic weather-themed UI.",
    tech: [
      "React",
      "Tailwind CSS",
      "OpenWeather API",
      "Framer Motion",
      "LocalStorage",
    ],
    image: "/projects/weather.png",
    live: "https://atmos-weather-dashboard-srisahithinagulavanchas-projects.vercel.app/",
    github: "https://github.com/SriSahithiNagulavancha/atmos-weather-dashboard",
    featured: true,
  },
  {
    title: "Furniture E-Commerce Platform",
    category: "React Showcase Project",
    description:
      "Modern furniture shopping interface with product listing, filtering, wishlist/cart workflow, reusable components and clean store-style layout.",
    tech: ["React", "Tailwind CSS", "React Router", "Context API"],
    image: "/projects/furniture.png",
    live: "https://your-project.vercel.app",
    github: "https://github.com/SriSahithiN/furniture-store",
    featured: true,
  },
  {
    title: "Daily Life Noter",
    category: "MERN Stack Project",
    description:
      "Full-stack note management app with CRUD operations, Express API routes, MongoDB Atlas persistence and React frontend integration.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    image: "/projects/noter.png",
    live: "https://your-project.vercel.app",
    github: "https://github.com/SriSahithiN/daily-life-noter",
    featured: true,
  },
  {
    title: "AI Productivity Workspace",
    category: "MERN + AI Project",
    description:
      "SaaS-style productivity workspace planned with AI task generation, note summarization, protected dashboards and JWT authentication.",
    tech: ["MERN Stack", "JWT Auth", "OpenAI API", "Role-Based Access"],
    image: "/projects/ai-workspace.png",
    live: "https://your-project.vercel.app",
    github: "https://github.com/SriSahithiN/ai-productivity-workspace",
    featured: false,
  },
  {
    title: "Job Board Application",
    category: "MERN Stack Project",
    description:
      "Role-based job board where employers can post jobs and candidates can apply, including dashboard views and secured API routes.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: "/projects/job-board.png",
    live: "https://your-project.vercel.app",
    github: "https://github.com/SriSahithiN/job-board",
    featured: false,
  },
  {
    title: "Task Manager REST API",
    category: "Java Backend Project",
    description:
      "Spring Boot backend project with CRUD task management, Hibernate ORM, MySQL persistence, validation and structured REST API design.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST API"],
    image: "/projects/task-api.png",
    live: "https://your-project.vercel.app",
    github: "https://github.com/SriSahithiN/task-manager-api",
    featured: false,
  },
  {
    title: "Hotel Booking UI",
    category: "Frontend App",
    description:
      "Mobile-first hotel booking application with authentication screens, hotel details, booking flow and localStorage-based data handling.",
    tech: ["React", "Tailwind CSS", "LocalStorage", "Routing"],
    image:"/projects/hotel-booking.png",
    live: "https://your-project.vercel.app",
    github: "https://github.com/SriSahithiN/hotel-booking-ui",
    featured: false,
  },
  {
    title: "Personal Portfolio Website",
    category: "React Portfolio",
    description:
      "Responsive developer portfolio with animated sections, theme switching, reusable data-driven components and recruiter-friendly project presentation.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "/projects/portfolio.png",
    live: "https://your-project.vercel.app",
    github: "https://github.com/SriSahithiN/portfolio",
    featured: false,
  },
];
