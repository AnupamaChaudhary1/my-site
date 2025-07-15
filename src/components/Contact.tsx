
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "anupamachaudhary183@gmail.com",
      description: "For project inquiries and collaborations",
      href:"mailto:anupamachaudhary183@gmail.com"
    },
    {
      icon: Phone,
      title: "Website",
      value: "anupama1.com.np",
      description: "Visit my professional portfolio",
      href: "https://anupama1.com.np"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kathmandu, Nepal",
      description: "Available for remote work globally",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your data into intelligent solutions? Let's discuss your next AI/ML project 
            and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{method.value}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{method.description}</p>
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  <option value="">Select project type</option>
                  <option value="ml-project">Machine Learning Project</option>
                  <option value="data-analysis">Data Analysis & Visualization</option>
                  <option value="ai-application">AI Application Development</option>
                  <option value="consulting">Data Science Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Tell me about your project requirements, timeline, and any specific challenges you're facing..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          {/* Additional Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Available for Projects</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                I'm currently available for freelance data science projects, AI/ML consulting, 
                and long-term collaborations. Let's build something incredible together!
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-blue-100">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  <span>Free initial consultation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Services I Offer</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Machine Learning Model Development & Deployment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Data Analysis & Business Intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>AI-Powered Web Application Development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Data Science Consulting & Strategy</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
