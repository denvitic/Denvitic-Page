import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onOpenQuoteModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FAFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#051F20] via-[#0B2B26] to-[#163832] text-white rounded-3xl p-8 sm:p-14 border border-[#235347]/30 shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Subtle Glow circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#235347]/30 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#8EB69B]/20 rounded-full filter blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-[#235347] text-[#DAF1DE] px-3.5 py-1.5 rounded-full border border-[#8EB69B]/30">
              Pronto para Dar o Próximo Passo?
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              A Denvitic começa onde a sua empresa está, e cresce junto com ela.
            </h2>

            <p className="text-base sm:text-lg text-[#DAF1DE]/90 leading-relaxed font-normal">
              Solicite o seu orçamento sem compromisso para Website, Email Corporativo ou Sistema Sob Medida. Atendimento rápido via WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#235347] hover:bg-[#8EB69B] text-white hover:text-[#051F20] font-bold text-base py-4 px-8 rounded-xl transition-all duration-300 shadow-xl cursor-pointer active:scale-98"
            >
              <MessageSquare className="w-5 h-5 text-[#8EB69B] group-hover:text-[#051F20]" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8EB69B] relative z-10">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#DAF1DE]" />
              <span>Resposta Rápida no WhatsApp</span>
            </div>
            <span>•</span>
            <div>Orçamento Transparente</div>
            <span>•</span>
            <div>Suporte Técnico Local em Angola</div>
          </div>

        </div>

      </div>
    </section>
  );
};
