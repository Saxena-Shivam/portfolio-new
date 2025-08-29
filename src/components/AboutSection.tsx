import { Briefcase, Code, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  const experiences = [
    // {
    //   title: "Fullstack Developer",
    //   company: "SCMNOW",
    //   period: "2024 - Present",
    //   icon: <Briefcase className="h-5 w-5" />,
    //   description:
    //     "Started as an intern and transitioned to full-time developer role.",
    //   type: "experience",
    // },
    {
      title: "Part-time Developer",
      company: "AcadSync Pvt Ltd",
      period: "May 2025 - July 2025",
      icon: <Code className="h-5 w-5" />,
      description:
        "Gained practical experience through part-time development roles in Generative AI and Web Development.",
      type: "experience",
    },
    {
      title: "Electrical Engineering",
      company: "Indian Institute of Technology, Bhubaneswar",
      period: "2024 - 2028",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Started a new journey with new challenges.",
      type: "education",
    },
    // {
    //   title: "Computer Science Engineering",
    //   company: "National Institute of Technology, Patna",
    //   period: "2023 - 2024",
    //   icon: <GraduationCap className="h-5 w-5" />,
    //   description: "A start to my career in technology and engineering.",
    //   type: "education",
    // },
  ];

  return (
    <section id="about" className="gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            ref={titleRef}
            className={`text-4xl font-bold ${
              isInView ? "title-underline animate" : "title-underline"
            }`}
          >
            About Me
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Here's a bit more about my background and experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I’m an undergraduate student at IIT Bhubaneswar, pursuing
              Electrical Engineering. My programming journey began with C and
              C++, where I developed a strong interest in problem-solving and
              algorithms. Over time, my curiosity led me to web development,
              where I explored JavaScript, backend development with Node.js and
              Express.js, and building responsive, user-friendly websites using
              Tailwind, MongoDB, and SQL.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As I grew, I expanded my skills by working on AI-powered projects,
              gaining experience with Python, MongoDB, Streamlit, LLMs, RAG,
              Hugging Face, and LangChain, which enabled me to design practical,
              intelligent solutions that bridge technology with real-world
              applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I love immersing myself in music and staying active
              by playing volleyball and cricket, which keep me refreshed and
              inspired.
            </p>

            <div className="pt-6">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#projects"
                  className="group px-6 py-3 bg-secondary border border-border text-foreground rounded-lg inline-flex items-center gap-2 hover:bg-secondary/80 transition-all duration-300"
                >
                  <span>View My Work</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-primary/5" />

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12 flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Icon container */}
                <div className="relative">
                  <motion.div
                    className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-secondary border border-primary/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-primary">{item.icon}</div>
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  className="ml-8 flex-1"
                  whileHover={{ scale: 1.02, translateX: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="section-card p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-primary font-medium mb-2">
                      {item.company}
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
