import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section
    id="contact"
    className="relative w-full overflow-x-hidden py-20 px-6"
  >
    <div className="max-w-4xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 gradient-text">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-10 mx-auto" />
      </motion.div>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
      >
        {[
          {
            icon: Mail,
            label: "bindujabavurupudi2006@gmail.com",
            href: "mailto:bindujabavurupudi2006@gmail.com",
          },
          {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/bindujabavurupudi",
          },
          {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/binduja-bavurupudi/",
          },
        ].map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 glass rounded-full px-5 py-3 neon-glow-hover group text-center break-all"
          >
            <Icon
              className="text-muted-foreground group-hover:text-primary transition-colors"
              size={18}
            />
            <span className="text-foreground text-sm sm:text-base">
              {label}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-xs sm:text-sm font-mono">
          © 2026 Binduja. Built with passion and code.
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
