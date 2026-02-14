import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">About Me</h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass neon-border rounded-2xl p-8 md:p-12"
      >
<div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo placeholder */}
          <div className="shrink-0 w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
  <img
    src="public/photo.jpeg"
    alt="Binduja Bavurupudi"
    className="w-full h-full object-cover"
  />
</div>
  

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Hello! I'm <span className="neon-text">Binduja Bavurupudi</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I am a dedicated Full Stack MERN Developer with hands-on experience in MongoDB, Express.js, React, and Node.js, focused on building robust, scalable, and high-performance web applications. I prioritize writing clean, maintainable code and crafting seamless, user-friendly interfaces that deliver real value.<br></br><br></br>

With a strong background in Data Structures and Algorithms (DSA), I approach development with a problem-solving mindset, ensuring optimized logic and efficient system design. I enjoy analyzing complex challenges and transforming them into structured, practical solutions.<br></br><br></br>

For me, development is not just about building applications — it’s about continuous growth and innovation. I actively explore emerging technologies, refine best practices, and aim to create modern, reliable, and future-oriented digital solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
