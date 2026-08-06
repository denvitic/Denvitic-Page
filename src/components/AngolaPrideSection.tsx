import React from 'react';
import { DENVITIC_INFO, COMPANY_STATS } from '../data/denviticData';
import { MapPin, ShieldCheck, Cpu, Zap, HeartHandshake } from 'lucide-react';

export const AngolaPrideSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAFDFB] to-[#F4F9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#235347]/15 shadow-xl relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DAF1DE]/40 rounded-full filter blur-3xl -z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#DAF1DE] text-[#235347] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Compromisso Local em Angola</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#051F20] tracking-tight">
                Engenharia de software com entendimento profundo do mercado nacional.
              </h2>

              <p className="text-base text-[#0B2B26]/85 leading-relaxed">
                Entendemos as particularidades da infraestrutura, orçamentos e desafios operacionais das PMEs angolanas. Por isso, construímos soluções rápidas, resilientes e transparentes — com hospedagem estável, suporte próximo em Luanda e comunicação direta sem jargão corporativo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 bg-[#FAFDFB] rounded-xl border border-[#235347]/10">
                  <div className="p-2 bg-[#235347] text-white rounded-lg">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#051F20]">Transparência Técnica</h4>
                    <p className="text-xs text-[#0B2B26]/80 mt-0.5">Clareza total sobre hospedagem, segurança de dados, prazos e custos reais.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#FAFDFB] rounded-xl border border-[#235347]/10">
                  <div className="p-2 bg-[#163832] text-[#DAF1DE] rounded-lg">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#051F20]">Acompanhamento Local</h4>
                    <p className="text-xs text-[#0B2B26]/80 mt-0.5">Equipa dedicada pronta para atender presencialmente ou via WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats Box */}
            <div className="lg:col-span-5 bg-[#051F20] text-white rounded-2xl p-7 sm:p-8 space-y-6 shadow-lg">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase text-[#8EB69B] tracking-wider">
                  Nossa Proposta de Valor
                </span>
                <h3 className="font-heading text-xl font-bold mt-1 text-white">
                  Porquê escolher a Denvitic?
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {COMPANY_STATS.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="font-heading text-3xl font-bold text-[#DAF1DE]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#8EB69B] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-white/80 italic">
                  “A Denvitic começa onde a sua empresa está, e cresce junto com ela.”
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
