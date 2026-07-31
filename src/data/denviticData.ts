import { ServiceItem, ValueItem, FAQItem } from '../types';

export const DENVITIC_INFO = {
  name: 'Denvitic',
  tagline: 'Tecnologia que cresce com o seu negócio.',
  secondaryTaglines: [
    'Do site ao sistema, com a Denvitic.',
    'Feito em Angola. Pronto para crescer.',
  ],
  positioning: 'A Denvitic ajuda a sua empresa a nascer e evoluir no mundo digital.',
  summary: 'A Denvitic é uma software house angolana focada em transformar a presença e eficiência digital de pequenas e médias empresas através de websites profissionais, emails corporativos e sistemas de gestão sob medida.',
  mission: 'Entregar tecnologia de elevada qualidade a empresas em Angola, oferecendo as ferramentas certas que a sua empresa precisa hoje para crescer com segurança e eficiência.',
  vision: 'Ser a software house de referência em Angola para empresas que procuram modernização digital, credibilidade e sistemas robustos desenhados para a realidade local.',
  whatsappNumber: '244923000000', // Configurable WhatsApp
  emailCorporate: 'contacto@denvitic.com',
  emailSecondary: 'denvitic@gmail.com',
  location: 'Luanda, Angola',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'email-corporativo',
    title: 'Email Corporativo Personalizado',
    category: 'comunicacao',
    shortDesc: 'Endereços de email profissionais com o domínio da sua empresa (ex: contacto@suaempresa.ao) para transmitir máxima credibilidade aos seus clientes.',
    fullDesc: 'Dê à sua empresa uma imagem corporativa respeitável e profissional. Configuramos caixas de correio eletrónico dedicadas com domínio próprio (.ao ou .com), proteção contra spam/vírus, sincronização em telemóveis e computadores, webmail intuitivo e suporte técnico local.',
    iconName: 'Mail',
    badge: 'Essencial para PMEs',
    status: 'Disponível Já',
    features: [
      'Domínio personalizado (.ao, .co.ao, .com)',
      'Configuração DNS e registos SPF/DKIM para alta entregabilidade',
      'Webmail moderno + sincronização no Outlook/Mobile',
      'Proteção integrada contra SPAM e Phishing',
      'Suporte técnico direto em Angola'
    ],
    deliverables: [
      'Contas de email ativas e configuradas',
      'Manual de boas práticas e acessos',
      'Suporte de migração de caixas antigas'
    ],
    idealFor: 'PMEs e profissionais que pretendem substituir emails gratuitos (@gmail, @hotmail) por uma identidade oficial.',
    revenueModel: 'Ativação + Suporte Anual'
  },
  {
    id: 'websites-profissionais',
    title: 'Websites Institucionais & Landing Pages',
    category: 'presenca',
    shortDesc: 'Presença digital de alto impacto, ultra-rápida e otimizada para telemóveis, desenhada para converter visitantes em clientes reais.',
    fullDesc: 'Desenvolvemos a vitrine digital da sua empresa. Projetamos websites institucionais modernos, responsivos e seguros, integrados com botões diretos de contacto, mapa de localização, apresentação da sua equipa e otimização para motores de busca (SEO).',
    iconName: 'Globe',
    badge: 'Identidade Digital',
    status: 'Disponível Já',
    features: [
      'Design institucional exclusivo e responsivo',
      'Otimização SEO para busca no Google em Angola',
      'Integração direta com WhatsApp e Formulários',
      'Certificado de Segurança SSL (HTTPS) incluído',
      'Painel de gestão intuitivo para atualizar conteúdos'
    ],
    deliverables: [
      'Website publicado e em funcionamento',
      'Otimização de velocidade de carregamento',
      'Relatório de arranque e formação da equipa'
    ],
    idealFor: 'Empresas que precisam de uma presença digital séria, profissional e orientada a resultados.',
    revenueModel: 'Projeto Sob Medida'
  },
  {
    id: 'sistemas-sob-medida',
    title: 'Sistemas & Software Web Sob Medida',
    category: 'sistemas',
    shortDesc: 'Plataformas web e ferramentas digitais construídas exatamente para a lógica de funcionamento e processos da sua empresa.',
    fullDesc: 'Quando os softwares de prateleira não servem a realidade da sua operação, a Denvitic projeta e desenvolve sistemas sob medida. Desde portais internos de gestão até plataformas de atendimento ao cliente, entregamos código limpo, seguro e escalável.',
    iconName: 'Code',
    badge: 'Alta Performance',
    status: 'Disponível Já',
    features: [
      'Levantamento detalhado de requisitos com a sua equipa',
      'Arquitetura moderna e base de dados relacional segura',
      'Níveis de acesso personalizáveis para colaboradores',
      'Relatórios e painéis de indicadores em tempo real',
      'Código proprietário totalmente ajustado à sua PME'
    ],
    deliverables: [
      'Sistema em produção com alojamento dedicado',
      'Documentação técnica e manual do utilizador',
      'Garantia e suporte contínuo de evolução'
    ],
    idealFor: 'Empresas com processos específicos que procuram automatizar tarefas e eliminar erros manuais.',
    revenueModel: 'Projeto + Manutenção'
  },
  {
    id: 'sistemas-gestao-desktop',
    title: 'Sistemas de Gestão Comercial & Faturação',
    category: 'gestao',
    shortDesc: 'Software de faturação, controlo de stock e gestão comercial otimizado para o mercado e regras fiscais angolanas.',
    fullDesc: 'Desenvolvidos para funcionar com estabilidade total na infraestrutura das PMEs locais. Oferecem controlo rigoroso de faturação, caixa, stock de produtos e gestão de clientes.',
    iconName: 'Monitor',
    badge: 'Gestão de PME',
    status: 'Disponível Já',
    features: [
      'Emissão rápida de faturas e recibos',
      'Controlo de stock e alertas de reposição',
      'Gestão de clientes, fornecedores e contas a receber',
      'Modo offline resiliente para falhas de rede',
      'Atualizações anuais de compliance e melhorias'
    ],
    deliverables: [
      'Instalação no parque informático da empresa',
      'Formação operacional da equipa de vendas',
      'Assistência técnica remota e presencial'
    ],
    idealFor: 'Lojas, armazéns, prestadores de serviços e comércio geral em Angola.',
    revenueModel: 'Licença & Assistência'
  }
];

