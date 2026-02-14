import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import ParticleBackground from "./ParticleBackground";

const useTypingAnimation = (
  text: string,
  typingSpeed = 80,
  pauseDuration = 3000,
  deletingSpeed = 40
) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (displayed.length < text.length) {
        setDisplayed(text.slice(0, displayed.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      if (displayed.length > 0) {
        setDisplayed(text.slice(0, displayed.length - 1));
      } else {
        setIsDeleting(false);
      }
    }
  }, [displayed, isDeleting, text, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return displayed;
};

const HeroSection = () => {
  const typedText = useTypingAnimation(
    "Full Stack Web Developer",
    90,
    4000,
    50
  );

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden animated-gradient-bg px-6"
    >
      <ParticleBackground />

      {/* Responsive Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 gradient-text leading-tight break-words"
        >
          Binduja Bavurupudi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 font-light mb-6 min-h-[2rem]"
        >
          <span className="font-mono-code">{typedText}</span>
          <span className="inline-block w-[2px] h-5 md:h-6 bg-primary ml-1 align-middle animate-pulse" />
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={() => scrollTo("#about")}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
