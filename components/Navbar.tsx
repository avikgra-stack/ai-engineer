
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    setIsDark(document.documentElement.classList.contains('dark'));
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const links = [
    { name: 'Главная', href: '#' },
    { name: 'Экспертиза', href: '#expertise' },
    { name: 'AI Лаборатория', href: '#lab' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-200 dark:border-slate-700' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">AI<span className="text-blue-500">ENGINEER</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-8 mr-2">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium text-sm tracking-wide">
                {link.name}
              </a>
            ))}
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-md shadow-blue-900/40">
            Обсудить проект
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all border border-transparent hover:border-blue-500/20"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button className="text-slate-600 dark:text-slate-300 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl absolute top-full left-0 w-full border-b border-slate-200 dark:border-slate-700 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300 hover:text-blue-500 text-lg font-medium">
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white p-3 rounded-lg font-semibold w-full">
              Связаться
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
