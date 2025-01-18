import React from 'react';
import { Database, GraduationCap, Briefcase, FolderGit2, Award, Mail, Github, Linkedin, ExternalLink, User, Twitter } from 'lucide-react';
import ProjectsSection from './ProjectsSection';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between h-16 mt-8">
      <div className="flex items-center">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          AFKIR Mohamed
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-4 ml-auto"> {/* Changed from space-x-8 to space-x-4 */}
        <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg">
          About
        </a>
        <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg">
          Education
        </a>
        <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg">
          Experience
        </a>
        <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg">
          Skills
        </a>
        <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg">
          Projects
        </a>
        <a href="#certifications" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg">
          Certifications
        </a>
        <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg">
          Contact
        </a>
      </div>
    </div>
  </div>
</nav>


      {/* About Section */}
<section id="about" className="pt-32 pb-20 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <User className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">About Me</h2>
    </div>
    <div className="bg-gray-900 shadow-lg p-8 rounded-lg flex gap-8">
      <img 
        src="/src/images/profile.png"
        alt="Profile"
        className="w-64 h-64 rounded-full object-cover"
      />
      <div className="flex flex-col justify-between">
      <p className="text-gray-300 text-xl leading-relaxed">
  I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
    Afkir Mohamed
  </span>, a versatile <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Data Engineer</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Data Scientist</span> who transforms complex data challenges into actionable insights. With expertise in data pipelines, ETL processes, and database management, I bring a comprehensive skill set in Machine Learning, Data Science, and Advanced Analytics. My experience spans from developing predictive models to implementing scalable data solutions. I leverage my analytical capabilities to extract meaningful patterns from data, applying statistical analysis and ML algorithms to drive data-informed decisions. I'm constantly expanding my technical toolkit and seeking opportunities where I can apply my combined expertise in data engineering and advanced analytics to create innovative solutions.
</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="flex space-x-4">
            <a href="https://github.com/afkirmohamed11" target="_blank" rel="noopener noreferrer" 
              className="flex items-center text-blue-400 hover:text-blue-300">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" target="_blank" rel="noopener noreferrer" 
              className="flex items-center text-blue-400 hover:text-blue-300">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://x.com/mohamed1910118?s=09" target="_blank" rel="noopener noreferrer" 
              className="flex items-center text-blue-400 hover:text-blue-300">
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </a>
          </div>
          
          {/* Get Resume Button */}
          <a 
            href="https://drive.google.com/file/d/1dASBOJtIV-82mmEUyI3yy1ngcqmdAJSH/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:bg-gradient-to-l transition-colors duration-200 group ml-auto"
          >
            <svg 
              className="w-5 h-5 mr-2 group-hover:animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Get Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Education Section */}
<section id="education" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Education</h2>
    </div>
    <div className="grid gap-8">
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <div>
          <h3 className="text-xl font-bold text-blue-400 text-2xl">Data Engineering Degree</h3>
          <p className="font-bold text-gray-300 text-xl">National School of Applied Sciences of Al Hoceima</p>
<p className="text-gray-300 text-xl">2020 - Present</p>

        </div>
      </div>
    </div>
  </div>
</section>


      {/* Experience Section */}
      {/* Experience Section */}
<section id="experience" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <Briefcase className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Experience</h2>
    </div>
    <div className="grid gap-8">
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <div>
          <h3 className="text-xl font-bold text-blue-400 text-2xl">Data Engineering & Science Intern</h3>
          <p className="font-bold text-gray-300 text-xl">Shiftbricks Start-up</p>
          <p className="text-gray-300 text-xl">June 2024 - September 2024</p>
        </div>
        <ul className="list-disc list-inside mt-4 text-gray-300">
          <li>Developed a data pipeline following the Medallion architecture (bronze, silver, gold layers) to process Arabic legal documents.</li>
          <li>Extracted and structured metadata and content from PDFs using OCR, LLM models, and advanced techniques.</li>
          <li>Converted extracted data into a JSON schema for storage in MongoDB.</li>
          <li>Embedded structured content for use in an AI assistant chatbot.</li>
          <li>Automated the entire pipeline using Apache Airflow, incorporating a human validation step.</li>
          <li>Designed a FARM stack UI for experts to validate document structure before embedding.</li>
          <li>Containerized the pipeline with Docker for smooth and scalable deployment.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Apache Airflow</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">OCR</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">LLM Models</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MongoDB</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Docker</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Fast API</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
