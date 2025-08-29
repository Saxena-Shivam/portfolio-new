import { ExternalLink, Github, X, Star, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "@/styles/CustomScrollbar.module.css";
import acadsync from "../assets/images/acadsync.png";
import plantainTree from "../assets/images/plantaintreeventures.png";
import grocto from "../assets/images/grocto.png";
import message_app from "../assets/images/message_app.png";
import college from "../assets/images/college.png";
import airbnb from "../assets/images/airbnb.png";
import jrm from "../assets/images/jrm.png";
import planner from "../assets/images/planner.png";
import questionGenerator from "../assets/images/questionGenerator.png";
import windowos from "../assets/images/image.png";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  longDescription?: string;
  features?: string[];
  techStack?: { name: string; percentage: number }[];
  featured?: boolean;
  inBuild?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AcadSync",
    description:
      "An intelligent platform that generates adaptive study schedules and AI-based question papers.",
    longDescription:
      "AcadSync is designed to transform academic preparation. It combines adaptive scheduling, performance analysis, and smart question generation to help students prepare more effectively. The system dynamically allocates study hours based on topic weightage, difficulty, and past performance using an Exponential Moving Average (EMA) algorithm. It also generates question papers, balancing objective and descriptive questions, ensuring personalized practice for every student. The platform includes dedicated portals for students, teachers, and admins built using modern web technologies.",
    features: [
      "Exam & syllabus selection with chapter-level details",
      "Time availability input and AI-based time distribution",
      "Priority score calculation for topics (weightage, difficulty, proficiency)",
      "Daily intelligent study planner with revisions",
      "Adaptive question generation based on proficiency",
      "Integration of AI-generated and database-stored questions",
      "Exportable timetables and question sets (CSV/PDF)",
      "Student, teacher, and admin portals for easy management",
    ],
    techStack: [
      { name: "TypeScript", percentage: 70 },
      { name: "MongoDB", percentage: 15 },
      { name: "Python", percentage: 10 },
      { name: "Vite", percentage: 30 },
      { name: "Node.js", percentage: 25 },
      { name: "Tailwind CSS", percentage: 15 },
      { name: "OpenAI API", percentage: 20 },
      { name: "Hugging Face", percentage: 5 },
      { name: "LangChain", percentage: 5 },
      { name: "Framer Motion", percentage: 10 },
      { name: "AI APIs", percentage: 5 },
    ],
    image: acadsync,
    tags: ["TypeScript", "MongoDB", "Python", "AI APIs", "Node.js", "Vite"],
    demoLink: "https://arc-front.onrender.com",
    githubLink: "#",
    featured: true,
    inBuild: true,
  },

  {
    id: 2,
    title: "Grocto",
    description:
      "A student-focused grocery delivery platform that connects college students with local stores, offering flexible deliveries and student-specific discounts.",
    longDescription:
      "Grocto is a fullstack application designed to address the unique needs of college students by making grocery shopping simple, affordable, and convenient. The platform allows students to browse products from local stores, schedule deliveries around their class timings, and access exclusive student discounts. On the other hand, local sellers can manage inventory, process orders, and reach a targeted student customer base through dedicated dashboards. Grocto bridges the gap between students and local businesses, providing a win-win solution.",
    features: [
      "Student account creation and authentication",
      "Browse groceries across multiple local stores",
      "Search and filter products by category, price, etc.",
      "Cart management and order placement",
      "Delivery scheduling around class hours",
      "Real-time order tracking and order history",
      "Exclusive student discounts and promotions",
      "Seller dashboard with inventory management",
      "Order processing and delivery slot management",
      "Sales analytics and promotional tools",
    ],
    techStack: [
      { name: "React + Vite (JavaScript)", percentage: 40 },
      { name: "Flask (Python)", percentage: 30 },
      { name: "PostgreSQL", percentage: 20 },
      { name: "SQLite", percentage: 10 },
    ],
    image: grocto,
    tags: ["React", "JavaScript", "Vite", "Flask", "PostgreSQL", "SQLite"],
    demoLink: "https://grocto-frontend.onrender.com/",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Request Management System",
    description:
      "A role-based platform enabling requestors and receivers to manage requests with real-time updates, automated reminders, and secure authentication.",
    longDescription:
      "The Request Management System is a fullstack application designed for seamless communication between requestors and receivers. It features secure user registration and login with JWT authentication, role-based dashboards, and a request lifecycle that supports sending, accepting, rejecting, and tracking requests in real-time. Automated email reminders ensure pending requests are not ignored, with support for both Ethereal (testing) and Gmail (production) SMTP. The platform delivers a clean, responsive user experience powered by React and Tailwind CSS, while leveraging Node.js, Express.js, and MongoDB on the backend.",
    features: [
      "Secure user registration and login with JWT",
      "Supports two user roles: Requestor and Receiver",
      "Send, accept, reject, and track request statuses in real-time",
      "View sent and received requests/messages",
      "Automated email reminders for pending requests (every 5 mins after 1 hr)",
      "SMTP support via Ethereal (testing) and Gmail (production)",
      "Role-based dashboards with modern, responsive UI",
      "Toast notifications for user actions (success/error feedback)",
    ],
    techStack: [
      { name: "React (JavaScript)", percentage: 35 },
      { name: "Socket.IO", percentage: 5 },
      { name: "Tailwind CSS", percentage: 15 },
      { name: "Node.js", percentage: 25 },
      { name: "MongoDB", percentage: 20 },
      { name: "Node-cron & Nodemailer", percentage: 5 },
      { name: "Socket.IO", percentage: 5 },
    ],
    image: message_app,
    tags: [
      "JavaScript",
      "React",
      "Socket.IO",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    demoLink: "https://arc-woad-kappa.vercel.app/home",
    githubLink: "https://github.com/Saxena-Shivam/ARC_Task",
    featured: false,
  },
  {
    id: 4,
    title: "Hello College",
    description:
      "A user-friendly full-stack web application designed to solve student problems, build communities across domains, and provide study resources.",
    longDescription:
      "Hello College, built by Team Unity Squad, is a full-stack web platform aimed at helping students connect, share resources, and collaborate. The application acts as an interface to address student challenges while fostering communities in various domains. It also provides access to important study materials and resources. The system is built with a robust backend using Express.js and Node.js, a MySQL database for data management, and a responsive frontend powered by JavaScript, jQuery, Bootstrap, HTML, and CSS.",
    features: [
      "User-friendly interface for students",
      "Community building across multiple domains",
      "Access to important study materials and resources",
      "Secure authentication and account management",
      "Responsive and mobile-friendly design",
      "Backend API powered by Express.js and Node.js",
      "AJAX integration for dynamic content loading",
      "MySQL-based database management",
    ],
    techStack: [
      { name: "JavaScript", percentage: 20 },
      { name: "MySQL", percentage: 10 },
      { name: "Bootstrap", percentage: 30 },
      { name: "HTML", percentage: 20 },
      { name: "CSS", percentage: 20 },
    ],
    image: college,
    tags: ["JavaScript", "Node.js", "MySQL", "Bootstrap", "HTML", "CSS"],
    demoLink:
      "https://aashish-kumar-singh1-git-master-hello-college.vercel.app/",
    githubLink: "https://github.com/Saxena-Shivam/ByteVerse",
    featured: false,
  },
  {
    id: 5,
    title: "StayEase - Hotel & Property Booking Platform",
    description:
      "A full-stack hotel and property booking web application with advanced search, filtering, authentication, and booking management.",
    longDescription:
      "StayEase is a responsive full-stack web application designed for seamless hotel and property booking. The platform features an intuitive property grid, map integration, and search functionality that allows users to filter by location, dates, guests, and categories. Users can log in, manage profiles, mark properties as favorites, add to a watchlist, and book hotels with a complete booking history. The system also supports authentication, secure password management, and advanced filtering for cities and price ranges. Built with Node.js, Express.js, and MySQL (via Sequelize ORM), StayEase provides a robust backend and smooth user experience.",
    features: [
      "Home page displaying properties with images, ratings, and pricing",
      "Compact and full search bar with filters (location, dates, guests)",
      "Scrollable category bar (Farms, Treehouses, Amazing Views, etc.)",
      "Property grid with location, cost, and ratings",
      "Interactive map view with property markers and popups",
      "Favorites system with local storage support",
      "Filter modal for cities and price range",
      "Responsive design for desktop and mobile",
      "Custom 404 error page",
      "Header and footer with navigation and information",
      "User authentication with JWT (login, logout, secure sessions)",
      "Profile management with view, update, and save options",
      "Watchlist for saving properties to view later",
      "Hotel booking with check-in/out dates and booking history",
    ],
    techStack: [
      { name: "JavaScript", percentage: 30 },
      { name: "Node.js", percentage: 25 },
      { name: "Express.js", percentage: 20 },
      { name: "JWT Authentication", percentage: 5 },
      { name: "MySQL (Sequelize)", percentage: 15 },
    ],
    image: airbnb,
    tags: ["JavaScript", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
    demoLink:
      "https://www.loom.com/share/69e6039b54064dce9c9cbae36d8fa284?sid=20465b95-aa42-4bb5-b28f-a53d6d08ce2b",
    githubLink: "https://github.com/Saxena-Shivam/airbnb",
    featured: false,
  },
  {
    id: 6,
    title: "Journey Risk Management System",
    description:
      "A web-based application designed to display, search, and manage route risk information between IOCL terminals and destinations with clear visibility of risk levels and route details.",
    longDescription:
      "The Journey Risk Management System (JRM) is a professional web platform developed to help IOCL monitor and manage transportation routes between terminals and destinations. Each route is assigned a risk level (Low, Medium, High), and details such as terminal names, destination IDs, and facilities (e.g., petrol pumps) are displayed. The system includes search and filter features, route tracking, bilingual support (Hindi/English), and a responsive modern UI. It is designed for scalability and compliance with IOCL data policies.",
    features: [
      "Search and filter system with Terminal, Destination, Risk Level, and Status",
      "Modern responsive UI/UX design",
      "Bilingual support (Hindi/English)",
      "Active route status tracking",
      "Individual HTML pages for each route (Terminal ➝ Destination)",
      "Secure database-driven content management",
      "Excel integration for SAP code and destination mapping",
      "Optional chatbot and voice search support",
    ],
    techStack: [
      { name: "JavaScript", percentage: 80 },
      { name: "HTML", percentage: 10 },
      { name: "CSS", percentage: 10 },
      { name: "Leaflet", percentage: 10 },
    ],
    image: jrm,
    tags: ["JavaScript", "HTML", "CSS", "Leaflet"],
    demoLink: "https://jrm-rso.in",
    githubLink: "https://github.com/Saxena-Shivam/jrm",
    featured: false,
  },
  {
    id: 7,
    title: "Personalized Study Planner",
    description:
      "An AI-powered study planning tool that generates intelligent, exam-focused timetables based on syllabus, difficulty, weightage, and user performance.",
    longDescription:
      "The Personalized Study Planner is a smart web application designed to help students prepare effectively for exams by creating adaptive and balanced study schedules. The system allows students to select their target exam, loads the syllabus with chapter/topic details, and considers user inputs such as available study hours and daily capacity. Each topic is prioritized using a weighted formula that accounts for exam weightage, difficulty, and self-assessed performance. Based on this, the planner distributes available hours intelligently, generating a day-wise timetable that ensures balanced coverage and periodic revision. The final plan is presented in a clean, user-friendly format and can be exported for offline use.",
    features: [
      "Exam and syllabus selection with chapter/topic-level detail",
      "User input for total hours and daily study capacity",
      "Weighted topic prioritization based on weightage, difficulty, and performance",
      "AI-powered time distribution using a priority scoring formula",
      "Cyclic topic rotation ensuring balanced coverage and periodic revision",
      "Daily planner generation with structured study sessions",
      "Responsive and intuitive user interface",
      "Export and download options for offline use",
    ],
    techStack: [
      { name: "react.js", percentage: 30 },
      { name: "JavaScript", percentage: 20 },
      { name: "MongoDB", percentage: 20 },
      { name: "OpenAI API", percentage: 15 },
      { name: "Python", percentage: 10 },
      { name: "Hugging Face", percentage: 5 },
      { name: "LangChain", percentage: 5 },
    ],
    image: planner,
    tags: ["Python", "JavaScript", "MongoDB", "OpenAI API", "AI"],
    demoLink: "https://study-planner-typescript.vercel.app/",
    githubLink: "https://github.com/Saxena-Shivam/personalised_study",
    featured: false,
  },
  {
    id: 8,
    title: "AI-Powered Question Generator",
    description:
      "A smart question paper generator that creates balanced sets of MCQs, True/False, Fill in the Blanks, and Descriptive questions using AI and a database-backed system.",
    longDescription:
      "The AI-Powered Question Generator is designed to help educators and students create customized question sets efficiently. Users can select class, subject, and chapters, then specify the number of questions for different types (MCQs, Fill in the Blanks, True/False, and Descriptive). The system intelligently generates objective questions using AI based on textbook content stored in the database, while descriptive questions are fetched directly from the database with marks and type. If sufficient questions are unavailable, AI acts as a fallback to generate additional questions. Chapter-wise textbook content is stored in MongoDB, providing the context for AI-based generation. All generated data can be exported to CSV for reuse or offline access. The project ensures error handling, including fixes for division by zero and updated LLM models.",
    features: [
      "Class and subject selection (6–10) with chapter-specific filtering",
      "User-defined question types: MCQ, Fill in the Blanks, True/False, Descriptive",
      "AI-powered generation of objective questions based on textbook context",
      "Descriptive questions fetched from database with marks and type",
      "AI fallback for missing descriptive questions",
      "Chapter-wise textbook content storage in MongoDB",
      "Auto-push of AI-generated descriptive questions to database",
      "Export of generated question sets to CSV",
      "Error handling and stable model integration",
    ],
    techStack: [
      { name: "Python", percentage: 30 },
      { name: "JavaScript", percentage: 20 },
      { name: "MongoDB", percentage: 20 },
      { name: "OpenAI API", percentage: 15 },
      { name: "Hugging Face", percentage: 5 },
      { name: "LangChain", percentage: 5 },
    ],
    image: questionGenerator,
    tags: ["Python", "JavaScript", "MongoDB", "OpenAI API", "AI"],
    demoLink: "https://questions-generator-lilac.vercel.app/",
    githubLink: "https://github.com/Saxena-Shivam/question-generator",
    featured: false,
  },
  {
    id: 9,
    title: "Interactive Window OS Design",
    description:
      "A web-based interactive desktop environment that simulates a modern OS, featuring multiple mini-apps like Contact, GitHub, Education, and Terminal within a single dynamic interface.",
    longDescription:
      "The Interactive Window OS Design is a creative web application that replicates the feel of a desktop operating system directly in the browser. The platform features draggable and resizable windows, smooth transitions, and app-based components, including Contact, GitHub integration, Education hub, and an interactive Terminal for simple commands. Built with a focus on clean design and user-friendly navigation, the project leverages React, TailwindCSS, and Framer Motion for seamless UI experiences. It showcases how modern web technologies can be combined to create a desktop-like interface for portfolio interaction or productivity tools. The app is also optimized for mobile devices, providing touch-based interactions and a clean responsive layout for smaller screens.",
    features: [
      "Draggable and resizable app windows for a desktop-like experience",
      "Multiple apps including Contact, GitHub, Education Hub, and Terminal",
      "Smooth animations and transitions using Framer Motion",
      "Responsive design for both desktop and mobile users",
      "Integrated GitHub profile view for showcasing repositories",
      "Customizable layout for a personalized user experience",
      "Lightweight and optimized for fast load times",
    ],
    mobileFeatures: [
      "Touch-friendly window dragging and resizing",
      "Optimized layout for smaller screens",
      "Mobile navigation with quick access to apps",
      "Smooth transitions and animations tailored for mobile",
      "Lightweight loading for faster mobile performance",
    ],
    techStack: [
      { name: "React", percentage: 35 },
      { name: "TailwindCSS", percentage: 25 },
      { name: "JavaScript", percentage: 20 },
      { name: "Framer Motion", percentage: 10 },
      { name: "Vercel", percentage: 10 },
    ],
    image: windowos, // replace with your project image variable
    tags: ["React", "TailwindCSS", "JavaScript", "Framer Motion", "UI/UX"],
    demoLink: "https://shivam-portfolio-black-three.vercel.app/",
    githubLink: "https://github.com/Saxena-Shivam/",
    featured: false,
  },
];

// Filter featured projects
const featuredProjects = projects.filter((project) => project.featured);

// Filter regular projects (those not featured)
const regularProjects = projects.filter((project) => !project.featured);

// Group regular projects into pairs for desktop
const projectPairs = regularProjects.reduce<Project[][]>(
  (result, item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  },
  []
);

// For mobile, each project gets its own slide
const mobileProjectSlides = regularProjects.map((project) => [project]);

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Reset current index when switching between mobile and desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const currentSlides = isMobile ? mobileProjectSlides : projectPairs;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + currentSlides.length) % currentSlides.length
    );
  };

  const FeaturedProjectCard = ({ project }: { project: Project }) => {
    return (
      <motion.div
        className="glass-card rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:translate-y-[-5px] group"
        onClick={() => setSelectedProject(project)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />

          {/* "Click to view details" in bottom right */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <span className="px-3 py-1.5 bg-primary/70 text-white rounded-full text-xs font-medium backdrop-blur-sm shadow-sm flex items-center">
              Click to view details
            </span>
          </div>

          <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start">
            <div className="bg-primary/90 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-sm font-medium shadow-sm">
              <Star size={16} />
              Featured
            </div>

            {project.inBuild && (
              <div className="bg-amber-500/90 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-sm font-medium shadow-sm">
                <Clock size={16} />
                In Development
              </div>
            )}
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/50 text-white font-medium border border-primary/50 rounded-full text-xs backdrop-blur-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1 bg-primary/50 text-white font-medium border border-primary/50 rounded-full text-xs backdrop-blur-sm shadow-sm">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm font-medium shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Demo
              </a>
              {/* <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-4 py-2 bg-white/20 text-white backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-sm font-medium border border-white/30 shadow-md"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                Code
              </a> */}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ProjectCard = ({
    project,
    className,
  }: {
    project: Project;
    className?: string;
  }) => {
    if (!project) return null;

    return (
      <motion.div
        className={cn(
          "glass-card rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer",
          className
        )}
        onClick={() => setSelectedProject(project)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.inBuild && (
            <div className="absolute top-3 right-3 bg-amber-500/90 text-white px-2 py-0.5 rounded-full flex items-center gap-1 text-xs font-medium shadow-sm">
              <Clock size={12} />
              In Development
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-sm font-medium">
              Click to view details
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/70 mb-4 text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/40 text-primary-foreground dark:text-white font-medium border border-primary/40 rounded-full text-xs shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              Demo
            </a>
            {/* <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-secondary text-foreground rounded-full hover:bg-secondary/90 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              Code
            </a> */}
          </div>
        </div>
      </motion.div>
    );
  };

  // Project Details Modal
  const ProjectModal = ({ project }: { project: Project }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={cn(
            "bg-card relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg",
            styles.customScrollbar
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-4 top-4 p-3 rounded-full bg-background/70 hover:bg-background/90 transition-colors text-foreground z-50 shadow-md"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-foreground/70 mb-6">{project.longDescription}</p>

            {project.features && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.techStack && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="p-3 rounded-xl bg-secondary/30 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center text-sm font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              {/* <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full hover:bg-secondary/90 transition-colors"
              >
                <Github size={20} />
                Source Code
              </a> */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-6 rounded-full" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Check out some of my latest work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Star className="text-primary mr-2" size={24} />
              Featured Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Carousel */}
        {regularProjects.length > 0 && (
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Other Projects
            </motion.h3>

            <div
              className="relative min-h-[500px] overflow-hidden flex flex-col"
              ref={carouselRef}
            >
              <div className="flex-grow relative">
                {/* Left Arrow */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors border border-border z-10"
                  onClick={() => paginate(-1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors border border-border z-10"
                  onClick={() => paginate(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>

                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16"
                  >
                    {currentSlides[currentIndex].map((project, idx) => (
                      <ProjectCard
                        key={project?.id || idx}
                        project={project}
                        className={idx === 1 ? "hidden md:block" : ""}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Navigation */}
              <div className="relative mt-8 flex justify-center items-center">
                <div className="flex gap-2">
                  {currentSlides.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentIndex === index
                          ? "bg-primary w-4"
                          : "bg-foreground/20 hover:bg-foreground/40"
                      )}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </AnimatePresence>
    </section>
  );
}
