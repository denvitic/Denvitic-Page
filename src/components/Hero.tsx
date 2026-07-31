import React from 'react';
import { DENVITIC_INFO } from '../data/denviticData';
import { ArrowRight, MessageSquare, CheckCircle2, Globe, Mail, Monitor, Cloud, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAFDFB] via-[#FAFDFB] to-[#F1F8F4]">
      {/* Background Decorative Grids & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#DAF1DE] rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8EB69B]/30 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#235347_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Category / Origin Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#235347] bg-emerald-50 rounded-md border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-[#235347] animate-pulse"></span>
              <span>SOFTWARE HOUSE ANGOLANA</span>
              <span className="text-[#235347]/40">|</span>
              <span>PRESENÇA & GESTÃO DIGITAL</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
              Tecnologia que <span className="text-[#235347] relative underline decoration-emerald-200 decoration-wavy decoration-2">cresce</span> com o seu negócio.
            </h1>

            {/* Tagline Subtext */}
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed">
              {DENVITIC_INFO.positioning}{' '}
              <span className="font-medium text-slate-800">
                Começamos pelo que a sua empresa precisa hoje — site, email corporativo e sistema sob medida — e evoluímos juntos.
              </span>
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                'Email corporativo com domínio profissional',
                'Websites institucionais de alta conversão',
                'Sistemas sob medida para a sua PME',
                'Transparência técnica e suporte local'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#235347] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="group inline-flex items-center justify-center gap-3 bg-[#235347] hover:bg-[#1a3d34] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-emerald-900/10 cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>Solicitar Orçamento via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-xs"
              >
                <span>Explorar Serviços</span>
              </a>
            </div>

            {/* Trust Footer note */}
            <div className="pt-2 flex items-center gap-6 text-xs text-[#163832]/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#235347]" />
                <span>Atendimento rápido via WhatsApp</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#235347]/30"></div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#235347]" />
                <span>Feito em Angola, para Angola</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive Cardly-Style Visual Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Container - Floating Glass Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-[#235347]/15 relative z-20 space-y-6">
                
                {/* Header of Card */}
                <div className="flex items-center justify-between border-b border-[#235347]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">denvitic.ao/camadas</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-[#DAF1DE] text-[#235347] px-2.5 py-1 rounded-full">
                    Soluções PMEs
                  </span>
                </div>

                {/* Layer 1: Ponto de Partida (Sob Medida) */}
                <div 
                  onClick={() => onOpenQuoteModal('email-corporativo')}
                  className="group bg-[#FAFDFB] hover:bg-[#DAF1DE]/30 border border-[#235347]/20 rounded-xl p-4 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#235347] text-white">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#051F20]">Ponto de Partida</h4>
                        <p className="text-xs text-[#163832]">Site & Email Corporativo</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-[#235347] text-white px-2 py-0.5 rounded-md">
                      Disponível
                    </span>
                  </div>
                  <p className="text-xs text-[#0B2B26]/80 line-clamp-2">
                    Crie a identidade oficial da sua empresa com email personalizado (contacto@suaempresa.ao) e website moderno.
                  </p>
                </div>

                {/* Layer 2: Sistemas de Gestão */}
                <div 
                  onClick={() => onOpenQuoteModal('sistemas-gestao-desktop')}
                  className="group bg-[#FAFDFB] hover:bg-[#DAF1DE]/30 border border-[#235347]/20 rounded-xl p-4 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#163832] text-[#8EB69B]">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#051F20]">Gestão de PME</h4>
                        <p className="text-xs text-[#163832]">Faturação & Stock Desktop</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-[#8EB69B] text-[#051F20] px-2 py-0.5 rounded-md">
                      Anual
                    </span>
                  </div>
                  <p className="text-xs text-[#0B2B26]/80 line-clamp-2">
                    Softwares comerciais para controlo de inventário e vendas com estabilidade para a infraestrutura local.
                  </p>
                </div>

                {/* Layer 3: Sistemas Web Sob Medida */}
                <div 
                  onClick={() => onOpenQuoteModal('sistemas-sob-medida')}
                  className="group bg-[#FAFDFB] hover:bg-[#DAF1DE]/30 border border-[#235347]/20 rounded-xl p-4 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#0B2B26] text-[#DAF1DE]">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#051F20]">Sistemas Web Sob Medida</h4>
                        <p className="text-xs text-[#163832]">Plataformas & Automação</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-[#235347] text-white px-2 py-0.5 rounded-md">
                      Disponível
                    </span>
                  </div>
                  <p className="text-xs text-[#0B2B26]/80 line-clamp-2">
                    Softwares web e sistemas de gestão desenhados exclusivamente para a rotina e regras do seu negócio.
                  </p>
                </div>

                {/* Interactive Action Prompt */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="w-full bg-[#DAF1DE]/60 hover:bg-[#DAF1DE] text-[#235347] font-semibold text-xs py-2.5 rounded-xl border border-[#235347]/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Simular Orçamento Personalizado</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Stack Backdrop Card Offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#235347]/10 rounded-2xl -z-10 border border-[#235347]/20"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#8EB69B]/10 rounded-2xl -z-20"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
