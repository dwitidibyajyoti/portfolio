export const HDSHARE_DOWNLOAD_URL =
  "https://downlod.s3.ap-south-1.amazonaws.com/HDShare-v1.1.0.dmg";

export const HDSHARE_PRO_CHECKOUT_URL =
  "https://dwitiapps.lemonsqueezy.com/checkout/buy/14f97665-6146-4cf5-9952-027b89919c55";

export const siteConfig = {
  name: "Dwitidibyajyoti Sahoo",
  shortName: "Dwitidibyajyoti",
  role: "Full-Stack Software Engineer",
  tagline: "Software Engineer & Full-Stack Developer",
  description:
    "Full-Stack Developer with 4+ years of hands-on experience designing and delivering end-to-end web applications across fintech, healthtech, logistics, gaming, and e-commerce domains using React.js, Next.js, Node.js, Express.js, Laravel, GraphQL, Python, AWS, and Docker.",
  location: "Bhubaneswar, Odisha, India",
  url: "https://github.com/dwitidibyajyoti",
  socials: {
    github: "https://github.com/dwitidibyajyoti",
    twitter: "https://twitter.com/dwitidibyajyoti",
    linkedin: "https://linkedin.com/in/dwitidibyajyoti",
    email: "dwitidibyajyoti@gmail.com",
    facebook: "https://www.facebook.com/dwitidibyajyotisahoo",
    instagram: "https://www.instagram.com/dwitidibyajyoti/",
  },
};

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  highlights: string[];
  featured?: boolean;
}

export const workExperience = [
  {
    role: "Full-Stack Software Engineer",
    company: "Oqulus Tech LLC",
    website: "https://oqulustech.com/",
    location: "Bhubaneswar, India",
    period: "Dec 2025 – Present",
    description:
      "Building and scaling full-stack modules across fintech and foodtech platforms, optimizing frontend performance, designing GraphQL/REST APIs, and integrating OpenAI intelligence.",
    responsibilities: [
      "Built and maintained scalable full-stack modules with React.js on the frontend and Node.js/Express.js on the backend.",
      "Reduced page load time by ~25% via component-level optimization, lazy loading, and code splitting techniques.",
      "Designed and integrated REST and GraphQL APIs, ensuring clean and efficient frontend-to-backend data flow.",
      "Integrated AI-assisted smart filtering and content recommendation features using OpenAI APIs to improve UX.",
      "Enforced code quality through modular architecture, reusable component libraries, and regular code reviews.",
      "Worked within Agile sprints, contributing to planning, stand-ups, and cross-functional feature delivery.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "GraphQL", "OpenAI API", "WebSockets", "Agile"],
  },
  {
    role: "Software Developer",
    company: "Quotus Software Solutions",
    website: "https://quotus.co.in/",
    location: "Bhubaneswar, India",
    period: "Jun 2023 – Nov 2025",
    description:
      "Led full-stack web applications and AI/NLP project initiatives, architecting microservices, cloud deployments, and intelligent data extraction pipelines.",
    responsibilities: [
      "Managed NLP projects overseeing speech-to-text conversion & structured data extraction using OpenAI API & ChatGPT.",
      "Developed and maintained high-performance web applications using Next.js, GraphQL, TypeScript, and Kubernetes.",
      "Managed cloud infrastructure on Amazon Web Services (AWS) and containerized apps with Docker for consistent deployments.",
      "Utilized Firebase for real-time database and authentication, collaborating closely with UI/UX designers via Figma.",
    ],
    tech: ["Next.js", "Node.js", "OpenAI API", "GraphQL", "Kubernetes", "AWS", "TypeScript", "Docker", "Firebase"],
  },
  {
    role: "Software Engineer",
    company: "HyScaler (formerly NetTantra)",
    website: "https://hyscaler.com/",
    location: "Bhubaneswar, India",
    period: "Apr 2021 – May 2023",
    description:
      "Engineered robust web applications, healthcare platforms, and e-commerce systems with modern JavaScript frameworks and PHP/Laravel backends.",
    responsibilities: [
      "Developed and maintained full-stack web applications using Next.js, React.js, Node.js, and Express.js REST APIs.",
      "Architected backend microservices and database schemas using Laravel (PHP) and MySQL with complex CRUD operations.",
      "Deployed and monitored scalable production applications on AWS cloud infrastructure.",
      "Implemented version control workflows with Git/GitHub and built responsive UIs using CSS, Bootstrap, and Materialize CSS.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "Laravel", "MySQL", "AWS", "Elasticsearch"],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  links?: {
    label: string;
    url: string;
    type?: "website" | "instagram" | "facebook" | "map";
  }[];
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Krutika Institute of Technical Education (KITE)",
    location: "Bhubaneswar, India",
    period: "2023 – 2026",
    links: [
      {
        label: "kiteodisha.com",
        url: "https://kiteodisha.com/",
        type: "website",
      },
    ],
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Govt. Polytechnic College",
    location: "Dhenkanal, India",
    period: "2016 – 2019",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/govt.poly_dhenkanal/",
        type: "instagram",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/p/Govt-Polytechnic-Dhenkanal-100063642237141/",
        type: "facebook",
      },
    ],
  },
  {
    degree: "Secondary School Education (10th)",
    institution: "Badasuanlo High School (Badasuanlo H.S.)",
    location: "Badasuanlo, Dhenkanal, Odisha",
    period: "2016",
    links: [
      {
        label: "School Portal",
        url: "https://schools.org.in/dhenkanal/21140500301/badasuanlo-h-s.html",
        type: "website",
      },
      {
        label: "Google Maps",
        url: "https://share.google/oP0d52YY2oipaiM6q",
        type: "map",
      },
    ],
  },
];

