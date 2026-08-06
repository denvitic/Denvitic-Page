import React, { useState } from 'react';
import { FAQS } from '../data/denviticData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQSectionProps {
  onOpenQuoteModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenQuoteModal }) => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFDFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#DAF1DE] text-[#235347] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#051F20] tracking-tight">
            Esclareça as suas dúvidas com total transparência
          </h2>

          <p className="text-base text-[#0B2B26]/80 max-w-2xl mx-auto">
            Respostas diretas sobre os nossos serviços, modalidades de projeto e suporte técnico.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#235347] shadow-md'
                    : 'border-[#235347]/15 hover:border-[#235347]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#051F20]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 ${isOpen ? 'bg-[#235347] text-white rotate-180' : 'bg-[#DAF1DE] text-[#235347]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#0B2B26]/85 leading-relaxed border-t border-[#235347]/10 bg-[#FAFDFB]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt to chat on WhatsApp if questions remain */}
        <div className="bg-[#DAF1DE]/40 rounded-2xl p-6 border border-[#235347]/20 text-center space-y-3">
          <h4 className="font-heading text-lg font-bold text-[#051F20]">
            Ainda tem alguma dúvida sobre a sua empresa?
          </h4>
          <p className="text-xs sm:text-sm text-[#0B2B26]/80">
            A nossa equipa responde rapidamente pelo WhatsApp para ajudar a identificar a solução ideal.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-[#235347] hover:bg-[#0B2B26] text-white font-semibold text-xs py-2.5 px-5 rounded-xl transition-colors shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#8EB69B]" />
            <span>Falar Connosco via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
