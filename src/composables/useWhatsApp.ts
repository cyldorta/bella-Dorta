import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '@/constants/site'

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function useWhatsApp() {
  const open = (message?: string) => {
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }
  return { open, url: buildWhatsAppUrl() }
}
