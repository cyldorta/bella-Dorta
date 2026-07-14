import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '@/constants/site'

/** Saudação conforme o relógio do visitante: 5h–12h bom dia, 12h–18h boa tarde, senão boa noite. */
export function getGreeting(date: Date = new Date()): string {
  const h = date.getHours()
  if (h >= 5 && h < 12) return 'Bom dia'
  if (h >= 12 && h < 18) return 'Boa tarde'
  return 'Boa noite'
}

export function buildWhatsAppUrl(message?: string): string {
  const text = message ?? `${getGreeting()}! ${WHATSAPP_DEFAULT_MESSAGE}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function useWhatsApp() {
  const open = (message?: string) => {
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }
  return { open, url: buildWhatsAppUrl() }
}
