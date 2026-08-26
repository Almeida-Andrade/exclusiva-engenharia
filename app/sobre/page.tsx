import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Cabecalho } from '@/components/site/Cabecalho'
import { Rodape } from '@/components/site/Rodape'
import { Revelar } from '@/components/site/Revelar'
import { INCORPORACOES, obterEstatisticas } from '@/lib/obras'
import estilos from './page.module.css'

const DESCRICAO =
  'A Exclusiva Engenharia constrói no Maranhão desde 1989: obras públicas e privadas, ' +
  'incorporações próprias e energia solar. Uma empresa do Grupo Almeida Andrade.'

export const metadata: Metadata = {
  title: 'A Exclusiva',
  description: DESCRICAO,
  alternates: { canonical: '/sobre' },
  openGraph: { url: '/sobre', title: 'A Exclusiva', description: DESCRICAO },
}

const LINHA_DO_TEMPO = [
  {
    periodo: '1989',
    titulo: 'O começo',
    texto:
      'Início das atividades com obras para a Secretaria Municipal de Educação de São ' +
      'Luís, parceria que se estenderia por mais de uma década.',
  },
  {
    periodo: '1993',
    titulo: 'Avenida Litorânea',
    texto:
      'Urbanização e pavimentação de um dos cartões-postais de São Luís, ao lado de ' +
      'diversas obras para a Gerência de Infraestrutura do Maranhão.',
  },
  {
    periodo: '1996–1998',
    titulo: 'Indústria e educação',
    texto:
      'Implantação do complexo industrial da Mineradora Itamirim e construção do Centro ' +
      'Educacional Montessoriano, com 28.000 m² de área construída.',
  },
  {
    periodo: '2002–2010',
    titulo: 'Incorporação de alto padrão',
    texto:
      'Atlantic Village, Riviera Confort, Grand Trianon e San Gabriel consolidam a ' +
      'Exclusiva na incorporação residencial com recursos próprios.',
  },
  {
    periodo: '2010–2018',
    titulo: 'Varejo de grande porte',
    texto:
      'Construção das unidades do Grupo Mateus em Maiobão e Pedreiras — 12.000 m² cada ' +
      '— e de centros comerciais em toda a Grande São Luís.',
  },
  {
    periodo: '2021',
    titulo: 'Marcos em sequência',
    texto:
      'Entrega do Center Valley Shopping, maior centro comercial do Médio Mearim, do ' +
      'Edifício Galeria A e participação na construção do Hospital da Ilha.',
  },
  {
    periodo: 'Hoje',
    titulo: 'Energia e novas frentes',
    texto:
      'Usinas solares em operação em Santa Inês, parceria built-to-suit com a Selfit, ' +
      'Ville D’Or entregue e Green Fit Residence em construção.',
  },
]

export default function Sobre() {
  const estatisticas = obterEstatisticas()

  return (
    <>
      <Cabecalho />
      <main>
        <section className={estilos.abertura}>
          <div>
            <p className={estilos.kicker}>A Exclusiva</p>
            <h1 className={estilos.titulo}>
              Três décadas e meia de engenharia maranhense.
            </h1>
            <p className={estilos.texto}>
              Fundada em 1989, a Exclusiva Engenharia e Incorporação atua da obra pública
              de infraestrutura à incorporação residencial de alto padrão. São mais de{' '}
              {estatisticas.obras} obras executadas — escolas, hospitais, shoppings,
              indústrias e usinas solares — sempre com a mesma régua: planejamento,
              controle e entrega bem-feita.
            </p>
            <div className={estilos.aberturaNumeros}>
              <div>
                <b>{estatisticas.anos}+</b>
                <small>Anos de atuação</small>
              </div>
              <div>
                <b>{estatisticas.obras}+</b>
                <small>Obras executadas</small>
              </div>
              <div>
                <b>{estatisticas.metros}</b>
                <small>De área construída</small>
              </div>
            </div>
          </div>
          <div className={estilos.aberturaFoto}>
            <Image
              src="/obras/ville-dor-casa.jpg"
              alt="Residência do Condomínio Ville D’Or, entregue em 2025"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        <section className={estilos.secao} aria-labelledby="titulo-historia">
          <Revelar>
            <h2 id="titulo-historia" className={estilos.secaoTitulo}>
              Nossa trajetória
            </h2>
          </Revelar>
          <ol className={estilos.linha}>
            {LINHA_DO_TEMPO.map((etapa, i) => (
              <li key={etapa.periodo}>
                <Revelar indice={i % 3}>
                  <span className={estilos.periodo}>{etapa.periodo}</span>
                  <h3 className={estilos.etapaTitulo}>{etapa.titulo}</h3>
                  <p className={estilos.etapaTexto}>{etapa.texto}</p>
                </Revelar>
              </li>
            ))}
          </ol>
        </section>

        <section className={estilos.faixaEscura} aria-labelledby="titulo-incorporacoes">
          <div className={estilos.faixaConteudo}>
            <Revelar>
              <p className={estilos.kickerClaro}>Recursos próprios</p>
              <h2 id="titulo-incorporacoes" className={estilos.faixaTitulo}>
                Incorporações da Exclusiva
              </h2>
              <p className={estilos.faixaTexto}>
                Empreendimentos residenciais incorporados e construídos com recursos
                próprios, do projeto à entrega das chaves.
              </p>
            </Revelar>
            <Revelar>
              <ul className={estilos.incorporacoes}>
                {INCORPORACOES.map((nome) => (
                  <li key={nome}>{nome}</li>
                ))}
              </ul>
            </Revelar>
          </div>
        </section>

        <section className={estilos.secao} aria-labelledby="titulo-grupo">
          <Revelar className={estilos.grupo}>
            <div>
              <p className={estilos.kicker}>Grupo Almeida Andrade</p>
              <h2 id="titulo-grupo" className={estilos.secaoTitulo}>
                Parte de um grupo com visão de longo prazo.
              </h2>
              <p className={estilos.texto}>
                A Exclusiva é o braço de construção e incorporação do Grupo Almeida
                Andrade. A gestão do portfólio de imóveis próprios para locação fica com a
                E.G.I Empreendimentos, empresa-irmã do grupo — juntas, cobrem o ciclo
                completo: construir, incorporar e administrar.
              </p>
            </div>
            <div className={estilos.grupoAcoes}>
              <Link href="/obras" className={estilos.cta}>
                Ver portfólio de obras
              </Link>
              <Link href="/contato" className={estilos.ctaLivre}>
                Falar com a Exclusiva →
              </Link>
            </div>
          </Revelar>
        </section>
      </main>
      <Rodape />
    </>
  )
}
