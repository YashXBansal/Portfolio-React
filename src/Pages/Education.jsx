import React from "react";

function Education() {
  return (
    <div
      className="bg-cover bg-center py-12 px-4"
      style={{
        backgroundImage: `url('path_to_your_background_image')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="education"
    >
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Education
        </h2>
        <div className="max-w-4xl mx-auto text-white">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Bachelor's Degree in Computer Science
            </h3>
            <p className="text-lg mb-1">University of Example, 20XX - 20XX</p>
            <p className="text-lg">GPA: 4.0</p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">High School Diploma</h3>
            <p className="text-lg mb-1">Example High School, 20XX - 20XX</p>
            <p className="text-lg">Honors: Summa Cum Laude</p>
          </div>
          {/* Add more education details as needed */}
        </div>
      </div>
    </div>
  );
}

export default Education;
