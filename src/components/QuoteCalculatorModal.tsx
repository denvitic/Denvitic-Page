import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, Check, Sparkles, Building2, User, Mail, Phone, Clock, FileText } from 'lucide-react';
import { SERVICES, DENVITIC_INFO } from '../data/denviticData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'alta' | 'planeamento'>('normal');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServices([initialServiceId]);
    } else if (selectedServices.length === 0) {
      setSelectedServices(['email-corporativo', 'websites-profissionais']);
    }
  }, [initialServiceId, isOpen]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((item) => item !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getServiceNames = () => {
    return selectedServices
      .map((id) => SERVICES.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(', ');
  };

  // Build formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const serviceTitles = getServiceNames();
    
    let msg = `*SOLICITAÇÃO DE ORÇAMENTO — DENVITIC*\n\n`;
    msg += `*Serviços de Interesse:* ${serviceTitles || 'Consulta Geral'}\n`;
    
    if (companyName.trim()) {
      msg += `*Empresa:* ${companyName.trim()}\n`;
    }
    if (contactName.trim()) {
      msg += `*Contacto:* ${contactName.trim()}\n`;
    }
    if (contactEmail.trim()) {
      msg += `*Email:* ${contactEmail.trim()}\n`;
    }
    if (contactPhone.trim()) {
      msg += `*Telefone:* ${contactPhone.trim()}\n`;
    }
    
    msg += `*Prazo/Urgência:* ${
      urgency === 'alta' ? 'Alta (Imediato)' : urgency === 'normal' ? 'Normal (1-2 semanas)' : 'Planeamento Futuro'
    }\n`;
    
    if (notes.trim()) {
      msg += `*Detalhes do Projeto:* ${notes.trim()}\n`;
    }

    msg += `\n_Enviado através do website oficial da Denvitic (denvitic.ao)_`;
    
    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${DENVITIC_INFO.whatsappNumber}?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleQuickDirectWhatsApp = () => {
    const quickMsg = encodeURIComponent(
      `Olá Denvitic! Gostaria de falar com a vossa equipa sobre a solicitação de um orçamento para a minha empresa.`
    );
    window.open(`https://wa.me/${DENVITIC_INFO.whatsappNumber}?text=${quickMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#051F20]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-[#235347]/20 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#051F20] to-[#163832] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-[#235347] text-[#DAF1DE] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8EB69B]" />
            <span>Atendimento Imediato</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
            Solicitar Orçamento Denvitic
          </h3>
          <p className="text-xs sm:text-sm text-[#DAF1DE]/80 mt-1">
            Selecione os serviços pretendidos. O pedido será encaminhado diretamente para o nosso WhatsApp corporativo.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Step 1: Select Services */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#235347] block">
              1. Selecione as Soluções Pretendidas (Pode escolher várias):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES.map((serv) => {
                const isSelected = selectedServices.includes(serv.id);
                return (
                  <div
                    key={serv.id}
                    onClick={() => toggleService(serv.id)}
                    className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#DAF1DE]/50 border-[#235347] text-[#051F20]'
                        : 'bg-[#FAFDFB] border-[#235347]/15 hover:border-[#235347]/40 text-[#051F20]/80'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{serv.title}</div>
                      <div className="text-[10px] text-[#235347] font-semibold">{serv.badge}</div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'bg-[#235347] border-[#235347] text-white'
                          : 'bg-white border-[#235347]/30'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Company & Contact Information */}
          <div className="space-y-4 pt-2 border-t border-[#235347]/10">
            <label className="text-xs font-bold uppercase tracking-wider text-[#235347] block">
              2. Dados da Sua Empresa (Opcional, para agilizar o atendimento):
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-[#051F20] mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#235347]" />
                  <span>Nome da Empresa</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Minha Empresa Lda"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#235347]/20 focus:border-[#235347] focus:ring-2 focus:ring-[#235347]/20 text-sm outline-hidden bg-[#FAFDFB]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#051F20] mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#235347]" />
                  <span>Seu Nome / Cargo</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: João Silva (Director)"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#235347]/20 focus:border-[#235347] focus:ring-2 focus:ring-[#235347]/20 text-sm outline-hidden bg-[#FAFDFB]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#051F20] mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#235347]" />
                  <span>Email de Contacto</span>
                </label>
                <input
                  type="email"
                  placeholder="Ex: contacto@empresa.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#235347]/20 focus:border-[#235347] focus:ring-2 focus:ring-[#235347]/20 text-sm outline-hidden bg-[#FAFDFB]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#051F20] mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#235347]" />
                  <span>Telefone / WhatsApp</span>
                </label>
                <input
                  type="tel"
                  placeholder="Ex: +244 923 000 000"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#235347]/20 focus:border-[#235347] focus:ring-2 focus:ring-[#235347]/20 text-sm outline-hidden bg-[#FAFDFB]"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Urgency & Notes */}
          <div className="space-y-4 pt-2 border-t border-[#235347]/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-medium text-[#051F20] mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#235347]" />
                  <span>Urgência do Projeto</span>
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#235347]/20 text-sm outline-hidden bg-[#FAFDFB]"
                >
                  <option value="normal">Normal (1 a 2 semanas)</option>
                  <option value="alta">Alta (Prioritário / Imediato)</option>
                  <option value="planeamento">Planeamento Futuro</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-[#051F20] mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#235347]" />
                  <span>Observações Adicionais</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Precisamos de 5 caixas de email e site com 4 páginas..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#235347]/20 focus:border-[#235347] text-sm outline-hidden bg-[#FAFDFB]"
                />
              </div>
            </div>
          </div>

          {/* Message Preview Box */}
          <div className="bg-[#FAFDFB] p-4 rounded-xl border border-[#235347]/20 text-xs space-y-1">
            <div className="font-bold text-[#235347] flex items-center justify-between">
              <span>Mensagem Formatada para WhatsApp:</span>
              <span className="text-[10px] bg-[#DAF1DE] text-[#235347] px-2 py-0.5 rounded font-mono">Auto-Gerada</span>
            </div>
            <p className="text-[#051F20]/80 italic line-clamp-3">
              "{getServiceNames()} | {companyName ? `Empresa: ${companyName}` : 'Empresa não indicada'} | Prazo: {urgency}"
            </p>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 bg-[#235347] hover:bg-[#0B2B26] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98"
            >
              <Send className="w-4 h-4 text-[#8EB69B]" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleQuickDirectWhatsApp}
              className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs py-3.5 px-4 rounded-xl border border-emerald-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Abrir WhatsApp Direto</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
