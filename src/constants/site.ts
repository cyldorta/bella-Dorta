// ── Brand & contact ───────────────────────────────────────────
// Número da Infinity (salão onde a Izabella atende): +55 79 7400-2734
// Format: digits only (55 = Brasil, 79 = DDD).
export const WHATSAPP_NUMBER = '557974002734'

// A saudação (bom dia/boa tarde/boa noite) é adicionada dinamicamente
// em useWhatsApp.ts, conforme o horário do visitante.
export const WHATSAPP_DEFAULT_MESSAGE =
  'Vim através da landing page da Dra. Izabella e gostaria de mais informações sobre o tratamento de microvasos.'

export const brand = {
  name: 'Dra. Izabella Dorta',
  shortName: 'Izabella Dorta',
  tagline: 'Tratamento para Microvasos',
  role: 'Biomédica Esteta',
  email: 'contato@draizabelladorta.com.br',
  instagram: 'https://instagram.com',
  instagramHandle: '@draizabelladorta',
  address: 'Atendimento com hora marcada',
} as const

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Dúvidas', href: '#faq' },
]