export const portfolioProjects: ProjectItem[] = [
  {
    title: "ClientLane CRM",
    category: "Founder / Independent SaaS Product",
    description:
      "Modern CRM and client workflow workspace built for freelancers, consultants, and small businesses to manage clients, track deals, and accelerate business growth without enterprise complexity.",
    tags: ["Next.js", "React.js", "Node.js", "Tailwind CSS", "Analytics", "SaaS"],
    link: "https://www.clientlane.in/",
    highlights: [
      "Visual deal pipeline with stage transitions, deal values & revenue tracking",
      "Unified client directory with contact profiles, company details & histories",
      "Deal conversations, file attachments, and business growth analytics dashboard",
    ],
    featured: true,
  },
  {
    title: "HDShare for macOS",
    category: "Independent macOS App",
    description:
      "Native macOS application and menu bar utility for lossless video splitting tailored for WhatsApp, Discord, and Telegram limits with 0% quality loss.",
    tags: ["SwiftUI", "macOS", "Next.js", "Tailwind CSS"],
    link: "/hdshare",
    highlights: [
      "Lossless instant slicing in 1-2 seconds with zero re-encoding",
      "Finder Quick Actions integration & one-click clipboard copying",
      "Preset limits for WhatsApp Status, HD Chat, Discord & Telegram",
    ],
    featured: true,
  },
  {
    title: "Meta-Game Platform",
    category: "Independent Build · Gaming & FinTech",
    description:
      "Comprehensive web gaming platform featuring secure payment gateway integrations, admin control systems, and marketing affiliate networks.",
    tags: ["Node.js", "React", "Express.js", "Payment Gateways", "MongoDB"],
    highlights: [
      "Engineered secure payment transaction processing & ledger reconciliation",
      "Built feature-rich admin dashboard for user management & game analytics",
      "Developed affiliate tracking modules driving user acquisition strategies",
    ],
    featured: false,
  },
  {
    title: "Fidelity Fintech Dashboard",
    category: "Client Platform · FinTech & AI",
    description:
      "Contributed to frontend modules and financial data aggregation dashboards with multi-API integrations and AI-driven data summaries at Fidelity.",
    tags: ["React.js", "Node.js", "OpenAI API", "REST APIs", "Tailwind CSS"],
    link: "https://www.fidelity.com/",
    highlights: [
      "Developed responsive React.js UI with multi-API data aggregation and real-time charting",
      "Integrated AI-driven summarization engines, improving feature release cadence by ~30%",
      "Engineered strict client-side validation and modular state management for transactions",
    ],
    featured: false,
  },
  {
    title: "FoodTec Solutions",
    category: "Client Platform · FoodTech",
    description:
      "Engineered dynamic frontend modules with real-time WebSocket order tracking and AI-powered personalized food recommendation engines for FoodTec Solutions.",
    tags: ["React.js", "Node.js", "WebSockets", "OpenAI API", "Express.js"],
    link: "https://foodtecsolutions.com/",
    highlights: [
      "Delivered dynamic frontend modules with live bidirectional WebSocket order dispatch tracking",
      "Engineered AI-assisted smart filtering and dish recommendations tailored to user habits",
      "Optimized rendering performance, reducing page load latency by ~25%",
    ],
    featured: false,
  },
  {
    title: "Aetna Healthcare",
    category: "Client Platform · Healthcare",
    description:
      "Contributed as a software developer on enterprise healthcare portals and Python data pipelines for member services and insurance workflows at Aetna.",
    tags: ["React.js", "Python", "REST APIs", "AWS", "SQL"],
    link: "https://www.aetna.com/",
    highlights: [
      "Engineered responsive React.js modules for healthcare member services and health plan workflows",
      "Developed backend data processing scripts and API services using Python",
      "Ensured strict HIPAA compliance, high security, and optimized database query speeds",
    ],
    featured: false,
  },
  {
    title: "mjunction",
    category: "Client Platform · B2B E-Commerce",
    description:
      "Worked on delivery logistics management and buyer-vendor communication modules for mjunction, India's largest B2B e-marketplace.",
    tags: ["Angular", "Java", "REST APIs", "Enterprise Systems"],
    link: "https://www.mjunction.in",
    highlights: [
      "Designed and deployed delivery management module inspired by modern e-commerce leaders",
      "Built live milestone tracking and expected delivery calculation algorithms",
      "Implemented direct interactive messaging between buyers and vendors",
    ],
    featured: false,
  },
  {
    title: "Doctegrity",
    category: "Client Platform · Telehealth",
    description:
      "Engineered full-stack features including real-time KYC video calling and identity verification for telehealth platform Doctegrity.",
    tags: ["Node.js", "React", "WebRTC", "Express.js", "AWS"],
    link: "https://www.doctegrity.com/",
    highlights: [
      "Engineered encrypted KYC video verification rooms for patient onboarding",
      "Seamlessly unified frontend consultation portals with backend medical record APIs",
      "Optimized load times and video streaming reliability across mobile & web",
    ],
    featured: false,
  },
  {
    title: "MangoRx",
    category: "Client Platform · Telehealth E-Commerce",
    description:
      "Contributed to full-stack pharmacy systems, recurring subscriptions, dynamic shipping calculation, and pharmacist Q&A for MangoRx.",
    tags: ["Laravel", "Next.js", "PHP", "MySQL", "Stripe"],
    link: "https://mangorx.com/",
    highlights: [
      "Constructed automated recurring subscription and refill billing systems",
      "Developed interactive patient-to-pharmacist confidential Q&A channel",
      "Handled complex shipping logistics and payment gateway integrations",
    ],
    featured: false,
  },
  {
    title: "Artisan Fertility & Medical",
    category: "Client Platform · Healthcare Analytics",
    description:
      "Implemented high-performance Elasticsearch search queries, SQL database optimizations, and AWS cloud reliability enhancements for Artisan.",
    tags: ["Elasticsearch", "AWS", "SQL", "Node.js"],
    link: "https://artisanfertility.com/",
    highlights: [
      "Integrated Elasticsearch to enable sub-second querying across massive health datasets",
      "Performed database optimizations ensuring zero data loss and ACID compliance",
      "Resolved mission-critical bugs and enhanced cloud reliability on AWS",
    ],
    featured: false,
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "PHP", "Python", "SQL", "HTML5 / CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "Laravel", "GraphQL", "Angular"],
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase Realtime DB", "Redis"],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "Git & GitHub", "Elasticsearch", "Figma"],
  },
];

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  href: string;
  gradient: string;
}

export const products: Product[] = [
  {
    slug: "clientlane",
    name: "ClientLane",
    tagline: "CRM for Freelancers & Small Businesses",
    description:
      "All-in-one simple CRM to manage clients, track deals, attach files, collaborate, and grow your business.",
    icon: "💼",
    href: "https://www.clientlane.in/",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    slug: "hdshare",
    name: "HDShare",
    tagline: "Lossless Video Splitting for macOS",
    description:
      "Slice videos into exact parts for WhatsApp, Discord, Telegram — zero compression, 100% quality preserved.",
    icon: "🎬",
    href: "/hdshare",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
