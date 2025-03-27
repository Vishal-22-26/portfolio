import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 relative z-10">
              Hi, I'm <span className="text-blue-600 relative">
                Vishal Anand
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 transform -rotate-1"></div>
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Full Stack Developer crafting exceptional digital experiences
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/Vishal-22-26" className="p-3 text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110 hover:-translate-y-1">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/vishal-anand-bb0464201?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3B5rSgJ22YQ5CV2wZnCqkTFw%3D%3D" className="p-3 text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110 hover:-translate-y-1">
              <Linkedin size={28} />
            </a>
            <a href="mailto:vishalanandmahatha64@email.com" className="p-3 text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110 hover:-translate-y-1">
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce cursor-pointer">
          <ChevronDown size={28} className="text-blue-500" />
        </div>
      </section>

     
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <User className="text-blue-600" size={28} />
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm a passionate developer with experience in building modern web applications.
            I specialize in React, Node.js, DevOps practices and cloud technologies. When I'm not coding,
            you can find me exploring new technologies and contributing to open-source projects.
          </p>
        </div>
      </section>

      
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <Code2 className="text-blue-600" size={28} />
            <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['React', 'JavaScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Flask', 'Django', 'CI/CD'].map((skill) => (
              <div key={skill} 
                className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <p className="font-semibold text-gray-800 text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Project 1',
                description: 'A modern web application built with React and Node.js for generating AI images, featuring real-time processing and user-friendly interactions.',
                image: 'src/assets/AI_IMAGE_APP.png',
              },
              {
                title: 'Project 2',
                description: 'A blog platform with real-time updates, enabling all CRUD operations using React for the frontend and Appwrite for the backend.',
                image: 'src/assets/appwrite.png',
              },
            ].map((project) => (
              <div key={project.title} 
                className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                  <a
                    href="https://pictora-32zv.onrender.com"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    View Project 
                    <ExternalLink size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <a
            href="mailto:vishalanandmahatha64@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>

      
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Vishal Anand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;