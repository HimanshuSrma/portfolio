import { Injectable } from '@angular/core';
import { Experience, Education, Project, Skill, Contact, PersonalInfo } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getPersonalInfo(): PersonalInfo {
    return {
      name: 'Himmanshu Sharma',
      title: 'Frontend Developer',
      subtitle: 'Angular Developer with 4+ years of experience',
      bio: 'Passionate Angular developer with experience across diverse industries. Skilled in creating dynamic and user-friendly applications. Proven track record of delivering scalable solutions and enhancing user experiences through innovative frontend development.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      resumeUrl: '#'
    };
  }

  getContact(): Contact {
    return {
      email: 'himmanshusharma45@gmail.com',
      phone: '+91 78359 12569',
      location: 'Gurugram, India',
      github: '',
      linkedin: 'https://linkedin.com/in/Himmanshu-Sharma',
      website: '#'
    };
  }

  getExperience(): Experience[] {
    return [
      {
        id: '3',
        company: 'Wattmonk Technology Pvt. Ltd.',
        position: 'Sr. Software Engineer',
        location: 'Gurugram, HR',
        startDate: 'Nov 2024',
        endDate: 'Present',
        isOngoing: true,
        description: 'Built an AI-powered OMS that reduced ordering time by 70%, and a Drafting Tool to replace internal AutoCAD use.',
        responsibilities: [
          'Developed a scalable e-commerce-style Order Management System (OMS), enabling users to order solar services in a single-step flow, reducing order time by 70%.',
          'Integrated AI-powered document parsing to auto-populate form data from uploaded PDFs, eliminating over 90% of manual input and significantly improving user efficiency.',
          'Designed and implemented modular, reusable UI components with responsive layouts and dynamic validations, enhancing maintainability and increasing form submission rates by 60%.',
          'Built a custom web-based Drafting Tool to replace AutoCAD for the Operations team, streamlining house layout creation and delivery. Integrated a DXF parser to load and visualize architectural data on Google Maps, enabling precise layout alignment and browser-based editing.',
        ],
        // 'Utilized Angular, Angular Material, PrimeNG, RxJS, Bootstrap, SCSS and other technologies to deliver a comprehensive and user-friendly platform'
        technologies: ['Angular', 'Angular Material', 'RxJS', 'TypeScript', 'Google Maps APIs', 'DXF Parser', 'CometChat', 'Payment Gateway Integration'],
        achievements: [
          'Reduced order time by ~70%',
          'Accelerated revenue growth by ~40%',
          'Developed "Drafting tool" flagship product alternative of AutoCAD for Operations team',
        ]
      },
      {
        id: '2',
        company: 'Stupa Sports Analytics Pvt. Ltd.',
        position: 'Angular Developer',
        location: 'Gurugram, HR',
        startDate: 'May 2024',
        endDate: 'Oct 2024',
        isOngoing: false,
        description: 'Developed a tournament management system for the European Table Tennis Union, supporting federations across multiple countries. Built frontend modules for registration, invoicing, and match fixtures with PDF import/export and result print integration. Ensured responsive UI, multi-language support, and high performance during live events.',
        responsibilities: [
          "Developed a Tournament Organizing System for the European Table Tennis Union, enabling custom roles, player registration, fixtures, orders, and invoicing for federations across Spain, Norway, Sweden, and Slovenia.",
          "Built and integrated frontend modules with backend microservices for registration, order processing, and invoicing, delivering a responsive and intuitive user experience.",
          "Implemented multi-language support and mobile responsiveness, optimizing the UI to handle high traffic during live tournaments.",
          "Integrated PDF import/export features for user data management, allowing federations to upload player data and download match results with ease.",
          "Implemented print functionality to support printing of fixtures and match results directly from the browser.",
          "Collaborated with cross-functional teams including backend developers, QA engineers, and product managers to ensure smooth development and deployment.",
          "Ensured scalability and performance of the system to support multiple concurrent tournaments and large user volumes during peak traffic."
        ],
        technologies: ['Angular', 'Angular Material', 'PrimeNG', 'TypeScript', 'RxJS', 'JavaScript', 'jQuery', 'AJAX', 'JSON', 'Bootstrap', 'TailwindCSS', 'HTML', 'CSS/SCSS'],
        achievements: [
          'Built and launched a tournament system used by 4+ national federations, supporting 10,000+ players.',
          'Implemented multi-language support and mobile responsiveness, enhancing user experience across multiple countries.',
          'Added PDF import/export and print functionality, significantly reducing manual data entry workload.'
        ]

      },
      {
        id: '1',
        company: 'Benepik Technology Pvt. Ltd.',
        position: 'Software Developer',
        location: 'Gurugram, HR',
        startDate: 'Oct 2021',
        endDate: 'Apr 2024',
        isOngoing: false,
        description: 'Played a key role in building a white-label web app used by 70,000+ insurance advisors, developing features like campaign management and sales incentives. Created a WhatsApp loyalty program and an interview management portal. Developed an HR engagement system, performed UAT, and collaborated with cross-functional teams to deliver quality products.',
        responsibilities: [
          "Played a key role in the end-to-end development of a white-label web application currently used by over 70,000 insurance advisors.",
          "Built key features for the organization's flagship product, including campaign management, TDS tracking, Refer & Earn, and automated sales incentive tracking.",
          "Developed a WhatsApp-based loyalty program for Max Life Insurance, focusing on user experience, interaction flows, and seamless frontend integration with backend APIs.",
          "Created an interview management portal with separate admin and user interfaces, enabling question management, interview sessions, and real-time result tracking.",
          "Developed an HR engagement and reward & recognition platform to drive employee motivation and interaction.",
          "Conducted user acceptance testing (UAT) for multiple products to ensure quality and alignment with business requirements.",
          "Collaborated with cross-functional teams including developers, UX designers, and QA testers to deliver cohesive, user-centric solutions."
        ],
        technologies: ['Angular', 'Angular Material', 'TypeScript', 'RxJS', 'JavaScript', 'jQuery', 'AJAX', 'JSON', 'Bootstrap', 'TailwindCSS', 'HTML', 'CSS/SCSS'],
        achievements: [
          'Effective by 35% in the first month',
          'Led performance improvements for flagship product'
        ]
      },
      {
        id: '0',
        company: 'Benepik Technology Pvt. Ltd.',
        position: 'Software Developer - Intern',
        location: 'Gurugram, HR',
        startDate: 'Mar 2021',
        endDate: 'Apr 2024',
        isOngoing: false,
        description: 'Designed and developed impactful web platforms focused on social recognition — one to honor contributions during the COVID-19 pandemic, and another to facilitate nominations and awards celebrating women on International Women’s Day.',
        responsibilities: [
          'Developed a web platform to honor and showcase the contributions of individuals during the COVID-19 pandemic.',
          'Developed a nomination and awards website to celebrate women on International Women’s Day.',
        ],
        technologies: ['HTML', 'CSS/SCSS', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX', 'JSON'],
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        id: '1',
        institution: 'Indira Gandhi University',
        degree: 'B.Tech - Computer Science',
        // degree: 'B.Tech - Computer Science & Engineering',
        startDate: '2017',
        endDate: '2021',
        // gpa: '3.9',
        // location: 'Palo Alto, CA'
      },
      {
        id: '2',
        institution: 'S.D.M Sr. Sec. School',
        degree: 'Senior Secondary',
        startDate: '2016',
        endDate: '2017',
        location: ''
      }
    ];
  }

  getSkills(): Skill[] {


    return [
      // Core Frontend Technologies
      { "name": "Angular", "category": "frontend", "svg": "../../../assets/icons/angular.svg", "icon": "devicon-angularjs-plain colored" },
      { "name": "Angular Material", "category": "frontend", "svg": "../../../assets/icons/material.svg", "icon": "devicon-angularjs-plain colored" },
      { "name": "PrimeNG", "category": "frontend", "svg": "../../../assets/icons/primeng.svg" },
      { "name": "TypeScript", "category": "frontend", "svg": "../../../assets/icons/typescript.svg" },
      { "name": "JavaScript", "category": "frontend", "svg": "../../../assets/icons/javascript.svg" },
      { "name": "jQuery", "category": "frontend", "svg": "../../../assets/icons/jquery.svg" },
      { "name": "HTML5", "category": "frontend", "svg": "../../../assets/icons/html-5.svg" },
      
      
      // Styling Frameworks & Utilities
      { "name": "CSS3", "category": "frontend", "svg": "../../../assets/icons/css3.svg" },
      { "name": "Sass", "category": "frontend", "svg": "../../../assets/icons/sass.svg" },
      { "name": "Tailwind CSS", "category": "frontend", "svg": "../../../assets/icons/tailwindcss.svg" },
      { "name": "Bootstrap", "category": "frontend", "svg": "../../../assets/icons/bootstrap.svg", "icon": "devicon-bootstrap-plain colored" },


      // Frontend State & Utilities
      { "name": "RxJS", "category": "frontend", "svg": "../../../assets/icons/rxjs.svg" },
      { "name": "JSON", "category": "frontend", "svg": "../../../assets/icons/json.svg" },

      // Mobile / Hybrid Frameworks
      { "name": "Ionic", "category": "other", "svg": "../../../assets/icons/ionic.svg" },
      { "name": "CapacitorJS", "category": "other", "svg": "../../../assets/icons/capacitorjs.svg" },

      // Backend (often used with frontend)
      { "name": "Node.js", "category": "backend", "svg": "../../../assets/icons/nodejs.svg", "icon": "devicon-nodejs-plain colored" },
      { "name": "Firebase", "category": "backend", "svg": "../../../assets/icons/firebase.svg" },

      // Package & Version Control
      { "name": "npm", "category": "tools", "svg": "../../../assets/icons/npm.svg" },
      { "name": "Git", "category": "tools", "svg": "../../../assets/icons/git.svg", "icon": "devicon-git-plain colored" },
      { "name": "GitHub", "category": "tools", "svg": "../../../assets/icons/github.svg" },

      // API & Testing Tools
      { "name": "Postman", "category": "tools", "svg": "../../../assets/icons/postman.svg" },
      { "name": "Swagger", "category": "tools", "svg": "../../../assets/icons/swagger.svg" },
      { "name": "Lighthouse", "category": "tools", "svg": "../../../assets/icons/lighthouse.svg" },

      // Cloud & DevOps
      { "name": "Amazon AWS", "category": "cloud", "svg": "../../../assets/icons/amazon-aws.svg" },
      { "name": "Docker", "category": "other", "svg": "../../../assets/icons/docker.svg" },

      // Database
      { "name": "MySQL", "category": "database", "svg": "../../../assets/icons/mysql.svg" }
    ]




    // return [
    //   // Frontend Frameworks & Libraries
    //   // { "name": "Angular", "category": "frontend", "svg": "../../../assets/icons/angular.svg", "icon": "devicon-angularjs-plain colored" },
    //   { "name": "Angular Material", "category": "frontend", "svg": "../../../assets/icons/angular-1.svg", "icon": "devicon-angularjs-plain colored" },
    //   { "name": "PrimeNG", "category": "frontend", "svg": "../../../assets/icons/primeng.svg" },
    //   { "name": "Bootstrap", "category": "frontend", "svg": "../../../assets/icons/bootstrap.svg", "icon": "devicon-bootstrap-plain colored" },
    //   { "name": "Tailwind CSS", "category": "frontend", "svg": "../../../assets/icons/tailwindcss.svg" },
    //   { "name": "jQuery", "category": "frontend", "svg": "../../../assets/icons/jquery.svg" },
    //   // { "name": "GWT", "category": "frontend", "svg": "../../../assets/icons/gwt.svg" },

    //   // Frontend Core Tech
    //   { "name": "HTML5", "category": "frontend", "svg": "../../../assets/icons/html-5.svg" },
    //   { "name": "CSS3", "category": "frontend", "svg": "../../../assets/icons/css3.svg" },
    //   { "name": "Sass", "category": "frontend", "svg": "../../../assets/icons/sass.svg" },
    //   { "name": "JavaScript", "category": "frontend", "svg": "../../../assets/icons/javascript.svg" },
    //   { "name": "TypeScript", "category": "frontend", "svg": "../../../assets/icons/typescript.svg" },

    //   // Frontend State Management & Utilities
    //   // { "name": "Redux", "category": "frontend", "svg": "../../../assets/icons/redux.svg" },
    //   { "name": "RxJS", "category": "frontend", "svg": "../../../assets/icons/rxjs.svg" },
    //   { "name": "JSON", "category": "frontend", "svg": "../../../assets/icons/json.svg" },

    //   // UI & Mobile Frameworks
    //   { "name": "Ionic", "category": "other", "svg": "../../../assets/icons/ionic.svg" },
    //   { "name": "CapacitorJS", "category": "other", "svg": "../../../assets/icons/capacitorjs.svg" },

    //   // DevOps / CI-CD Tools
    //   { "name": "Docker", "category": "other", "svg": "../../../assets/icons/docker.svg" },
    //   // { "name": "Jenkins", "category": "other", "svg": "../../../assets/icons/jenkins.svg" },
    //   // { "name": "Nginx", "category": "other", "svg": "../../../assets/icons/nginx.svg" },

    //   // Backend & Databases
    //   { "name": "Node.js", "category": "backend", "svg": "../../../assets/icons/nodejs.svg", "icon": "devicon-nodejs-plain colored" },
    //   { "name": "npm", "category": "tools", "svg": "../../../assets/icons/npm.svg" },
    //   { "name": "Firebase", "category": "backend", "svg": "../../../assets/icons/firebase.svg" },
    //   // { "name": "Redis", "category": "database", "svg": "../../../assets/icons/redis.svg" },
    //   { "name": "MySQL", "category": "database", "svg": "../../../assets/icons/mysql.svg" },
    //   // { "name": "CodeIgniter", "category": "backend", "svg": "../../../assets/icons/codeigniter.svg" },

    //   // Cloud Services
    //   { "name": "Amazon AWS", "category": "cloud", "svg": "../../../assets/icons/amazon-aws.svg" },
    //   // { "name": "DigitalOcean", "category": "cloud", "svg": "../../../assets/icons/digital-ocean.svg" },

    //   // Version Control & Collaboration
    //   { "name": "Git", "category": "tools", "svg": "../../../assets/icons/git.svg", "icon": "devicon-git-plain colored" },
    //   { "name": "GitHub", "category": "tools", "svg": "../../../assets/icons/github.svg" },
    //   // { "name": "GitLab", "category": "tools", "svg": "../../../assets/icons/gitlab.svg" },
    //   // { "name": "Bitbucket", "category": "tools", "svg": "../../../assets/icons/bitbucket.svg" },

    //   // Productivity & Collaboration
    //   // { "name": "Slack", "category": "tools", "svg": "../../../assets/icons/slack.svg" },
    //   // { "name": "Jira", "category": "tools", "svg": "../../../assets/icons/jira.svg" },
    //   // { "name": "Atlassian", "category": "tools", "svg": "../../../assets/icons/atlassian.svg" },
    //   { "name": "Postman", "category": "tools", "svg": "../../../assets/icons/postman.svg" },
    //   { "name": "Swagger", "category": "tools", "svg": "../../../assets/icons/swagger.svg" },
    //   { "name": "Lighthouse", "category": "tools", "svg": "../../../assets/icons/lighthouse.svg" },
    //   // { "name": "Excel Services", "category": "tools", "svg": "../../../assets/icons/excel.svg" },

    //   // Developer Tools & IDEs
    //   // { "name": "Visual Studio Code", "category": "tools", "svg": "../../../assets/icons/visual-studio-code.svg" },
    //   // { "name": "Sublime Text", "category": "tools", "svg": "../../../assets/icons/sublime-text.svg" }
    // ]
  }

  getProjects(): Project[] {
    return [
  {
    "id": "1",
    "title": "Order Management System (OMS)",
    "description": "Developed a high-performance e-commerce-style Order Management System for solar services, integrating AI-driven PDF parsing to reduce manual input and streamline order placement.",
    "technologies": ["Angular", "Node.js", "Express", "MongoDB", "RxJS", "TypeScript", "Python", "TensorFlow"],
    "features": [
      "One-step order placement workflow",
      "AI-powered PDF parsing with auto-form population",
      "Reduced manual data entry by 90%",
      "Order history, tracking, and management",
      "Scalable architecture supporting large transactions",
      "Responsive design for desktop and mobile"
    ],
    "image": "https://www.gloify.com/blog/wp-content/uploads/2020/11/Blog-june-2023-07-28T184114.567-1210x617.png?auto=compress&cs=tinysrgb&w=600",
    "category": "web",
    "status": "completed"
  },
  {
    "id": "2",
    "title": "Custom Web-based Drafting Tool",
    "description": "Developed a custom browser-based drafting tool to replace AutoCAD, enabling precise house layout creation with DXF parsing and Google Maps alignment for operational efficiency.",
    "technologies": ["Angular", "Node.js", "Google Maps API", "DXF Parser", "TypeScript"],
    "features": [
      "DXF file parsing and visualization",
      "Seamless Google Maps integration for layout alignment",
      "Browser-based CAD-style editing tools",
      "Export and share finalized layouts",
      "Enhanced productivity for operations team"
    ],
    "image": "https://damassets.autodesk.net/content/dam/autodesk/images/solutions/cad-drawing-apps-and-software/what-is-a-technical-drawing-thum.png?auto=compress&cs=tinysrgb&w=600",
    "category": "web",
    "status": "completed"
  },
  {
    "id": "3",
    "title": "Tournament Management System",
    "description": "Engineered a full-fledged Tournament Management System for the European Table Tennis Union, enabling efficient player registration, live tracking, and multi-country support during large-scale tournaments.",
    "technologies": ["Angular", "Angular Material", "PrimeNG", "RxJS", "TypeScript", "SCSS", "ngx-print"],
    "features": [
      "Real-time tournament tracking and live updates",
      "Player registration, invoicing, and management",
      "Automated score tracking with dynamic leaderboards",
      "Mobile-responsive design for cross-device accessibility",
      "Advanced reporting with print and PDF export"
    ],
    "image": "https://t3.ftcdn.net/jpg/03/13/47/78/240_F_313477805_FjdtYLHA78oQBs4sYkPhVwNFDBotcCGi.jpg?auto=compress&cs=tinysrgb&w=600",
    "category": "web",
    "status": "completed"
  },
  {
    "id": "4",
    "title": "WhatsApp Loyalty Program",
    "description": "Launched a WhatsApp-based loyalty program for Max Life Insurance, streamlining advisor engagement and providing a seamless reward management experience for 70,000+ users.",
    "technologies": ["Angular", "Angular Material", "Bootstrap", "TypeScript"],
    "features": [
      "End-to-end WhatsApp integration for user interaction",
      "Automated loyalty points tracking and redemption",
      "Reward catalog with seamless redemption flow",
      "Personalized advisor dashboard",
      "Analytics and reporting for program performance"
    ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMnroALl7VqOgRT-7UhzDe4vl_f2GgPYAGA&s?auto=compress&cs=tinysrgb&w=600",
    "category": "web",
    "status": "completed"
  },
  {
    "id": "5",
    "title": "HR Engagement Platform",
    "description": "Designed and developed an HR engagement and recognition platform to drive employee motivation, featuring reward tracking, interactive dashboards, and real-time analytics.",
    "technologies": ["Angular", "PrimeNG", "RxJS", "TypeScript", "JSON"],
    "features": [
      "Employee engagement tracking and insights",
      "Reward and recognition workflows",
      "Interactive dashboards with real-time analytics",
      "PDF and Excel export for reports",
      "Mobile-first and responsive design"
    ],
    "image": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    "category": "web",
    "status": "completed"
  },
  {
    "id": "6",
    "title": "Assessment Portal",
    "description": "Built a scalable interview and assessment management system with dedicated admin and user modules, enabling efficient scheduling, candidate evaluation, and real-time result generation.",
    "technologies": ["Angular", "Node.js", "Express", "MongoDB", "RxJS", "TypeScript"],
    "features": [
      "Separate admin and candidate dashboards",
      "Question bank management with CRUD operations",
      "Interview session scheduling and monitoring",
      "Real-time candidate evaluation and result tracking",
      "Role-based access control for security",
      "Fully responsive and mobile-friendly design"
    ],
    "image": "https://hiremee.co.in/assets/hiremee-revamp/images/products/ai-proctored-assessment-platform.png?auto=compress&cs=tinysrgb&w=600",
    "category": "web",
    "status": "completed"
  }
]
;
  }
}