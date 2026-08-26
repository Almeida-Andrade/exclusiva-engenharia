import Link from 'next/link'
import { ITENS_NAVEGACAO } from '@/lib/navegacao'
import { EMAIL, TELEFONE_1, TELEFONE_2, WHATSAPP } from '@/lib/site'
import { IconeEmail, IconeWhatsApp } from './Icones'
import estilos from './Rodape.module.css'

const REDES = [
  { nome: 'WhatsApp', href: WHATSAPP, Icone: IconeWhatsApp },
  { nome: 'E-mail', href: `mailto:${EMAIL}`, Icone: IconeEmail },
]

export function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.faixa}>
        <div>
          <p className={estilos.nome}>
            Exclusiva
            <small>Engenharia e Incorporação</small>
          </p>
          <p className={estilos.lema}>
            Construindo o Maranhão desde 1989. Uma empresa do Grupo Almeida Andrade.
          </p>
        </div>

        <div className={estilos.coluna}>
          <span className={estilos.rotulo}>Contato</span>

          <div className={estilos.redes}>
            {REDES.map((rede) => (
              <a
                key={rede.nome}
                className={estilos.rede}
                href={rede.href}
                aria-label={rede.nome}
                title={rede.nome}
                {...(rede.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <rede.Icone className={estilos.icone} />
              </a>
            ))}
          </div>

          <span className={estilos.sede}>
            {TELEFONE_1} · {TELEFONE_2}
            <br />
            {EMAIL}
          </span>
        </div>

        <div className={estilos.coluna}>
          <span className={estilos.rotulo}>Navegação</span>
          {ITENS_NAVEGACAO.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.rotulo}
            </Link>
          ))}
        </div>
      </div>

      <div className={estilos.base}>
        <span>© {new Date().getFullYear()} Exclusiva Engenharia e Incorporação</span>
      </div>
    </footer>
  )
}
