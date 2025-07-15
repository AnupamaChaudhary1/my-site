
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2, Database, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-32 left-32 w-8 h-8 text-blue-400 opacity-60 animate-bounce" />
        <Database className="absolute top-64 right-32 w-8 h-8 text-purple-400 opacity-60 animate-bounce delay-500" />
        <Brain className="absolute bottom-32 left-64 w-8 h-8 text-pink-400 opacity-60 animate-bounce delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">A</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anupama
            </span>
          </h1>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
              Data Scientist & AI Engineer
            </p>
            <p className="text-lg text-gray-400">
              Building intelligent solutions with Python, Machine Learning & Deep Learning
            </p>
          </div>
          
          <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming complex data into actionable insights and creating 
            AI-powered applications that solve real-world problems. Specialized in predictive 
            modeling, natural language processing, and computer vision.
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'SQL', 'AWS', 'Docker'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/AnupamaChaudhary1?tab=repositories" target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
              <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/anupama-chaudhary-639629269/" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:anupamachaudhary183@gmail.com"
               className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
              <Mail className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
              <span>Explore My Work</span>
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </a>
            <a href="#contact" className="inline-flex items-center px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
