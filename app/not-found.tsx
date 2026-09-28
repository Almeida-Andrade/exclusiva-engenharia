import type { Metadata } from 'next'
import Link from 'next/link'
import { Cabecalho } from '@/components/site/Cabecalho'
import { Rodape } from '@/components/site/Rodape'
import { ITENS_NAVEGACAO } from '@/lib/navegacao'
import estilos from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
}

export default function NaoEncontrada() {
  return (
    <>
      <Cabecalho />
      <main className={estilos.pagina}>
        <div>
          <p className={estilos.kicker}>Erro 404</p>
          <h1 className={estilos.titulo}>Esta página não foi encontrada.</h1>
          <p className={estilos.texto}>
            O endereço pode ter mudado ou não existe mais. Siga por um dos caminhos
            abaixo ou fale direto com a nossa equipe.
          </p>

          <div className={estilos.acoes}>
            <Link href="/" className={estilos.cta}>
              Voltar ao início
            </Link>
            <Link href="/contato" className={estilos.ctaLivre}>
              Fale com a Exclusiva →
            </Link>
          </div>

          <nav className={estilos.atalhos} aria-label="Páginas do site">
            <span className={estilos.rotulo}>Páginas do site</span>
            <ul>
              {ITENS_NAVEGACAO.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.rotulo}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={estilos.bloco} aria-hidden>
          <span className={estilos.numero}>404</span>
          <span className={estilos.legenda}>Construindo o Maranhão desde 1989</span>
        </div>
      </main>
      <Rodape />
    </>
  )
}
