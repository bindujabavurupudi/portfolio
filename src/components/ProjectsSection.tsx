import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A futuristic glassmorphism personal portfolio with animated backgrounds and smooth scrolling.",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Full stack e-commerce app with cart, payments, and user authentication.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Manager App",
    desc: "Collaborative task management tool with drag-and-drop, real-time updates.",
    stack: ["React", "Firebase", "CSS"],
  },
  {
    title: "Weather Dashboard",
    desc: "Live weather data visualization with charts, forecasts, and location search.",
    stack: ["JavaScript", "API", "Chart.js"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Projects</h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-10" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="glass neon-glow-hover rounded-2xl overflow-hidden group"
          >
            <div className="h-40 bg-gradient-to-br from-primary/10 via-secondary/10 to-neon-pink/10 flex items-center justify-center">
              <span className="text-4xl font-mono text-primary/30 group-hover:text-primary/60 transition-colors">
                {"{ }"}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
