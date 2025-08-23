import { ExternalLink, Github, X, Star, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "@/styles/CustomScrollbar.module.css";
import gandeeva from "../assets/images/gandeeva.png";
import plantainTree from "../assets/images/plantaintreeventures.png";
import tshirt from "../assets/images/tshirt3d.png";
import windows from "../assets/images/windowsretro.png";
import cards from "../assets/images/parallaxcard.png";
import parallexus from "../assets/images/parallexus.png";
import packx from "../assets/images/packx.png";
import breakfast from "../assets/images/breakfastbuddy.png";
import arcPortal from "../assets/images/our ARC img.png";
import bilva from "../assets/images/Bilva-ss.png";
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
    title: "AI-Powered Personalized Study Planner",
    description:
      "An intelligent platform that generates adaptive study schedules and AI-based question papers.",
    longDescription:
      "The AI-Powered Personalized Study Planner is designed to transform academic preparation. It combines adaptive scheduling, performance analysis, and smart question generation to help students prepare more effectively. The system dynamically allocates study hours based on topic weightage, difficulty, and past performance using an Exponential Moving Average (EMA) algorithm. It also generates question papers, balancing objective and descriptive questions, ensuring personalized practice for every student. The platform includes dedicated portals for students, teachers, and admins built using modern web technologies.",
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
      { name: "TypeScript", percentage: 30 },
      { name: "MongoDB", percentage: 25 },
      { name: "Streamlit", percentage: 20 },
      { name: "Python", percentage: 15 },
      { name: "AI APIs", percentage: 10 },
    ],
    image: gandeeva,
    tags: ["TypeScript", "MongoDB", "Streamlit", "Python", "AI APIs"],
    demoLink: "#",
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
      { name: "React + Vite", percentage: 35 },
      { name: "Flask (Python)", percentage: 30 },
      { name: "PostgreSQL", percentage: 20 },
      { name: "SQLite", percentage: 10 },
      { name: "JWT Authentication", percentage: 5 },
    ],
    image: plantainTree,
    tags: ["React", "Vite", "Flask", "PostgreSQL", "SQLite", "JWT"],
    demoLink: "#",
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
      { name: "React", percentage: 30 },
      { name: "Tailwind CSS", percentage: 15 },
      { name: "Express.js", percentage: 25 },
      { name: "MongoDB", percentage: 20 },
      { name: "Node-cron & Nodemailer", percentage: 10 },
    ],
    image: plantainTree,
    tags: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
    ],
    demoLink: "#",
    githubLink: "#",
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
      { name: "Express.js", percentage: 20 },
      { name: "Node.js", percentage: 20 },
      { name: "AJAX", percentage: 10 },
      { name: "MySQL", percentage: 20 },
      { name: "JavaScript/jQuery", percentage: 15 },
      { name: "Bootstrap/HTML/CSS", percentage: 15 },
    ],

    image: plantainTree,
    tags: [
      "Express.js",
      "Node.js",
      "AJAX",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },

  // {
  //   id: 5,
  //   title: "ARC School Portal",
  //   description:
  //     "ARC School Portal is a comprehensive educational management system designed to streamline administrative processes and enhance the learning experience for students, teachers, and parents. Built with modern web technologies, this platform provides a centralized hub for academic activities, communication, and resource management.",
  //   image: arcPortal,
  //   tags: ["React", "Tailwind CSS", "Shadcn UI", "3D Visualization"],
  //   demoLink: "https://arc-school-portal.vercel.app/",
  //   githubLink: "#",
  // },
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
      { name: "Node.js", percentage: 25 },
      { name: "Express.js", percentage: 20 },
      { name: "MySQL", percentage: 20 },
      { name: "Sequelize ORM", percentage: 15 },
      { name: "JWT Authentication", percentage: 10 },
      { name: "bcrypt.js", percentage: 10 },
    ],
    image: plantainTree,
    tags: ["Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "bcrypt.js"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  // {
  //   id: 6,
  //   title: "Windows XP Retro Experience",
  //   description:
  //     "A nostalgic recreation of the Windows XP interface built using React, complete with functioning desktop, start menu, and classic applications.",
  //   image: windows,
  //   tags: ["React", "CSS", "JavaScript", "Retro UI"],
  //   demoLink: "https://akswindowsxp.netlify.app/",
  //   githubLink: "#",
  // },
  // {
  //   id: 7,
  //   title: "Breakfast Buddy",
  //   description:
  //     "A website for a breakfast restaurant that allows users to view the Products, and Contact the restaurant for orders.",
  //   image: breakfast,
  //   tags: ["React", "Tailwind CSS"],
  //   demoLink: "https://www.breakfastbuddy.in/",
  //   githubLink: "#",
  // },
  // {
  //   id: 8,
  //   title: "3D Parallax Cards",
  //   description:
  //     "An immersive collection of interactive 3D cards with parallax effects that respond to mouse movement, creating depth and dimension.",
  //   image: cards,
  //   tags: ["React", "CSS", "3D Effects", "Parallax"],
  //   demoLink: "https://akscards.netlify.app/",
  //   githubLink: "#",
  // },
  // {
  //   id: 9,
  //   title: "Parallexus Multi-UI Platform",
  //   description:
  //     "A showcase platform featuring multiple different UI interfaces with innovative design patterns and interactive features.",
  //   image: parallexus,
  //   tags: ["React", "UI/UX", "API Integration", "Multi-theme"],
  //   demoLink: "https://parallexus.netlify.app/",
  //   githubLink: "#",
  // },
  // {
  //   id: 10,
  //   title: "Bilva",
  //   description:
  //     "Built a website for Bilva, A startup based on climate change and sustainability",
  //   image: bilva,
  //   tags: ["React", "Tailwind CSS"],
  //   demoLink: "https://bilva.vercel.app/",
  //   githubLink: "#",
  // },
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
                <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
                <div className="space-y-3">
                  {project.techStack.map((tech, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-sm text-foreground/70">
                          {tech.percentage}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
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
