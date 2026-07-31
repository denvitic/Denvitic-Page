// Initialize Lucide icons on load
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Backdrop click listener for modal
  const modal = document.getElementById('quote-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeQuoteModal();
      }
    });
  }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Service Filter Tabs
function filterServices(category) {
  const tabs = document.querySelectorAll('.service-tab');
  const cards = document.querySelectorAll('.service-card');

  tabs.forEach(tab => {
    if (tab.dataset.category === category) {
      tab.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
      tab.classList.add('bg-[#235347]', 'text-white', 'border-[#235347]');
    } else {
      tab.classList.remove('bg-[#235347]', 'text-white', 'border-[#235347]');
      tab.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
    }
  });

  cards.forEach(card => {
    if (category === 'todos' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// FAQ Accordion Toggle
function toggleFaq(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);

  if (!answer) return;

  const isHidden = answer.classList.contains('hidden');

  // Close all other answers
  document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(ic => {
    ic.style.transform = 'rotate(0deg)';
  });

  if (isHidden) {
    answer.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// Select Service Chip inside Quote Modal
function selectModalService(val) {
  const select = document.getElementById('modal-service');
  if (select) {
    select.value = val;
  }

  // Highlight selected chip
  const chips = document.querySelectorAll('.service-chip');
  chips.forEach(chip => {
    if (chip.dataset.value === val) {
      chip.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-200');
      chip.classList.add('bg-[#235347]', 'text-white', 'border-[#235347]');
    } else {
      chip.classList.remove('bg-[#235347]', 'text-white', 'border-[#235347]');
      chip.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200');
    }
  });
}

// Quote Modal Handlers
function openQuoteModal(serviceId = 'email-corporativo') {
  const modal = document.getElementById('quote-modal');
  const card = modal ? modal.querySelector('.modal-content') : null;

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('modal-backdrop-anim');
    if (card) {
      card.classList.add('modal-card-anim');
    }
    document.body.style.overflow = 'hidden';
  }

  selectModalService(serviceId);
}

function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('modal-backdrop-anim');
    document.body.style.overflow = 'auto';
  }
}

// Handle Quote Form Submission
function submitQuote(type) {
  const serviceSelect = document.getElementById('modal-service');
  const nameInput = document.getElementById('modal-name');
  const emailInput = document.getElementById('modal-email');
  const phoneInput = document.getElementById('modal-phone');
  const companyInput = document.getElementById('modal-company');
  const messageInput = document.getElementById('modal-message');

  const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Serviço Geral';
  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const company = companyInput ? companyInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  if (!name || (!phone && !email)) {
    alert('Por favor, preencha o seu nome e pelo menos um contacto (Telefone/WhatsApp ou Email).');
    return;
  }

  if (type === 'whatsapp') {
    const text = `Olá Denvitic! Gostaria de solicitar um orçamento:\n\n` +
      `*Serviço:* ${service}\n` +
      `*Nome:* ${name}\n` +
      `*Empresa:* ${company || 'Não especificada'}\n` +
      `*Contacto:* ${phone || email}\n` +
      `*Detalhes:* ${message || 'Sem detalhes adicionais'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/244923000000?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  } else if (type === 'email') {
    const subject = encodeURIComponent(`Solicitação de Orçamento - ${service} (${name})`);
    const body = encodeURIComponent(
      `Solicitação de Orçamento - Denvitic\n\n` +
      `Serviço de Interesse: ${service}\n` +
      `Nome: ${name}\n` +
      `Empresa: ${company || 'Não informada'}\n` +
      `Telefone/WhatsApp: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Mensagem:\n${message}`
    );
    window.location.href = `mailto:geral@denvitic.com?subject=${subject}&body=${body}`;
  }

  closeQuoteModal();
}

// Handle Direct Contact Form Submission
function submitDirectContact(type) {
  const nameInput = document.getElementById('contact-name');
  const phoneInput = document.getElementById('contact-phone');
  const emailInput = document.getElementById('contact-email');
  const subjectSelect = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const subjectVal = subjectSelect ? subjectSelect.value : 'Contacto Geral';
  const message = messageInput ? messageInput.value.trim() : '';

  if (!name || (!phone && !email)) {
    alert('Por favor, indique o seu nome e pelo menos um contacto (Telefone/WhatsApp ou Email).');
    return;
  }

  if (type === 'whatsapp') {
    const text = `Olá Denvitic! Gostaria de entrar em contacto:\n\n` +
      `*Assunto:* ${subjectVal}\n` +
      `*Nome:* ${name}\n` +
      `*Contacto:* ${phone || email}\n` +
      `*Mensagem:* ${message || 'Gostaria de obter mais informações.'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/244923000000?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  } else if (type === 'email') {
    const subject = encodeURIComponent(`Contacto Website Denvitic - ${subjectVal} (${name})`);
    const body = encodeURIComponent(
      `Contacto do Website - Denvitic\n\n` +
      `Assunto: ${subjectVal}\n` +
      `Nome: ${name}\n` +
      `Telefone/WhatsApp: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Mensagem:\n${message}`
    );
    window.location.href = `mailto:geral@denvitic.com?subject=${subject}&body=${body}`;
  }
}

