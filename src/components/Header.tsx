import React, { useState, useEffect } from 'react';
import { DenviticLogo } from './DenviticLogo';
import { MessageSquare, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { DENVITIC_INFO } from '../data/denviticData';

interface HeaderProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Trabalhamos', href: '#metodologia' },
    { name: 'Sobre Nós', href: '#sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="focus:outline-hidden rounded-lg">
          <DenviticLogo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#235347] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => onOpenQuoteModal()}
            className="group relative inline-flex items-center gap-2 bg-[#235347] hover:bg-[#1a3d34] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-98"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#235347] text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5"
            aria-label="Solicitar Orçamento"
          >
            <MessageSquare className="w-4 h-4 text-[#8EB69B]" />
            <span className="sr-only sm:not-sr-only">Orçamento</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#051F20] hover:text-[#235347] focus:outline-hidden rounded-lg hover:bg-[#DAF1DE]/50"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFDFB] border-b border-[#235347]/15 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#051F20] hover:text-[#235347] hover:bg-[#DAF1DE]/40 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#235347]/10 flex flex-col gap-2.5">
            <div className="text-xs text-[#163832] px-3 font-medium">
              Email corporativo: <span className="text-[#235347] font-semibold">{DENVITIC_INFO.emailCorporate}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#235347] text-white py-3 px-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#8EB69B]" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
