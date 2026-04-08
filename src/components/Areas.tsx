import { motion } from "motion/react";
import { Heart, BookOpen, Shield, HardHat, Globe, Cpu } from "lucide-react";

const areas = [
  {
    title: "Saúde",
    icon: <Heart />,
    description: "Foco em saúde preventiva e modernização da gestão hospitalar através de telemedicina.",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Educação",
    icon: <BookOpen />,
    description: "Incentivo ao ensino técnico e ampliação da conectividade em escolas da rede pública.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Segurança",
    icon: <Shield />,
    description: "Uso de inteligência de dados para prevenção de crimes e valorização das forças de segurança.",
    color: "bg-slate-50 text-slate-600",
  },
  {
    title: "Infraestrutura",
    icon: <HardHat />,
    description: "Projetos de mobilidade urbana sustentável e saneamento básico para comunidades carentes.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Desenvolvimento",
    icon: <Globe />,
    description: "Estímulo ao empreendedorismo regional e atração de investimentos internacionais.",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Tecnologia",
    icon: <Cpu />,
    description: "Fomento à economia digital e criação de polos tecnológicos para jovens talentos.",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Areas() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-br-green uppercase tracking-[0.2em] mb-4">Prioridades</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Áreas de atuação e <span className="italic">compromissos</span> estratégicos.
            </h3>
          </div>
          <p className="text-slate-500 text-lg max-w-sm">
            Pilares fundamentais que guiam cada projeto de lei e cada emenda parlamentar apresentada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 hover:bg-premium-gray transition-colors group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${area.color}`}>
                {area.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">{area.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {area.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-br-blue opacity-0 group-hover:opacity-100 transition-opacity">
                Ver propostas relacionadas →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