export const CORE_VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Pragmatismo com Ambição',
    subtitle: 'Soluções reais primeiro',
    description: 'Resolvemos o problema real e imediato do seu negócio hoje (site, email, sistema pontual), sem perder de vista o produto maior e a evolução tecnológica que vem a seguir.',
    icon: 'Target'
  },
  {
    number: '02',
    title: 'Confiança de Longo Prazo',
    subtitle: 'Parceiro para todas as fases',
    description: 'O cliente que contrata um site hoje com a Denvitic é o mesmo que continuará a utilizar os nossos sistemas de gestão e plataformas SaaS amanhã.',
    icon: 'ShieldCheck'
  },
  {
    number: '03',
    title: 'Feito em Angola, para Angola',
    subtitle: 'Conhecimento da realidade local',
    description: 'Compreensão profunda dos desafios e limitações do mercado nacional — infraestrutura de rede, custos operacionais e orçamentos das PMEs angolanas.',
    icon: 'MapPin'
  },
  {
    number: '04',
    title: 'Transparência Técnica',
    subtitle: 'Clareza sem rodeios',
    description: 'Oferecemos total clareza sobre onde os seus dados ficam hospedados, prazos reais de entrega e custos envolvidos, com linguagem direta e honesta.',
    icon: 'Cpu'
  },
  {
    number: '05',
    title: 'Evolução Constante',
    subtitle: 'Movimento em direção ao futuro',
    description: 'Não ficamos estagnados no serviço sob medida; caminhamos continuamente em direção ao desenvolvimento de produtos próprios para transformar o mercado.',
    icon: 'TrendingUp'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    category: 'Geral',
    question: 'O que diferencia a Denvitic de outras empresas de software?',
    answer: 'A Denvitic distingue-se pelo seu pragmatismo com ambição e conhecimento da realidade angolana. Não prometemos o impossível: começamos por resolver o que a sua empresa precisa hoje (site, email corporativo, sistema sob medida) e acompanhamos o seu crescimento com soluções tecnológicas escaláveis.'
  },
  {
    id: '2',
    category: 'Serviços',
    question: 'Como funciona a criação do Email Corporativo?',
    answer: 'Nós tratamos de todo o processo técnico: desde o registo ou associação do seu domínio (.ao ou .com), configuração das contas corporativas (ex: contacto@suaempresa.ao), até à configuração nos telemóveis e computadores da sua equipa com proteção antispam ativa.'
  },
  {
    id: '3',
    category: 'Orçamento',
    question: 'Como posso solicitar um orçamento rápido?',
    answer: 'Pode utilizar o nosso simulador interativo nesta página clicando no botão "Solicitar Orçamento". Ao selecionar os serviços pretendidos e o seu contacto, será redirecionado para o nosso WhatsApp com uma mensagem pré-formatada para atendimento imediato.'
  },
  {
    id: '4',
    category: 'Infraestrutura',
    question: 'Onde ficam alojados os dados e os websites?',
    answer: 'Trabalhamos com servidores de elevada disponibilidade e segurança com backups diários. Mantemos transparência técnica total sobre a localização da hospedagem, garantindo que o seu negócio esteja sempre online e seguro.'
  },
  {
    id: '5',
    category: 'Suporte',
    question: 'Como funciona o suporte técnico após a entrega?',
    answer: 'Todos os projetos da Denvitic incluem período de garantia e suporte pós-entrega. Disponibilizamos assistência técnica remota e presencial em Luanda para garantir que a sua operação nunca pare.'
  }
];

export const COMPANY_STATS = [
  { value: '100%', label: 'Foco na Realidade Angolana' },
  { value: '24/7', label: 'Estabilidade & Disponibilidade' },
  { value: '3', label: 'Camadas de Soluções (Sob medida, Gestão, SaaS)' },
  { value: '0', label: 'Jargões desnecessários: Comunicação Direta' }
];
