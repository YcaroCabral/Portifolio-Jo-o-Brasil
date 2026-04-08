import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-br-blue rounded-sm flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">JB</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-br-blue">
                João <span className="text-br-green">Brasil</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Plataforma de transparência e atuação legislativa. Transformando dados públicos em informação acessível para o cidadão.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-br-blue hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-br-blue hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-br-blue hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#sobre" className="hover:text-br-blue transition-colors">Sobre João Brasil</a></li>
              <li><a href="#atuacao" className="hover:text-br-blue transition-colors">Métricas e Atuação</a></li>
              <li><a href="#projetos" className="hover:text-br-blue transition-colors">Projetos de Lei</a></li>
              <li><a href="#transparencia" className="hover:text-br-blue transition-colors">Portal da Transparência</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-br-blue transition-colors">API da Câmara</a></li>
              <li><a href="#" className="hover:text-br-blue transition-colors">API do Senado</a></li>
              <li><a href="#" className="hover:text-br-blue transition-colors">Dados do TSE</a></li>
              <li><a href="#" className="hover:text-br-blue transition-colors">LexML Brasil</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contato Comercial</h4>
            <p className="text-sm text-slate-500 mb-4">
              Interessado em uma plataforma similar para sua atuação pública?
            </p>
            <a href="mailto:ycarocabral.yc@gmail.com" className="text-br-blue font-bold hover:underline">
              ycarocabral.yc@gmail.com
            </a>
            <div className="mt-6 p-4 bg-premium-gray rounded-xl border border-slate-200">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Desenvolvido por</div>
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Github size={14} />
                Ycaro Cabral
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">
            © 2024 João Brasil. Esta página é uma demonstração comercial fictícia. Desenvolvido por Ycaro Cabral.
          </p>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacidade</a>
            <a href="#" className="hover:text-slate-600">Termos de Uso</a>
            <a href="#" className="hover:text-slate-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
