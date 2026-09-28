export const URL_SITE = process.env.NEXT_PUBLIC_URL_SITE
  ? process.env.NEXT_PUBLIC_URL_SITE
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'

export const WHATSAPP = 'https://wa.me/5598984812793'
export const EMAIL = 'exclusivaeng@grupoaandrade.com.br'
export const TELEFONE = '(98) 98481-2793'
