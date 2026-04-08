import { motion } from "motion/react";
import { Database, ShieldCheck, Zap, Search } from "lucide-react";

const sources = [
  { name: "Câmara dos Deputados", desc: "Dados abertos sobre proposições e votações." },
  { name: "Senado Federal", desc: "Acompanhamento de projetos e sessões plenárias." },
  { name: "TSE", desc: "Histórico eleitoral e prestação de contas de campanha." },
  { name: "LexML", desc: "Rede de informação legislativa e jurídica brasileira." },
];

export default function DataTransparency() {
  return (
    <section id="transparencia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-br-blue uppercase tracking-[0.2em] mb-4">Tecnologia Cívica</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Atuação legislativa baseada em <span className="italic text-br-green">dados reais</span>.
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Esta plataforma demonstra como é possível consolidar informações de diversas fontes oficiais em uma interface moderna e acessível. A transparência não é apenas um conceito, é uma ferramenta de auditoria cidadã.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-br-blue/10 rounded-full flex items-center justify-center text-br-blue shrink-0">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Integração Direta</h4>
                  <p className="text-slate-500">Consumo automatizado de APIs governamentais para dados sempre atualizados.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-br-green/10 rounded-full flex items-center justify-center text-br-green shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Dados Auditáveis</h4>
                  <p className="text-slate-500">Cada informação exibida possui um link direto para a fonte oficial no portal da transparência.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-br-yellow/20 rounded-full flex items-center justify-center text-br-yellow-dark shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Clareza Visual</h4>
                  <p className="text-slate-500">Transformamos documentações técnicas complexas em indicadores fáceis de entender.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-premium-gray rounded-[2.5rem] p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Search size={120} />
            </div>
            
            <h4 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Database size={20} className="text-br-blue" />
              Fontes de Dados Integradas
            </h4>
            
            <div className="grid gap-4 relative z-10">
              {sources.map((source) => (
                <div key={source.name} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center group hover:border-br-blue transition-colors">
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-br-blue transition-colors">{source.name}</div>
                    <div className="text-sm text-slate-500">{source.desc}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-br-blue/10 group-hover:text-br-blue transition-all">
                    <Zap size={14} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-slate-200">
              <div className="text-center">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Status da Conexão</div>
                <div className="flex items-center justify-center gap-2 text-br-green font-bold">
                  <div className="w-2 h-2 bg-br-green rounded-full animate-pulse" />
                  Sistemas Operacionais
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
