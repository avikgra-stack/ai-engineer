
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import AILaboratory from './components/AILaboratory';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { Send, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 selection:bg-blue-500/30 selection:text-blue-400">
      <Navbar />
      <Hero />
      <Expertise />
      <AILaboratory />

      {/* Projects Section (Minimal) */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/aiphotov/800/1000" 
              alt="Developer" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[4/5] object-cover border border-white/5"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-2xl max-w-xs animate-float">
              <p className="text-white font-bold text-lg mb-1">5+ лет в ИИ</p>
              <p className="text-gray-400 text-xs">Разработка сложных систем на Python & JS с глубоким пониманием математики и архитектуры.</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Одержим <span className="text-blue-500">эффективностью</span></h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Привет! Я специализируюсь на создании интеллектуальных агентов и RAG-систем (Retrieval-Augmented Generation), которые позволяют компаниям использовать свои данные максимально эффективно.
              </p>
              <p>
                Моя цель — убрать пропасть между академическими достижениями в области ML и реальным продуктом, приносящим прибыль. Я не просто подключаю API, я строю архитектуру.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-white font-bold text-2xl mb-1">20+</h4>
                  <p className="text-sm">Проектов</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-2xl mb-1">99.9%</h4>
                  <p className="text-sm">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gray-900 border border-gray-800 rounded-[3rem] p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Готовы к <br /><span className="text-blue-500">апгрейду</span> вашего бизнеса?</h2>
                <p className="text-gray-400 mb-10 text-lg">
                  Оставьте заявку, и мы обсудим, как ИИ может решить ваши задачи. Отвечаю в течение 24 часов.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@alex.ai' },
                    { icon: Phone, label: 'Telegram', value: '@alex_ai_dev' },
                    { icon: MapPin, label: 'Location', value: 'Global / Remote' }
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-blue-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">{label}</p>
                        <p className="text-white font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl shadow-xl">
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Имя</label>
                      <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Иван" />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Email</label>
                      <input type="email" className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="ivan@mail.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Сообщение</label>
                    <textarea className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="Опишите вашу идею..."></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Отправить запрос</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
