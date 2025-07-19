import React, { useState } from 'react';
import { Github, ExternalLink, Play, Code, Database, Brain, Eye, Calendar, Tag, Globe } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "School Fee Analysis",
      description: "An interactive Streamlit app that analyzes and predicts school fees using intelligent visualizations and machine learning. Built with Python and Streamlit.",
      image: "/api/placeholder/400/250",
      category: "data-analytics",
      tags: ["AI/ML", "Streamlit", "Pandas", "Python"],
      github: "https://github.com/AnupamaChaudhary1/School_feeAnalysis", // if available
      demo: "https://feeapp-anu.streamlit.app", // ✅ updated live link
      status: "live",
      date: "2025"
    },
    // {
    //   id: 2,
    //   title: "Sales Forecasting ML Pipeline",
    //   description: "End-to-end machine learning pipeline for sales prediction using ensemble methods, time series analysis, and feature engineering. Achieves 94% accuracy with automated retraining capabilities.",
    //   image: "/api/placeholder/400/250",
    //   category: "machine-learning",
    //   tags: ["Python", "Scikit-learn", "XGBoost", "Time Series", "MLOps"],
    //   github: "https://github.com/AnupamaChaudhary1",
    //   demo: "#",
    //   status: "production",
    //   date: "2024"
    // },

    {
      id: 2,
      title: "Modern School Webpage with React",
      description: "A responsive and interactive school website built using React, TypeScript, HTML, CSS, and modern JavaScript. Features smooth navigation, dynamic UI components, and clean code structure.",
      image: "/api/placeholder/400/250",
      category: "web-development",
      tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "JSON"],
      github: "https://github.com/AnupamaChaudhary1",
      demo: "https://anupamachaudhary1.github.io/model-school-webpage/",
      status: "live",
      date: "2025"
    },


    {
      id: 3,
      title: "Computer Vision Object Detector",
      description: "Real-time object detection system using YOLO v8 and OpenCV. Deployed on edge devices with 95% accuracy for industrial quality control applications.",
      image: "/api/placeholder/400/250",
      category: "computer-vision",
      tags: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Edge AI"],
      github: "https://github.com/AnupamaChaudhary1",
      demo: "#",
      status: "live",
      date: "2024"
    },
    {
      id: 4,
      title: "Customer Analytics Dashboard",
      description: "Interactive dashboard for customer behavior analysis with real-time data processing, cohort analysis, and predictive churn modeling. Built with Streamlit and PostgreSQL.",
      image: "/api/placeholder/400/250",
      category: "data-analytics",
      tags: ["Python", "Streamlit", "PostgreSQL", "Plotly", "Pandas"],
      github: "https://github.com/AnupamaChaudhary1",
      demo: "#",
      status: "live",
      date: "2024"
    },
    {
      id: 5,
      title: "NLP Sentiment Analysis API",
      description: "High-performance sentiment analysis API using transformer models (BERT) with 98% accuracy. Handles multilingual text and provides confidence scores with batch processing capabilities.",
      image: "/api/placeholder/400/250",
      category: "nlp",
      tags: ["Python", "BERT", "FastAPI", "Transformers", "Docker"],
      github: "https://github.com/AnupamaChaudhary1",
      demo: "#",
      status: "production",
      date: "2024"
    },
    {
      id: 6,
      title: "Anomaly Detection System",
      description: "Unsupervised machine learning system for detecting anomalies in network traffic and system logs. Uses isolation forest and autoencoders for real-time threat detection.",
      image: "/api/placeholder/400/250",
      category: "machine-learning",
      tags: ["Python", "Isolation Forest", "Autoencoders", "Kafka", "Elasticsearch"],
      github: "https://github.com/AnupamaChaudhary1",
      demo: "#",
      status: "beta",
      date: "2024"
    }
  ];

  const categories = [
    { name: 'All', value: 'all', icon: Eye },
    { name: 'AI Application', value: 'data-analytics', icon: Brain },
    { name: 'Web Development', value: 'web-development', icon: Globe },
    { name: 'Machine Learning', value: 'machine-learning', icon: Code },
    { name: 'Computer Vision', value: 'computer-vision', icon: Eye },
    { name: 'Data Analytics', value: 'data-analytics', icon: Database },
    { name: 'NLP', value: 'nlp', icon: Brain },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'production': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'beta': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest AI, machine learning, and data science projects that demonstrate 
            real-world applications and innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === category.value
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-height-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-md border border-blue-200/50 dark:border-blue-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more projects and code samples?
          </p>
          <a
            href="https://github.com/AnupamaChaudhary1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;