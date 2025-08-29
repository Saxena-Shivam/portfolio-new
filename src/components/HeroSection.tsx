import {
  Code,
  Image,
  MessageSquare,
  GraduationCap,
  Briefcase,
  Share2,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiCloudflare,
  SiTypescript,
  SiFigma,
  SiRedis,
  SiCanva,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiReactivex,
  SiLaunchpad,
  SiLangchain,
} from "react-icons/si";
import profileImage from "../assets/images/profile1.jpg";

export default function HeroSection() {
  const mainSkills = [
    {
      name: "Web Development",
      icon: <Code className="h-5 w-5" />,
      description:
        "Building responsive and user-friendly web applications using modern frameworks and best practices.",
    },
    {
      name: "Generative AI",
      icon: <Image className="h-5 w-5" />,
      description:
        "Creating innovative and intelligent solutions using generative AI techniques and tools.",
    },
    {
      name: "Programming",
      icon: <Code className="h-5 w-5" />,
      discription:
        "Strong foundation in algorithms and data structures with proven problem-solving skills through competitive programming",
    },
  ];

  const techStack = [
    { name: "Python", icon: <SiPython className="h-6 w-6" /> },
    { name: "React", icon: <SiReact className="h-6 w-6" /> },
    { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" /> },
    // { name: "Cloudflare", icon: <SiCloudflare className="h-6 w-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" /> },
    // { name: "Redis", icon: <SiRedis className="h-6 w-6" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6" /> },
    { name: "C++", icon: <SiCplusplus className="h-6 w-6" /> },
    { name: "C", icon: <SiC className="h-6 w-6" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-6 w-6" /> },
    { name: "LangChain", icon: <SiLangchain className="h-6 w-6" /> },
    { name: "Express", icon: <SiExpress className="h-6 w-6" /> },
    { name: "MySQL", icon: <SiMysql className="h-6 w-6" /> },
  ];

  const [displayText, setDisplayText] = useState("");
  const fullText = "Shivam Saxena";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(true);
        setDisplayText("");
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTyping]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Shivam Saxena - Portfolio",
          text: "Check out Shivam Saxena's portfolio website!",
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert("Profile URL copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main intro card - spans 2 columns */}
          <motion.div
            className="md:col-span-2 glass-card rounded-3xl p-8 backdrop-blur-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet-500/10 opacity-50" />
            <div className="relative z-10">
              <span className="text-primary/80 text-lg font-medium mb-2 block">
                Welcome to my portfolio
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ lineHeight: "1.2" }}
              >
                Hello, I'm{" "}
                <span className="gradient-text relative inline-block">
                  {displayText}
                  <span className="inline-block w-1 h-8 bg-primary ml-1 animate-blink" />
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-foreground/80 mb-6">
                Fullstack Developer
              </h2>
              <p className="text-foreground/70 mb-8 leading-relaxed max-w-xl">
                I create stunning digital experiences with a focus on scalable
                fullstack solutions and modern user interfaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="scroll-link group px-6 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
                <a
                  href="#projects"
                  className="scroll-link group px-6 py-3 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/70 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>

                {/* Fixed Resume button with inline-flex to ensure horizontal alignment */}
                <a
                  href="/Shivam_RESUME.pdf"
                  download
                  className="scroll-link group px-6 py-3 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/70 transition-all duration-300 relative overflow-hidden inline-flex items-center gap-2"
                >
                  <span className="relative z-10">Resume</span>
                  <Download className="h-4 w-4 ml-2 relative z-10 inline-block" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile picture card */}
          <motion.div
            className="glass-card rounded-3xl p-6 backdrop-blur-lg relative overflow-hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet-500/5 opacity-50" />
            {/* Share button positioned in top right corner */}
            <motion.button
              onClick={handleShare}
              className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Share Profile"
            >
              <Share2 className="h-5 w-5" />
            </motion.button>
            <motion.div
              className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/20 shadow-xl relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h3 className="text-xl font-semibold text-center relative z-10">
              Shivam Saxena
            </h3>
            <p className="text-center text-foreground/60 text-sm relative z-10">
              Electrical Engineering
            </p>
            <div className="mt-3 flex items-center gap-2 relative z-10">
              <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="text-sm text-foreground/70">
                IIT Bhubaneswar - Sophomore
              </span>
            </div>
          </motion.div>

          {/* Tech stack card */}
          <motion.div
            className="glass-card rounded-3xl p-6 backdrop-blur-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-background/10 hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-foreground/80 hover:text-primary mb-1 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-xs font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills cards */}
          {mainSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-3xl p-6 backdrop-blur-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-indigo-500/5 opacity-50" />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <p className="text-foreground/70 text-sm relative z-10">
                {skill.discription || skill.description}
              </p>
            </motion.div>
          ))}

          {/* Education card */}
          <motion.div
            className="glass-card rounded-3xl p-6 backdrop-blur-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-green-500/5 opacity-50" />
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <p className="text-foreground/70 text-sm relative z-10">
              Pursuing a degree in Electrical Engineering at IIT Bhubaneswar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
