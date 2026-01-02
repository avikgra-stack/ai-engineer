
import React from 'react';
import { EXPERTISE } from '../constants';
import * as LucideIcons from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-6">Технологический <span className="text-blue-500">Арсенал</span></h2>
            <p className="text-gray-400 text-lg">
              Использую только проверенные и современные инструменты для создания масштабируемых AI-решений.
            </p>
          </div>
          <div className="mt-8 md:mt-0 text-blue-500 font-bold flex items-center space-x-2">
            <LucideIcons.CheckCircle2 className="w-6 h-6" />
            <span>Ready for Production</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE.map((item, idx) => {
            const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Cpu;
            return (
              <div key={idx} className="group p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.category}</h3>
                <ul className="space-y-3">
                  {item.skills.map(skill => (
                    <li key={skill} className="flex items-start space-x-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
