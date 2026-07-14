import { images } from './images'

export interface Differential {
  icon: string
  title: string
  text: string
}

export const differentials: Differential[] = [
  {
    icon: 'heart',
    title: 'Atendimento humanizado',
    text: 'Cada paciente é acolhida com escuta atenta e cuidado individual, do primeiro contato ao acompanhamento.',
  },
  {
    icon: 'spark',
    title: 'Técnica avançada',
    text: 'Protocolos modernos e equipamentos de precisão para tratar microvasos com máxima segurança.',
  },
  {
    icon: 'leaf',
    title: 'Resultados naturais',
    text: 'Técnicas refinadas que respeitam a sua pele e devolvem leveza às pernas de forma harmoniosa.',
  },
  {
    icon: 'shield',
    title: 'Segurança em primeiro lugar',
    text: 'Avaliação criteriosa e biossegurança rigorosa em todas as etapas do procedimento.',
  },
  {
    icon: 'feather',
    title: 'Minimamente invasivo',
    text: 'Procedimentos delicados, com pouco desconforto e recuperação rápida no seu dia a dia.',
  },
  {
    icon: 'compass',
    title: 'Avaliação personalizada',
    text: 'Um plano de tratamento único, desenhado a partir das suas necessidades e objetivos.',
  },
]

export interface ProcessStep {
  number: string
  title: string
  text: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Avaliação',
    text: 'Conversamos sobre o seu histórico e analisamos os microvasos para entender o seu caso em profundidade.',
  },
  {
    number: '02',
    title: 'Planejamento',
    text: 'Desenhamos um protocolo personalizado, com expectativas claras e seguras para o seu tratamento.',
  },
  {
    number: '03',
    title: 'Tratamento',
    text: 'Aplicação minimamente invasiva, com técnica precisa, conforto e total atenção a cada detalhe.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    text: 'Seguimos juntas na evolução dos resultados, com orientações e o cuidado contínuo que você merece.',
  },
]

export interface Benefit {
  title: string
  text: string
}

export const benefits: Benefit[] = [
  {
    title: 'Pernas mais bonitas',
    text: 'Microvasos atenuados e uma aparência mais uniforme e saudável.',
  },
  {
    title: 'Autoestima renovada',
    text: 'A confiança de mostrar suas pernas sem desconforto ou receios.',
  },
  {
    title: 'Mais conforto',
    text: 'Sensação de leveza e bem-estar no seu dia a dia.',
  },
  {
    title: 'Resultados visíveis',
    text: 'Evolução perceptível ao longo das sessões, de forma gradual e natural.',
  },
  {
    title: 'Recuperação rápida',
    text: 'Procedimentos delicados que respeitam a sua rotina.',
  },
]

export interface GalleryItem {
  src: string
  alt: string
  span?: 'tall' | 'wide'
}

export const galleryItems: GalleryItem[] = [
  { src: images.portraitSyringe2, alt: 'Dra. Izabella Dorta segurando aplicador para tratamento de microvasos', span: 'tall' },
  { src: images.portraitDesk, alt: 'Dra. Izabella Dorta em seu consultório de estética' },
  { src: images.portraitSmile, alt: 'Dra. Izabella Dorta sorrindo no consultório' },
  { src: images.portraitChin, alt: 'Retrato profissional da Dra. Izabella Dorta', span: 'wide' },
  { src: images.portraitSyringe, alt: 'Detalhe do procedimento minimamente invasivo de microvasos' },
  { src: images.portraitSerene, alt: 'Dra. Izabella Dorta, biomédica esteta' },
]

export interface Testimonial {
  name: string
  detail: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Mariana L.',
    detail: 'Tratamento de microvasos',
    text: 'Me senti acolhida do início ao fim. Os vasinhos que me incomodavam há anos sumiram e hoje uso vestido sem pensar duas vezes.',
    rating: 5,
  },
  {
    name: 'Patrícia M.',
    detail: 'Avaliação personalizada',
    text: 'A Dra. Izabella explica cada etapa com muita calma e segurança. Resultado natural, exatamente como eu queria.',
    rating: 5,
  },
  {
    name: 'Camila R.',
    detail: 'Acompanhamento completo',
    text: 'Atendimento impecável e humanizado. A recuperação foi tranquila e a evolução nas pernas me devolveu a autoestima.',
    rating: 5,
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'O tratamento de microvasos dói?',
    answer:
      'O procedimento é minimamente invasivo e bem tolerado. A maioria das pacientes relata apenas um leve desconforto momentâneo, sempre com todo o cuidado para o seu conforto.',
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer:
      'Varia conforme cada caso. Na avaliação, definimos um plano personalizado e estimamos o número de sessões de acordo com a quantidade e o tipo de microvasos.',
  },
  {
    question: 'Como é a recuperação?',
    answer:
      'A recuperação costuma ser rápida, permitindo retomar a rotina logo após o procedimento, seguindo as orientações de cuidados pós-tratamento.',
  },
  {
    question: 'Qual a melhor época para tratar?',
    answer:
      'É possível tratar durante todo o ano. Como o tratamento é gradual, iniciar com antecedência ajuda a aproveitar os resultados na estação que você desejar.',
  },
  {
    question: 'Como faço para agendar minha avaliação?',
    answer:
      'É simples: basta tocar em qualquer botão de WhatsApp desta página. Será um prazer entender o seu caso e cuidar de você.',
  },
]
