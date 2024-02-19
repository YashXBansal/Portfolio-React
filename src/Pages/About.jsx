import React from "react";
import backgroundImageLarge from "../assets/bg.jpg";
import nodeImage from "../assets/svgs/node.svg";
import reactImage from "../assets/svgs/react.svg";
import tsImage from "../assets/svgs/ts.svg";
import jsImage from "../assets/svgs/js.svg";
import javaImage from "../assets/svgs/java.svg";
import mongoImage from "../assets/svgs/mongodb.svg";
import postgresImage from "../assets/svgs/postgresql.svg";
import expressImage from "../assets/svgs/express.svg";
import myImage from "../assets/Me1.jpg";
import Education from "./Education";
import Contact from "./Contact";

function About() {
  const techStack = [
    { image: jsImage, text: "JavaScript" },
    { image: tsImage, text: "TypeScript" },
    { image: mongoImage, text: "MongoDB" },
    { image: expressImage, text: "Express.js" },
    { image: reactImage, text: "React.js" },
    { image: nodeImage, text: "Node.js" },
    { image: postgresImage, text: "PostgreSQL" },
    { image: javaImage, text: "Java" },
  ];

  return (
    <div
      className="bg-cover bg-center py-12 px-4 min-h-screen"
      style={{ backgroundImage: `url(${backgroundImageLarge})` }}
      id="about"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto text-white flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
          <div className="mb-8 md:mr-12 flex-shrink-0">
            <img
              src={myImage}
              alt="Your Name"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Greetings! I'm Yash, a Computer Science Engineer with a
              deep-rooted passion for technology. Based in India, I'm committed
              to leveraging my expertise in development to make a meaningful
              impact.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I've had the privilege of participating and winning HackaTron S5.
              These experiences have not only shaped my professional journey but
              have also reinforced my belief in the transformative power of hard
              work.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Thank you for taking the time to visit my portfolio! I'm excited
              about the opportunities ahead and eager to collaborate on projects
              that challenge and inspire us. Let's connect and embark on this
              journey together!
            </p>
            <h3 className="text-2xl font-bold mb-4">Tech Stacks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((item, index) => (
                <TechStackItem
                  key={index}
                  image={item.image}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional section to showcase your projects */}
        <div className="max-w-4xl mx-auto text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">My Projects</h3>
          {/* Add your project components here */}
          {/* Example: */}
          <div className="flex flex-wrap justify-center">
            <ProjectCard
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget blandit leo."
              link="#"
            />
            <ProjectCard
              title="Project 2"
              description="Sed vitae lectus at tortor dictum fermentum. Mauris volutpat auctor urna, nec lacinia nibh tristique at."
              link="#"
            />
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>
      <Education />
      <Contact/>
    </div>
  );
}

function TechStackItem({ image, text }) {
  return (
    <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
      <div className="flex items-center bg-white rounded-lg p-2 shadow-md transition duration-300 transform hover:scale-105">
        <img
          src={image}
          alt={text}
          className="w-6 h-6 md:w-8 md:h-8 mr-2" // Adjust image size as needed
        />
        <span className="text-xs md:text-sm text-gray-800">{text}</span>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="text-blue-500 font-bold hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
}

export default About;
