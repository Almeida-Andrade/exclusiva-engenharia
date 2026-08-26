import type { Metadata } from 'next'
import { Cabecalho } from '@/components/site/Cabecalho'
import { Rodape } from '@/components/site/Rodape'
import {
  EMAIL,
  TELEFONE_1,
  TELEFONE_2,
  WHATSAPP,
  WHATSAPP_2,
} from '@/lib/site'
import estilos from './page.module.css'

const DESCRICAO =
  'Fale com a Exclusiva Engenharia por WhatsApp, telefone ou e-mail. ' +
  'Construção, incorporação e obras de grande porte no Maranhão.'

export const metadata: Metadata = {
  title: 'Contato',
  description: DESCRICAO,
  alternates: { canonical: '/contato' },
  openGraph: { url: '/contato', title: 'Contato', description: DESCRICAO },
}

export default function Contato() {
  return (
    <>
      <Cabecalho />
      <main className={estilos.pagina}>
        <p className={estilos.kicker}>Contato</p>
        <h1 className={estilos.titulo}>Vamos conversar sobre a sua obra.</h1>
        <p className={estilos.texto}>
          Da avaliação do terreno à entrega das chaves — conte com uma equipe que
          constrói no Maranhão desde 1989.
        </p>

        <div className={estilos.canais}>
          <a
            className={estilos.canal}
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={estilos.rotulo}>WhatsApp</span>
            <b>{TELEFONE_1}</b>
            <span className={estilos.dica}>Resposta mais rápida</span>
          </a>

          <a
            className={estilos.canal}
            href={WHATSAPP_2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={estilos.rotulo}>WhatsApp / Telefone</span>
            <b>{TELEFONE_2}</b>
            <span className={estilos.dica}>Canal alternativo</span>
          </a>

          <a className={estilos.canal} href={`mailto:${EMAIL}`}>
            <span className={estilos.rotulo}>E-mail</span>
            <b className={estilos.valorLongo}>{EMAIL}</b>
            <span className={estilos.dica}>Para propostas e documentos</span>
          </a>
        </div>

        <div className={estilos.nota}>
          <span className={estilos.rotulo}>Grupo Almeida Andrade</span>
          <p>
            A Exclusiva Engenharia e Incorporação é uma empresa do Grupo Almeida
            Andrade, com atuação em São Luís e em todo o Maranhão.
          </p>
        </div>
      </main>
      <Rodape />
    </>
  )
}
