import { motion } from "motion/react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-sm font-bold text-br-green uppercase tracking-[0.2em] mb-4">Trajetória</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Uma vida dedicada ao <span className="italic">serviço público</span> e à inovação.
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                João Brasil iniciou sua jornada na vida pública com um propósito claro: modernizar a relação entre o cidadão e seus representantes. Com formação em Gestão Pública e Direito, sempre acreditou que a tecnologia é a maior aliada da transparência.
              </p>
              <p>
                Ao longo de sua trajetória, liderou iniciativas cruciais nas áreas de saúde preventiva e infraestrutura digital, sempre pautando suas decisões em dados técnicos e nas reais necessidades da população.
              </p>
              <p>
                Hoje, sua atuação é referência em prestação de contas, utilizando APIs oficiais para garantir que cada centavo e cada minuto de trabalho sejam visíveis para quem mais importa: você.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <div>
                <div className="text-slate-900 font-bold mb-1">Educação</div>
                <div className="text-slate-500 text-sm">Mestre em Gestão Pública pela FGV</div>
              </div>
              <div>
                <div className="text-slate-900 font-bold mb-1">Experiência</div>
                <div className="text-slate-500 text-sm">12 anos de atuação no setor legislativo</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-square bg-premium-gray rounded-3xl overflow-hidden relative group">
              <img
                src="./images/930-800x800.jpg"
                alt="João Brasil em atuação"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-br-blue/10 mix-blend-multiply" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-br-green text-white p-8 rounded-full shadow-2xl hidden lg:block">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold">12+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest">Anos de Luta</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
