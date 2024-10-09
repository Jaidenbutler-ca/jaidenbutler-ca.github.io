import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 text-lg mb-6">
          I’m a software developer specializing in building web applications using React and Node.js.
        </p>
        <a href="#projects" className="text-blue-500 hover:underline">Check out my projects</a>
      </div>
    </section>
  );
}

export default AboutMe;