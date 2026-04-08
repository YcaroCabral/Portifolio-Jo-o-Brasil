import { motion } from "motion/react";
import { ExternalLink, Clock, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Escola Digital 2030",
    tag: "Educação",
    status: "Em tramitação",
    description: "Programa para equipar 100% das escolas rurais com internet de alta velocidade e laboratórios de robótica.",
    impact: "50 mil alunos beneficiados",
    date: "Apresentado em Mar/2024",
  },
  {
    title: "Saúde na Palma da Mão",
    tag: "Saúde",
    status: "Aprovado",
    description: "Implementação de prontuário eletrônico unificado para agilizar o atendimento em postos de saúde municipais.",
    impact: "Redução de 30% nas filas",
    date: "Aprovado em Jan/2024",
  },
  {
    title: "Rota do Desenvolvimento",
    tag: "Infraestrutura",
    status: "Em execução",
    description: "Projeto de revitalização de estradas vicinais para facilitar o escoamento da produção agrícola familiar.",
    impact: "Aumento de 15% na renda local",
    date: "Iniciado em Out/2023",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-premium-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-br-blue uppercase tracking-[0.2em] mb-4">Iniciativas</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Projetos que transformam <span className="italic">realidades</span>.
          </h3>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start md:items-center hover:shadow-xl transition-shadow group"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-br-blue/10 text-br-blue text-xs font-bold rounded-full uppercase">
                    {project.tag}
                  </span>
                  <span className={`flex items-center gap-1 text-xs font-bold uppercase ${
                    project.status === "Aprovado" ? "text-br-green" : "text-orange-500"
                  }`}>
                    {project.status === "Aprovado" ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                    {project.status}
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-br-blue transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-lg mb-6 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="font-bold text-slate-700">Impacto:</span> {project.impact}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="font-bold text-slate-700">Histórico:</span> {project.date}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-slate-50 hover:bg-br-blue hover:text-white text-slate-900 px-6 py-4 rounded-2xl font-bold transition-all">
                  Detalhes do Projeto
                  <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-slate-500 font-bold hover:text-br-blue transition-colors">
            Ver todos os 142 projetos na base de dados →
          </button>
        </div>
      </div>
    </section>
  );
}
