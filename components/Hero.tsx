
import React from 'react';
import { ArrowRight, Bot, Code2, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-950">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">AI Engineer & Fullstack Architect</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Строю будущее <br />
            <span className="gradient-text">через интеллект</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Помогаю компаниям внедрять LLM, RAG системы и автоматизировать бизнес-процессы с помощью передового ИИ. От идеи до готового продукта в облаке.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#lab" className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20">
              <span>Смотреть проекты</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold transition-all">
              <span>Обсудить задачу</span>
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="client" className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" />
              ))}
            </div>
            <div className="text-sm">
              <p className="text-white font-bold">15+ успешных AI внедрений</p>
              <p className="text-gray-500 text-xs">для стартапов и корпораций</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass-card p-4 animate-float">
             <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 relative overflow-hidden flex items-center justify-center group">
               <Bot className="w-48 h-48 text-blue-500/50 group-hover:text-blue-400 transition-colors duration-500" />
               <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
               
               {/* Decorative code elements */}
               <div className="absolute top-10 left-10 p-4 rounded-xl bg-gray-950/80 border border-white/5 shadow-2xl">
                 <div className="flex space-x-1 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 </div>
                 <pre className="text-[10px] text-blue-400 font-mono">
                    {`async function generate(prompt) {
  const model = getModel("gemini-3");
  return await model.think(prompt);
}`}
                 </pre>
               </div>

               <div className="absolute bottom-10 right-10 p-4 rounded-xl bg-gray-950/80 border border-white/5 shadow-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-[10px] text-gray-400 font-mono tracking-tighter uppercase">Processing Data... 98%</span>
                  </div>
               </div>
             </div>
          </div>
          
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
