import emailjs from 'emailjs-com';


import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import ContactForm from '@/components/ContactForm';
const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Anupama. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-400 mt-2">
            Hosted at <span className="text-blue-400">anupama1.com.np</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
