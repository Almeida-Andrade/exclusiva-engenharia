export const URL_SITE = process.env.NEXT_PUBLIC_URL_SITE
  ? process.env.NEXT_PUBLIC_URL_SITE
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'

export const WHATSAPP = 'https://wa.me/5598984812793'
export const WHATSAPP_2 = 'https://wa.me/5598984812788'
export const EMAIL = 'exclusivaeng@grupoaandrade.com.br'
export const TELEFONE_1 = '(98) 98481-2793'
export const TELEFONE_2 = '(98) 98481-2788'