<section id="skills" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <Database className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Skills</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Big Data Tools</h3>
        <div className="flex flex-wrap gap-2">
          
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">SQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">NoSQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Hadoop</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Kafka</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Spark</span>

        </div>
      </div>
    <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Programming Languages & Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Java</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Spring boot</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">HTML</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">CSS</span>

        </div>
      </div>
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Databases</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MySQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">PostgreSQL</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">SQLServer</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Oracle</span>
        </div>
      </div>
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">NoSQL Databases</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MongoDB</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Cassandra</span>
        </div>
      </div>
      
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Data Science Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Machine Learning</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Deep Learning</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">NLP</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Classification</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Clustering</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">LLM Exploitation</span>

        </div>
      </div>
      
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">DevOps Tools</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Docker</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Terraform</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Linux</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Git</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">GitLab</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">GitHub</span>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Projects Section */}
      
<ProjectsSection />
{/* Certifications Section */}
<section id="certifications" className="py-16 bg-gray-800 px-6">
  <div className="container mx-auto">
    <div className="flex items-center mb-12">
      <Award className="w-8 h-8 text-blue-400 mr-4" />
      <h2 className="text-3xl font-bold">Certifications</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src="src/images/IBM.png"
          alt="IBM"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">IBM Data Engineering Professional Certificate</h3>
          <p className="text-gray-300">IBM</p>
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/R3VCTZT4H887" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>
      
      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src="src/images/Google.png"
          alt="Google"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Agile Project Management</h3>
          <p className="text-gray-300">Google</p>
          <a href="https://www.coursera.org/account/accomplishments/verify/VU8WWTRDJQJN" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src="src/images/DataCamp.png"
          alt="DataCamp"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">AWS Cloud Concepts</h3>
          <p className="text-gray-300">DataCamp</p>
          <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/0bcbeb425800c1bc382a51fba1a2ff216772b2a3" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src="src/images/IBM.png"
          alt="IBM"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">NoSQL, Big Data, and Spark Foundations Specialization</h3>
          <p className="text-gray-300">IBM</p>
          <a href="https://www.coursera.org/account/accomplishments/specialization/3BSMCBVP2D75" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src="src/images/365DataScience.png"
          alt="365 Data Science"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Advanced SQL for Data Engineering</h3>
          <p className="text-gray-300">365 Data Science</p>
          <a href="https://learn.365datascience.com/certificates/CC-A4B7A0EC0F/" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>

      <div className="bg-gray-900 shadow-lg p-6 rounded-lg flex items-center">
        <img
          src="src/images/Talend.png"
          alt="Talend"
          className="w-24 h-24 object-contain mr-6 bg-gray-800 p-2 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Talend Data Integration Certification Preparation training</h3>
          <p className="text-gray-300">Talend</p>
          <a href="https://www.coursera.org/account/accomplishments/verify/D8AXDXHLPJ4L" 
             className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
             target="_blank"
             rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <Mail className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="bg-gray-900 shadow-lg p-8 rounded-lg">
            <p className="text-gray-100 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-4">
              <a href="mailto:mohamedafkir078@gmail.com" 
                className="flex items-center text-blue-400 hover:text-blue-300">
                <Mail className="w-5 h-5 mr-2" />
                mohamedafkir078@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
              <a href="https://github.com/afkirmohamed11" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300">
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
<footer className="bg-gray-900 text-gray-400 py-8">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a 
          href="https://github.com/afkirmohamed11" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/mohamed-afkir-1bbb9729a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://x.com/mohamed1910118?s=09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
      
      {/* Copyright Notice */}
      <p className="text-lg text-gray-100 text-center md:text-right">
  &copy; {new Date().getFullYear()} Mohamed Afkir. All Rights Reserved.
</p>

    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
