import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-premium-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-premium-gray -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-br-green/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-br-blue/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-br-blue/10 text-br-blue text-xs font-bold uppercase tracking-wider mb-6">
            <CheckCircle2 size={14} />
            Atuação Legislativa Certificada
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[0.9] mb-6">
            João <br />
            <span className="text-br-blue">Brasil</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-serif italic text-slate-600 mb-8 max-w-lg">
            "Compromisso com a transparência, resultados concretos e o futuro do nosso desenvolvimento."
          </p>
          
          <p className="text-slate-500 text-lg mb-10 max-w-md leading-relaxed">
            Uma nova forma de apresentar a atuação pública com clareza, dados auditáveis e participação direta da população.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-br-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-br-blue/20 flex items-center justify-center gap-2 group"
            >
              Conheça a atuação
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              Ver Projetos
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-6 grayscale opacity-50">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Dados integrados:</span>
            <div className="flex gap-4 items-center">
              <span className="font-serif font-bold text-sm">Câmara</span>
              <span className="font-serif font-bold text-sm">Senado</span>
              <span className="font-serif font-bold text-sm">TSE</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
            <img
              src="/images/100-800x1000.jpg"
              alt="João Brasil"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-br-blue/40 to-transparent" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-br-yellow rounded-full z-0" />
          <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-br-green/20 rounded-full z-0" />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-8 bottom-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
          >
            <div className="text-br-green font-bold text-3xl mb-1">98%</div>
            <div className="text-slate-500 text-xs font-medium leading-tight">
              Presença confirmada em sessões legislativas
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
