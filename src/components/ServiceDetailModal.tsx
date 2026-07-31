import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, MessageSquare, ArrowRight, ShieldCheck, Mail, Globe, Code, Monitor, Cloud, Sparkles } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail':
        return <Mail className="w-8 h-8 text-white" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-white" />;
      case 'Code':
        return <Code className="w-8 h-8 text-white" />;
      case 'Monitor':
        return <Monitor className="w-8 h-8 text-white" />;
      case 'Cloud':
        return <Cloud className="w-8 h-8 text-white" />;
      default:
        return <Code className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#051F20]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-[#235347]/20 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#051F20] via-[#0B2B26] to-[#163832] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#235347] rounded-2xl shadow-sm">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-[#DAF1DE] text-[#235347] px-2.5 py-0.5 rounded">
                {service.badge}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-[#DAF1DE]/90 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#235347]">
              Descrição Completa da Solução:
            </h4>
            <p className="text-sm text-[#0B2B26]/85 leading-relaxed bg-[#FAFDFB] p-4 rounded-xl border border-[#235347]/15">
              {service.fullDesc}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#235347]">
              Funcionalidades & Especificações Técnicas:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#051F20] bg-white p-3 rounded-xl border border-[#235347]/10">
                  <Check className="w-4 h-4 text-[#235347] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Ideal For */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#235347]">
                Entregáveis ao Cliente:
              </h4>
              <ul className="space-y-1.5">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="text-xs text-[#0B2B26] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#235347]"></span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#235347]">
                Modelo de Receita & Cobrança:
              </h4>
              <div className="p-3 bg-[#DAF1DE]/40 rounded-xl border border-[#235347]/15 text-xs font-medium text-[#051F20]">
                {service.revenueModel}
              </div>
            </div>
          </div>

          {/* CTA Footer inside Modal */}
          <div className="pt-4 border-t border-[#235347]/10 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(service.id);
              }}
              className="w-full sm:w-auto flex-1 bg-[#235347] hover:bg-[#0B2B26] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#8EB69B]" />
              <span>Solicitar Orçamento para este Serviço</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-[#051F20] font-semibold text-xs py-3.5 px-5 rounded-xl transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
