import { Briefcase, Code, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Fullstack Developer",
      company: "SCMNOW",
      period: "2024 - Present",
      icon: <Briefcase className="h-5 w-5" />,
      description:
        "Started as an intern and transitioned to full-time developer role.",
      type: "experience",
    },
    {
      title: "Part-time Developer & Internships",
      company: "Various Companies",
      period: "2023 - 2024",
      icon: <Code className="h-5 w-5" />,
      description:
        "Gained practical experience through multiple internships and part-time development roles while completing my studies.",
      type: "experience",
    },
    {
      title: "Computer Science Degree",
      company: "University",
      period: "2020 - 2024",
      icon: <GraduationCap className="h-5 w-5" />,
      description:
        "Bachelor's degree in Computer Science with focus on software development.",
      type: "education",
    },
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
              I'm a passionate frontend developer and UI designer with a strong
              focus on creating intuitive and beautiful user experiences. With
              over 1.5 years of experience in the industry, I've worked on a
              wide range of projects from small business websites to large
              enterprise applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise includes modern JavaScript frameworks like React,
              along with CSS preprocessors and design systems. I'm also
              proficient with MongoDB for database management and Cloudflare R2
              for object storage solutions. I believe in writing clean,
              maintainable code and creating accessible interfaces that work for
              everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new design trends,
              contributing to open source projects, or enjoying outdoor
              activities.
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
