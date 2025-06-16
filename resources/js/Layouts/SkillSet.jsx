import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  'Laravel', 'JavaScript', 'PostgreSQL', 'CSS',
  'HTML', 'Git', 'SQL Server', 'MySQL'
];

// Utility function to generate random position styles
const generateRandomPosition = () => {
  const top = Math.floor(Math.random() * 80) + 10; // between 10% and 90%
  const left = Math.floor(Math.random() * 80) + 10; // between 10% and 90%
  return { top: `${top}%`, left: `${left}%` };
};

export default function SkillsSection() {
  const [showSkills, setShowSkills] = useState(false);
  const [exploded, setExploded] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let timer;
    if (showSkills) {
      // Generate random positions for bubbles
      const newPositions = skills.map(() => generateRandomPosition());
      setPositions(newPositions);
      timer = setTimeout(() => setExploded(true), 6000);
    } else {
      setExploded(false);
      setPositions([]);
    }
    return () => clearTimeout(timer);
  }, [showSkills]);

  const bubbleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    explode: { opacity: 0, scale: 2, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-full h-120 flex items-center justify-center bg-rose-200 text-gray-800 overflow-hidden px-4 py-12">
      <motion.button
        className="z-10 w-30 h-30 rounded-full bg-rose-500 text-white text-xl font-bold shadow-lg hover:bg-rose-600 transition"
        onClick={() => setShowSkills(!showSkills)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        style={{ position: 'absolute', top: '38%', left: '46%', transform: 'translate(-50%, -50%)' }}
      >
        SKILL
      </motion.button>

      <AnimatePresence>
        {showSkills && positions.length === skills.length && (
          <>
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="absolute bg-white px-6 py-3 rounded-full shadow-lg text-center text-sm sm:text-base"
                style={positions[index]}
                variants={bubbleVariants}
                initial="initial"
                animate={exploded ? 'explode' : 'animate'}
                transition={{ delay: index * 0.15 }}
              >
                {skill}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
