import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { AngolaPrideSection } from './components/AngolaPrideSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialServiceForQuote, setInitialServiceForQuote] = useState<string | undefined>(undefined);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setInitialServiceForQuote(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setInitialServiceForQuote(undefined);
  };

  const handleOpenServiceDetail = (service: ServiceItem) => {
    setSelectedServiceDetail(service);
  };

  const handleCloseServiceDetail = () => {
    setSelectedServiceDetail(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFDFB] text-[#051F20] font-sans antialiased selection:bg-[#235347] selection:text-white">
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Services Section */}
        <ServicesSection
          onOpenQuoteModal={handleOpenQuoteModal}
          onSelectServiceDetail={handleOpenServiceDetail}
        />

        {/* About Denvitic, Mission, Vision & Values */}
        <AboutSection />

        {/* Business Model Layers */}
        <BusinessModelSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Angola Local Commitment & Pride */}
        <AngolaPrideSection />

        {/* FAQ Section */}
        <FAQSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* High Conversion Institutional CTA */}
        <CTASection onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Quote Calculator & WhatsApp Direct Redirection Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceId={initialServiceForQuote}
      />

      {/* Technical Service Specifications Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={handleCloseServiceDetail}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </div>
  );
}

