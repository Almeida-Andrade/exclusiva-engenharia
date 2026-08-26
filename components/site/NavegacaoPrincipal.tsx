'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ITENS_NAVEGACAO, itemAtivo } from '@/lib/navegacao'
import estilos from './NavegacaoPrincipal.module.css'

export function NavegacaoPrincipal() {
  const caminho = usePathname()
  const ativo = itemAtivo(caminho)

  return (
    <nav className={estilos.navegacao} aria-label="Principal">
      {ITENS_NAVEGACAO.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          data-ativo={ativo === item.href}
          aria-current={ativo === item.href ? 'page' : undefined}
          className={estilos.item}
        >
          {item.rotulo}
        </Link>
      ))}
    </nav>
  )
}
