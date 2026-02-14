import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/binduja20/", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", color: "#FFA116" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/binduja20?tab=activity", icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg", color: "#2F8D46" },
  { name: "CodeChef", url: "https://www.codechef.com/users/binduja20", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codechef.svg", color: "#5B4638" },
  { name: "Codeforces", url: "https://codeforces.com/profile/binduja07", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codeforces.svg", color: "#1F8ACB" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/binduja07", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg", color: "#00EA64" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => (
  <TooltipProvider delayDuration={0}>
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-10 mx-auto" />
        </motion.div>

        {/* Technical Skills */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-foreground mb-6 text-center"
        >Technical Skills</motion.h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-5 mb-16 justify-center"
        >
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={item}
                  className="w-16 h-16 rounded-full glass neon-glow-hover flex items-center justify-center cursor-pointer"
                >
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>

        {/* Coding Profiles */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-foreground mb-6 text-center"
        >Coding Profiles</motion.h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-5 justify-center"
        >
          {codingProfiles.map((profile) => (
            <Tooltip key={profile.name}>
              <TooltipTrigger asChild>
                <motion.a
                  variants={item}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full glass neon-glow-hover flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="w-8 h-8"
                    style={{ filter: `drop-shadow(0 0 4px ${profile.color})` }}
                  />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{profile.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </div>
    </section>
  </TooltipProvider>
);

export default SkillsSection;
