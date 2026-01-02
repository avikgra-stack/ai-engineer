
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">AI<span className="text-blue-500">ENGINEER</span></span>
          </div>

          <div className="flex space-x-6">
            {[
              { Icon: Github, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Mail, href: 'mailto:hello@alex.ai' },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Alex AI Engineer. All rights reserved.
          </p>
          <div className="flex space-x-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
