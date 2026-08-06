export interface ServiceItem {
  id: string;
  title: string;
  category: 'comunicacao' | 'presenca' | 'sistemas' | 'gestao' | 'sob_medida' | 'saas';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  status: 'Disponível Já' | 'Em Expansão' | 'Fase Futura';
  features: string[];
  deliverables: string[];
  idealFor: string;
  revenueModel: string;
}

export interface ValueItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuoteRequestState {
  serviceTypes: string[];
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  urgency: 'baixa' | 'normal' | 'alta';
  details: string;
}
