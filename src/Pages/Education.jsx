import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      className=" py-12 px-5"
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto text-white">
          <EducationItem
            title="Secondary Education"
            institution="CBSE"
            date="2020"
            description="CGPA: 9.5"
            delay={1}
          />
          <EducationItem
            title="Senior Secondary Education"
            institution="CBSE"
            date="2020-2022"
            description="CGPA: 9.3"
            delay={1.5}
          />
          <EducationItem
            title="Bachelor's Of Technology (BTech)"
            institution="GGSIPU"
            date="2022-2026"
            description="CGPA: 8.7"
            delay={2}
          />
        </div>
      </div>
      <Achievements />
    </motion.div>
  );
}

const EducationItem = ({ title, institution, date, description, delay }) => {
  return (
    <motion.div
      className="mb-8 bg-gray-800 bg-opacity-50 rounded p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 1 }}
    >
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-lg mb-1 text-gray-300">{institution}, {date}</p>
      <p className="text-lg text-gray-300">{description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div className=" py-12 px-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Achievements</h2>
        <div className="max-w-4xl mx-auto">
          <AchievementItem
            title="Achievement 1"
            date="2023"
            description="Winner of HackaTron Season 5."
          />
          <AchievementItem
            title="Achievement 2"
            date="2023"
            description="Received award for excellence in academics."
          />
          {/* Add more achievement items as needed */}
        </div>
      </div>
    </div>
  );
};

const AchievementItem = ({ title, date, description }) => {
  return (
    <div className="mb-8 bg-gray-800 bg-opacity-50 rounded p-6">
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-lg mb-1 text-gray-300">{date}</p>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
};

export default Education;
