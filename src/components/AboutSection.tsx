import React from 'react';
import { DENVITIC_INFO, CORE_VALUES } from '../data/denviticData';
import { Target, ShieldCheck, MapPin, Cpu, TrendingUp, Compass, Award, Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#235347]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#235347]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#235347]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#235347]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#235347]" />;
      default:
        return <Target className="w-5 h-5 text-[#235347]" />;
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#F4F9F5] border-y border-[#235347]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Top Part: Institutional Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#DAF1DE] text-[#235347] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Identidade de Marca Denvitic</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#051F20] tracking-tight">
              Uma software house angolana que cresce com os pés no chão.
            </h2>

            <p className="text-base sm:text-lg text-[#0B2B26]/90 leading-relaxed font-normal">
              A Denvitic é uma empresa angolana de tecnologia focada na excelência e resultados operacionais reais. Desenvolvemos soluções sólidas para pequenas e médias empresas em Angola — websites institucionais, email corporativo personalizado e sistemas de gestão sob medida — garantindo credibilidade, estabilidade e suporte técnico próximo.
            </p>

            <div className="p-5 bg-white rounded-2xl border-l-4 border-[#235347] shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#235347]">
                Nosso Posicionamento Oficial
              </span>
              <p className="text-base sm:text-lg font-heading font-medium text-[#051F20] italic">
                “{DENVITIC_INFO.positioning}”
              </p>
            </div>
          </div>

          {/* Right Cardly-style Mission & Vision Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-[#235347]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#235347] text-white">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#051F20]">Nossa Missão</h3>
                  <p className="text-xs text-[#235347] font-semibold">O nosso compromisso diário</p>
                </div>
              </div>
              <p className="text-sm text-[#0B2B26]/85 leading-relaxed">
                {DENVITIC_INFO.mission}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#235347]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#163832] text-[#DAF1DE]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#051F20]">Nossa Visão</h3>
                  <p className="text-xs text-[#235347] font-semibold">Onde queremos chegar em África</p>
                </div>
              </div>
              <p className="text-sm text-[#0B2B26]/85 leading-relaxed">
                {DENVITIC_INFO.vision}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Part: The 5 Core Values */}
        <div id="valores" className="space-y-10 pt-10 border-t border-[#235347]/10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#051F20]">
              Nossos Valores Fundamentais
            </h3>
            <p className="text-sm sm:text-base text-[#0B2B26]/80">
              Diretrizes que orientam cada linha de código, reunião e proposta técnica entregue pela Denvitic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="bg-white rounded-2xl p-6 border border-[#235347]/15 hover:border-[#235347]/40 shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#DAF1DE] rounded-xl">
                    {getValueIcon(val.icon)}
                  </div>
                  <span className="font-heading text-2xl font-bold text-[#8EB69B]">
                    {val.number}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-bold text-[#051F20] mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#235347] mb-2">
                    {val.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#0B2B26]/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
