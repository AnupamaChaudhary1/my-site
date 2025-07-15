
import React from 'react';
import { Brain, Code, Database, TrendingUp, Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Python & ML", level: 95, icon: Code, color: "from-blue-500 to-blue-600" },
    { name: "Data Science", level: 92, icon: TrendingUp, color: "from-green-500 to-green-600" },
    { name: "Deep Learning", level: 88, icon: Brain, color: "from-purple-500 to-purple-600" },
    { name: "SQL & Databases", level: 85, icon: Database, color: "from-orange-500 to-orange-600" },
  ];

  const achievements = [
    { icon: Award, number: "15+", text: "ML Projects Completed" },
    { icon: Users, number: "500K+", text: "Data Points Analyzed" },
    { icon: Lightbulb, number: "8+", text: "AI Models Deployed" },
    { icon: Target, number: "95%", text: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming data into intelligent solutions with over 5 years of experience in AI and Machine Learning
          </p>
        </div>
        
        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{achievement.number}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{achievement.text}</div>
              </div>
            );
          })}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Passionate Data Scientist & AI Engineer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in developing end-to-end machine learning solutions that drive business value. 
              My expertise spans from data preprocessing and feature engineering to model deployment and monitoring.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in statistical analysis and deep learning, I've successfully delivered 
              projects in computer vision, natural language processing, and predictive analytics across 
              various industries including healthcare, finance, and e-commerce.
            </p>
            
            {/* Expertise Areas */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Core Expertise:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Machine Learning", "Deep Learning", "Computer Vision", "NLP & LLMs",
                  "Time Series Analysis", "MLOps & Deployment", "Data Visualization", "Statistical Modeling"
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Progress */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Technical Skills</h3>
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
            
            {/* Tools & Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", 
                  "Jupyter", "Docker", "AWS", "Git", "SQL", "MongoDB", "Streamlit", "FastAPI"
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
