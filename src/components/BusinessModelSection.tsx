import React from 'react';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Wrench, Search, Code, Rocket } from 'lucide-react';

interface BusinessModelSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const BusinessModelSection: React.FC<BusinessModelSectionProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico & Alinhamento',
      icon: Search,
      desc: 'Analisamos em detalhe a realidade do seu negócio, identificando os requisitos reais para o seu website, email ou sistema de gestão.',
      badge: 'Fase Inicial',
    },
    {
      step: '02',
      title: 'Proposta Transparente',
      icon: MessageSquare,
      desc: 'Apresentamos um plano claro com prazos definidos, escopo bem delimitado e orçamento sem surpresas nem custos ocultos.',
      badge: 'Alinhamento',
    },
    {
      step: '03',
      title: 'Desenvolvimento & Testes',
      icon: Code,
      desc: 'Construímos o software ou website com tecnologia moderna, código otimizado, segurança e testes rigorosos antes da publicação.',
      badge: 'Construção',
    },
    {
      step: '04',
      title: 'Entrega & Suporte Local',
      icon: Rocket,
      desc: 'Colocamos a sua solução em produção, prestamos formação à sua equipa e garantimos acompanhamento e assistência contínua.',
      badge: 'Em Produção',
    },
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#FAFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#235347] bg-emerald-50 rounded-md border border-emerald-100">
            <Layers className="w-3.5 h-3.5" />
            <span>Processo Transparente</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Como a Denvitic trabalha no seu projeto
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Metodologia clara e focada em resultados reais. Garantimos comunicação constante e segurança do início à entrega final.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  {/* Step number & icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-extrabold text-[#235347]/30 group-hover:text-[#235347]/50 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#235347] flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#235347] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#235347] bg-emerald-50 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Callout */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#235347] text-white rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-slate-900">
                Garantia & Suporte Pós-Venda em Angola
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Todos os nossos serviços contam com suporte dedicado e assistência técnica para garantir o funcionamento contínuo do seu negócio.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#235347] hover:bg-[#1a3d34] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shrink-0 cursor-pointer shadow-xs active:scale-98"
          >
            Falar com a Nossa Equipa
          </button>
        </div>

      </div>
    </section>
  );
};

