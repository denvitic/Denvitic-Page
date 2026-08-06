import React, { useState } from 'react';
import { SERVICES } from '../data/denviticData';
import { ServiceItem } from '../types';
import { Mail, Globe, Code, Monitor, Cloud, Check, ArrowRight, Sparkles, MessageSquare, Info } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onSelectServiceDetail: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
  onSelectServiceDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredServices = activeCategory === 'todos'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="w-6 h-6 text-[#235347]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#235347]" />;
      case 'Code':
        return <Code className="w-6 h-6 text-[#235347]" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-[#235347]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#235347]" />;
      default:
        return <Code className="w-6 h-6 text-[#235347]" />;
    }
  };

  const getStatusBadge = (status: string) => {
    return (
      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#235347] font-semibold text-xs px-2.5 py-1 rounded-md border border-emerald-100">
        <span className="w-1.5 h-1.5 rounded-full bg-[#235347]"></span>
        Disponível Já
      </span>
    );
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#235347] bg-emerald-50 rounded-md border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo de Soluções</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Serviços projetados para a realidade da sua empresa
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Comece pelo que o seu negócio precisa hoje — email corporativo com domínio próprio, website profissional ou sistema de gestão sob medida.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos os Serviços' },
            { id: 'comunicacao', label: 'Email Corporativo' },
            { id: 'presenca', label: 'Websites Institucionais' },
            { id: 'sistemas', label: 'Sistemas Sob Medida' },
            { id: 'gestao', label: 'Gestão Comercial & Faturação' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#235347] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-emerald-50 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#235347] via-[#8EB69B] to-[#235347] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-5">
                {/* Badge & Icon Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-[#235347] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                  {getStatusBadge(service.status)}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#235347] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="pt-2 space-y-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#235347]">
                    O que inclui:
                  </span>
                  <ul className="space-y-1.5">
                    {service.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#235347] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Box */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <strong className="text-slate-800">Ideal para:</strong> {service.idealFor}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className="w-full bg-[#235347] hover:bg-[#1a3d34] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>Solicitar Orçamento</span>
                </button>

                <button
                  onClick={() => onSelectServiceDetail(service)}
                  className="w-full bg-transparent hover:bg-emerald-50 text-slate-700 font-semibold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-[#235347]" />
                  <span>Ver Especificações Técnicas</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Email Highlight Box (User specifically mentioned "talvez email corporativo ou algo do gênero") */}
        <div className="mt-16 bg-gradient-to-r from-[#051F20] via-[#0B2B26] to-[#163832] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#8EB69B]/10 rounded-full filter blur-2xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#235347] text-[#DAF1DE] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5 text-[#8EB69B]" />
                <span>Identidade Oficial de Negócios</span>
              </div>
              
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                Ainda utiliza emails genéricos como @gmail para a sua empresa?
              </h3>

              <p className="text-sm sm:text-base text-[#DAF1DE]/80 leading-relaxed max-w-2xl">
                Destaque a sua PME com um email corporativo profissional (ex: <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">geral@suaempresa.ao</span>). A Denvitic configura o seu domínio, segurança antispam e caixas corporativas com suporte técnico local em Angola.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenQuoteModal('email-corporativo')}
                className="w-full bg-[#8EB69B] hover:bg-white text-[#051F20] font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#051F20]" />
                <span>Configurar Email Corporativo</span>
              </button>
              
              <a
                href="#sobre"
                className="w-full text-center text-xs font-medium text-[#DAF1DE] hover:text-white py-2"
              >
                Conhecer mais sobre a Denvitic →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
