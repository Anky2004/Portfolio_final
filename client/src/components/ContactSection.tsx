import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-8">
        I'm open to collaboration or freelance opportunities. Reach out through any of the platforms below!
      </p>
      <div className="flex justify-center gap-6 text-3xl">
        <a href="https://github.com/Anky2004" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-purple-600 transition duration-300" />
        </a>
        <a href="https://linkedin.com/in/saharaiankita" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600 transition duration-300" />
        </a>
        <a href="mailto:saharaiankita@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="hover:text-red-600 transition duration-300" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
