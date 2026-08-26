export interface ItemNavegacao {
  href: string
  rotulo: string
}

export const ITENS_NAVEGACAO: ItemNavegacao[] = [
  { href: '/', rotulo: 'Início' },
  { href: '/obras', rotulo: 'Obras' },
  { href: '/sobre', rotulo: 'A Exclusiva' },
  { href: '/contato', rotulo: 'Contato' },
]

export function itemAtivo(caminho: string): string | null {
  if (caminho === '/obras' || caminho.startsWith('/obras/')) {
    return '/obras'
  }

  const item = ITENS_NAVEGACAO.find((i) => i.href === caminho)
  return item?.href ?? null
}
