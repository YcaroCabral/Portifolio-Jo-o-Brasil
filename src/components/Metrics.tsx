import { motion } from "motion/react";
import { FileText, CheckCircle, Users, MapPin, Calendar, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: <FileText className="text-br-blue" />,
    value: "142",
    label: "Projetos Apresentados",
    description: "Iniciativas focadas em desenvolvimento e transparência.",
  },
  {
    icon: <CheckCircle className="text-br-green" />,
    value: "38",
    label: "Projetos Aprovados",
    description: "Leis que já impactam positivamente a vida do cidadão.",
  },
  {
    icon: <TrendingUp className="text-br-blue" />,
    value: "98.4%",
    label: "Presença em Sessões",
    description: "Compromisso inabalável com o dever parlamentar.",
  },
  {
    icon: <Users className="text-br-green" />,
    value: "1.2M",
    label: "Pessoas Impactadas",
    description: "Alcance estimado das políticas públicas implementadas.",
  },
  {
    icon: <MapPin className="text-br-blue" />,
    value: "214",
    label: "Cidades Alcançadas",
    description: "Presença e atuação em diversos municípios do estado.",
  },
  {
    icon: <Calendar className="text-br-green" />,
    value: "15",
    label: "Comissões Ativas",
    description: "Participação estratégica em debates fundamentais.",
  },
];

export default function Metrics() {
  return (
    <section id="atuacao" className="py-24 bg-premium-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-br-blue uppercase tracking-[0.2em] mb-4"
          >
            Métricas Públicas
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6"
          >
            Resultados que podem ser <span className="italic">auditados</span>.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Demonstração visual de como dados das APIs da Câmara, Senado e TSE podem ser consolidados para uma prestação de contas moderna.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-br-blue/5 transition-all"
            >
              <div className="w-12 h-12 bg-premium-gray rounded-xl flex items-center justify-center mb-6">
                {metric.icon}
              </div>
              <div className="text-4xl font-serif font-bold text-slate-900 mb-2">{metric.value}</div>
              <div className="text-lg font-bold text-slate-800 mb-3">{metric.label}</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-br-blue/5 rounded-2xl border border-br-blue/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-br-blue rounded-full flex items-center justify-center text-white">
              <TrendingUp size={20} />
            </div>
            <p className="text-slate-700 font-medium">
              Dados atualizados em tempo real via <span className="font-bold">Portal da Transparência</span>.
            </p>
          </div>
          <button className="text-br-blue font-bold text-sm uppercase tracking-wider hover:underline">
            Ver metodologia de dados →
          </button>
        </div>
      </div>
    </section>
  );
}
