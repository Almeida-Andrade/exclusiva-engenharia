import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP } from '@/lib/site'
import { NavegacaoPrincipal } from './NavegacaoPrincipal'
import { MenuMobile } from './MenuMobile'
import estilos from './Cabecalho.module.css'

export function Cabecalho({ variante = 'claro' }: { variante?: 'claro' | 'escuro' }) {
  return (
    <header
      className={[estilos.cabecalho, variante === 'escuro' ? estilos.escuro : '']
        .filter(Boolean)
        .join(' ')}
    >
      <Link href="/" className={estilos.marca} aria-label="Exclusiva Engenharia — Início">
        <Image
          src="/marca.png"
          alt=""
          width={44}
          height={44}
          className={estilos.simbolo}
          priority
        />
        <span className={estilos.nome}>
          Exclusiva
          <small>Engenharia e Incorporação</small>
        </span>
      </Link>

      <NavegacaoPrincipal />

      <a className={estilos.acao} href={WHATSAPP} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>

      <MenuMobile whatsapp={WHATSAPP} />
    </header>
  )
}
