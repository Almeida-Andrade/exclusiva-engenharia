import type { Metadata } from 'next'
import Link from 'next/link'
import { Cabecalho } from '@/components/site/Cabecalho'
import { Rodape } from '@/components/site/Rodape'
import { Revelar } from '@/components/site/Revelar'
import { CardObra } from '@/components/site/CardObra'
import { listarObras, SEGMENTOS, type Segmento } from '@/lib/obras'
import estilos from './page.module.css'

const DESCRICAO =
  'Portfólio de obras da Exclusiva Engenharia: shoppings, hospitais, escolas, ' +
  'residenciais, indústrias, infraestrutura e usinas solares no Maranhão desde 1989.'

export const metadata: Metadata = {
  title: 'Obras',
  description: DESCRICAO,
  alternates: { canonical: '/obras' },
  openGraph: { url: '/obras', title: 'Obras', description: DESCRICAO },
}

function ehSegmento(valor: string | undefined): valor is Segmento {
  return SEGMENTOS.some((s) => s.segmento === valor)
}

export default async function Obras({
  searchParams,
}: {
  searchParams: Promise<{ segmento?: string }>
}) {
  const { segmento } = await searchParams
  const ativo = ehSegmento(segmento) ? segmento : undefined
  const obras = listarObras(ativo)
  const infoAtivo = SEGMENTOS.find((s) => s.segmento === ativo)

  return (
    <>
      <Cabecalho />
      <main className={estilos.pagina}>
        <p className={estilos.kicker}>Portfólio</p>
        <h1 className={estilos.titulo}>
          {infoAtivo ? infoAtivo.rotulo : 'Obras que contam a nossa história.'}
        </h1>
        <p className={estilos.texto}>
          {infoAtivo
            ? infoAtivo.descricao
            : 'Mais de três décadas de construção no Maranhão — da obra pública de ' +
              'infraestrutura à incorporação de alto padrão.'}
        </p>

        <nav className={estilos.filtros} aria-label="Filtrar por segmento">
          <Link
            href="/obras"
            className={estilos.filtro}
            data-ativo={!ativo}
            aria-current={!ativo ? 'true' : undefined}
          >
            Todas
          </Link>
          {SEGMENTOS.map((s) => (
            <Link
              key={s.segmento}
              href={`/obras?segmento=${s.segmento}`}
              className={estilos.filtro}
              data-ativo={ativo === s.segmento}
              aria-current={ativo === s.segmento ? 'true' : undefined}
            >
              {s.rotulo}
            </Link>
          ))}
        </nav>

        <p className={estilos.contagem} aria-live="polite">
          {obras.length} {obras.length === 1 ? 'obra' : 'obras'}
        </p>

        <div className={estilos.grade}>
          {obras.map((o, i) => (
            <Revelar key={o.nome} indice={i % 3} esticar>
              <CardObra obra={o} />
            </Revelar>
          ))}
        </div>
      </main>
      <Rodape />
    </>
  )
}
