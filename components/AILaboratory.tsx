
import React, { useState } from 'react';
import { Sparkles, BrainCircuit, Rocket, Loader2, Zap } from 'lucide-react';
import { brainstormProject } from '../services/geminiService';

const AILaboratory: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [ideas, setIdeas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleBrainstorm = async () => {
    if (!industry.trim() || loading) return;
    setLoading(true);
    try {
      const result = await brainstormProject(industry);
      setIdeas(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const INDUSTRIES = ["E-commerce", "MedTech", "FinTech", "EdTech", "Logistics"];

  return (
    <section id="lab" className="py-24 bg-gray-950 border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
            <BrainCircuit className="text-blue-500" />
            <span>AI Лаборатория</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Используйте мой встроенный генератор идей, чтобы понять, как ИИ может трансформировать ваш сектор.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <input 
              type="text" 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Введите вашу сферу (напр. Недвижимость)"
              className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleBrainstorm}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              <span>Сгенерировать</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {INDUSTRIES.map(i => (
              <button 
                key={i} 
                onClick={() => setIndustry(i)}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-gray-800 text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all"
              >
                {i}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ideas.length > 0 ? (
              ideas.map((idea, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{idea.title}</h4>
                  <p className="text-gray-400 text-xs mb-4 line-clamp-3">{idea.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {idea.tech.map((t: string) => (
                      <span key={t} className="text-[9px] font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-3 py-10 text-center text-gray-600 italic">
                {loading ? "Думаю над лучшими решениями..." : "Выберите индустрию или введите свою, чтобы увидеть магию"}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILaboratory;
