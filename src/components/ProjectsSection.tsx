import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  demoUrl?: string;
  sourceUrl?: string;
};

const projects: Project[] = [
  {
    title: "Online Code Editor",
    desc: "Built an interactive online code editor using HTML, CSS, and JavaScript that lets users write and preview HTML, CSS, and JS code in real time with live output rendering and dynamic styling support.",
    demoUrl: "https://bindujabavurupudi.github.io/online-code-editor/",
    sourceUrl: "https://github.com/bindujabavurupudi/online-code-editor",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Visa Approval Classifier",
    desc: "Built and deployed an XGBoost-based visa approval prediction system using Flask, Docker, and AWS, achieving 73% accuracy. Integrated a responsive frontend using HTML, CSS, and JavaScript for user interaction.",
    sourceUrl: "https://github.com/bindujabavurupudi/visa-approval-prediction",
    stack: ["HTML", "CSS", "JavaScript", "Flask", "Docker", "AWS", "XGBoost"],
  },
  {
    title: "FundForge",
    desc: "Developed a full-stack crowdfunding platform that allows users to create projects, set funding goals, and receive contributions from backers through a secure and user-friendly interface. Implemented secure user authentication, project management, and real-time funding progress tracking.",
    demoUrl: "https://fastidious-peony-9e1bc0.netlify.app/",
    sourceUrl: "https://github.com/bindujabavurupudi/FundForge-frontend",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "ShadCN", "Node.js", "Express.js", "Supabase", "Firebase Auth"],
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
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
