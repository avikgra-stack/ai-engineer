
import React from 'react';
import { EXPERTISE } from '../constants';
import * as LucideIcons from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Технологический <span className="text-blue-500">Арсенал</span></h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Использую только проверенные и современные инструменты для создания масштабируемых AI-решений.
            </p>
          </div>
          <div className="mt-8 md:mt-0 text-blue-600 dark:text-blue-400 font-bold flex items-center space-x-2">
            <LucideIcons.CheckCircle2 className="w-6 h-6" />
            <span>Ready for Production</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE.map((item, idx) => {
            const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Cpu;
            return (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:-translate-y-2 hover:shadow-xl shadow-slate-200/50 dark:shadow-slate-900/30">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.category}</h3>
                <ul className="space-y-3">
                  {item.skills.map(skill => (
                    <li key={skill} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300 text-sm">
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
