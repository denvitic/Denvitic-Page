import React, { useState } from 'react';
import { DenviticLogo } from './DenviticLogo';
import { DENVITIC_INFO } from '../data/denviticData';
import { Mail, MapPin, MessageSquare, ShieldCheck, ArrowUpRight, X } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-[#051F20] text-white pt-16 pb-12 border-t border-[#163832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <DenviticLogo variant="light" size="lg" showTagline={true} />
            
            <p className="text-xs sm:text-sm text-[#8EB69B] leading-relaxed max-w-sm">
              {DENVITIC_INFO.summary}
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#DAF1DE]/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <span>{DENVITIC_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <a href={`mailto:${DENVITIC_INFO.emailCorporate}`} className="hover:text-white transition-colors">
                  {DENVITIC_INFO.emailCorporate}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8EB69B] shrink-0 opacity-70" />
                <a href={`mailto:${DENVITIC_INFO.emailSecondary}`} className="hover:text-white transition-colors opacity-80">
                  {DENVITIC_INFO.emailSecondary}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#8EB69B]">
              Navegação Institucional
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#DAF1DE]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Como Trabalhamos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Denvitic
                </a>
              </li>
              <li>
                <a href="#valores" className="hover:text-white transition-colors">
                  Nossos Valores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & WhatsApp Direct */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#8EB69B]">
              Atendimento ao Cliente
            </h4>
            <p className="text-xs text-[#DAF1DE]/80 leading-relaxed">
              Solicite o seu orçamento com facilidade. O nosso assistente irá preparar a mensagem com os requisitos para atendimento prioritário no WhatsApp.
            </p>

            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full bg-[#235347] hover:bg-[#8EB69B] text-white hover:text-[#051F20] font-semibold text-xs py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-[#8EB69B]/20 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#8EB69B] group-hover:text-[#051F20]" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-[#8EB69B] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DAF1DE] shrink-0" />
              <span>Documento Oficial de Identidade de Marca — v2.0 (Agosto de 2026)</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#163832] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8EB69B]">
          <div>
            © {new Date().getFullYear()} Denvitic. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <span className="text-[#DAF1DE]/70">Feito em Angola 🇦🇴</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#051F20]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#051F20] rounded-2xl max-w-lg w-full p-6 space-y-4 relative border border-[#235347]/20 shadow-2xl">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-xl font-bold text-[#051F20]">
              Política de Privacidade — Denvitic
            </h3>

            <div className="text-xs text-[#0B2B26]/85 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                A <strong>Denvitic</strong> compromete-se a proteger a privacidade e os dados de todos os seus clientes e parceiros de negócio.
              </p>
              <p>
                <strong>1. Recolha de Dados:</strong> Os dados fornecidos através do simulador de orçamento (nome, empresa, contacto) destinam-se exclusivamente a formatar o pedido de contacto enviado diretamente para o nosso WhatsApp ou email corporativo.
              </p>
              <p>
                <strong>2. Transparência Técnica:</strong> Mantemos total clareza sobre onde os dados dos projetos ficam alojados, garantindo servidores seguros e encriptação SSL.
              </p>
              <p>
                <strong>3. Contactos:</strong> Para qualquer questão de privacidade ou termos de serviço, contacte-nos via <span className="font-mono text-[#235347]">{DENVITIC_INFO.emailCorporate}</span>.
              </p>
            </div>

            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full bg-[#235347] text-white text-xs font-semibold py-2.5 rounded-xl cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
