import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    label: "2023 - present",
    degree: "Bachelor of Technology in CSE(AL & ML)",
    institution: "Gayatri Vidya Parishad College Of Engineering",
    place: "Visakhapatnam, Andhra Pradesh",
    cgpa: "9.44",
  },
  {
    label: "2025 - Present",
    degree: "Full Stack Web Development",
    institution: "Masai School",
    place: "",
    cgpa: "XX.X%",
  },
  {
    label: "2021-2023",
    degree: "Senior Secondary Education",
    institution: "Jawahar Navodaya Vidyalaya",
    place: "City, State",
    cgpa: "XX.X%",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding relative">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Education</h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

        <div className="flex flex-col gap-6">
          {educationData.map((edu, i) => (
            <div key={i} className="glass neon-border rounded-2xl p-6 md:p-8 ml-12 md:ml-16 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[calc(3rem+6px)] md:-left-[calc(4rem+6px)] top-8 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsla(186,100%,50%,0.6)]" />

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-primary mb-1 tracking-wider uppercase">{edu.label}</p>
                  <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  {/* <p className="text-muted-foreground text-xs">{edu.place}</p> */}
                  {/* <p className="text-primary text-sm font-semibold mt-1">CGPA: {edu.cgpa}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
