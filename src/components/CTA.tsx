import { motion } from "motion/react";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-br-blue relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-br-green/10 -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-br-yellow/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Sua atuação pública merece <span className="italic text-br-yellow">clareza</span> e tecnologia.
          </h2>
          <p className="text-white/70 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Esta é uma demonstração de como transformar dados legislativos complexos em uma experiência digital de alto nível que gera credibilidade e confiança.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-br-blue px-10 py-5 rounded-full font-bold text-xl shadow-2xl flex items-center justify-center gap-3 group"
            >
              Quero uma página assim
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-br-blue border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              Solicitar Demonstração
              <Mail size={20} />
            </motion.button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-white/50 text-sm font-medium">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} />
              Suporte Especializado
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight size={16} />
              Implementação em 15 dias
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
