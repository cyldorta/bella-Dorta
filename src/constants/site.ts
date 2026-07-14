// ── Brand & contact ───────────────────────────────────────────
// IMPORTANT: replace WHATSAPP_NUMBER with the real number (country + DDD).
// Format: digits only, e.g. 5585999999999  (55 = Brasil, 85 = DDD).
export const WHATSAPP_NUMBER = '5579999091819'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá, Dra. Izabella! Vim pela landing page e gostaria de agendar uma avaliação para tratamento de microvasos.'

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
