import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Cabecalho } from '@/components/site/Cabecalho'
import { Rodape } from '@/components/site/Rodape'
import { Revelar } from '@/components/site/Revelar'
import { CardObra } from '@/components/site/CardObra'
import { CarrosselMarcas } from '@/components/site/CarrosselMarcas'
import { DadosEstruturados } from '@/components/site/DadosEstruturados'
import { listarObras, obterEstatisticas, SEGMENTOS } from '@/lib/obras'
import { EMAIL, WHATSAPP } from '@/lib/site'
import estilos from './page.module.css'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
}

export default function Home() {
  const estatisticas = obterEstatisticas()
  const obras = listarObras()

  const emDestaque = obras
    .filter((o) => o.destaque && o.imagem && o.segmento !== 'energia')
    .slice(0, 3)

  const segmentos = SEGMENTOS.map((s) => ({
    ...s,
    quantidade: obras.filter((o) => o.segmento === s.segmento).length,
  })).filter((s) => s.quantidade > 0)

  return (
    <>
      <div className={estilos.topo}>
        <Cabecalho variante="escuro" />

        <section className={estilos.hero}>
          <Image
            src="/hero-obra.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className={estilos.heroFoto}
          />
          <div className={estilos.heroTexto}>
            <p className={estilos.kicker}>São Luís · Maranhão · Desde 1989</p>
            <h1 className={estilos.titulo}>
              Engenharia que constrói
              <br />
              <em>o Maranhão</em> há mais de
              <br />
              três décadas.
            </h1>
            <div className={estilos.filete} />
            <div className={estilos.heroAcoes}>
              <Link href="/obras" className={estilos.cta}>
                Ver portfólio de obras
              </Link>
              <Link href="/contato" className={estilos.ctaLivre}>
                Fale com a Exclusiva →
              </Link>
            </div>
          </div>
        </section>

        <section className={estilos.numeros} aria-label="A Exclusiva em números">
          <div>
            <b>{estatisticas.anos}+</b>
            <small>Anos de engenharia</small>
          </div>
          <div>
            <b>{estatisticas.obras}+</b>
            <small>Obras executadas</small>
          </div>
          <div>
            <b>{estatisticas.metros}</b>
            <small>De área construída</small>
          </div>
          <div>
            <b>{estatisticas.energia}</b>
            <small>De potência solar instalada</small>
          </div>
        </section>
      </div>

      <main>
        <div className={estilos.conteudo}>
          <section className={estilos.secao} aria-labelledby="titulo-segmentos">
            <Revelar>
              <h2 id="titulo-segmentos" className={estilos.secaoTitulo}>
                O que construímos
              </h2>
              <p className={estilos.secaoTexto}>
                Do edifício educacional de 28 mil m² às usinas solares em operação, a
                Exclusiva atua em todo o ciclo da construção — obra pública e privada,
                incorporação própria e built-to-suit.
              </p>
            </Revelar>
            <div className={estilos.segmentos}>
              {segmentos.map((s, i) => (
                <Revelar key={s.segmento} indice={i} esticar>
                  <Link href={`/obras?segmento=${s.segmento}`} className={estilos.segmento}>
                    <span className={estilos.segmentoConta}>
                      {s.quantidade} {s.quantidade === 1 ? 'obra' : 'obras'}
                    </span>
                    <h3 className={estilos.segmentoNome}>{s.rotulo}</h3>
                    <p className={estilos.segmentoTexto}>{s.descricao}</p>
                    <span className={estilos.segmentoSeta} aria-hidden>
                      →
                    </span>
                  </Link>
                </Revelar>
              ))}
            </div>
          </section>

          <section className={estilos.secao} aria-labelledby="titulo-destaque">
            <Revelar>
              <div className={estilos.secaoTopo}>
                <h2 id="titulo-destaque" className={estilos.secaoTitulo}>
                  Obras em destaque
                </h2>
                <Link href="/obras" className={estilos.verTodas}>
                  Ver todas →
                </Link>
              </div>
            </Revelar>
            <div className={estilos.grade}>
              {emDestaque.map((o, i) => (
                <Revelar key={o.nome} indice={i} esticar>
                  <CardObra obra={o} />
                </Revelar>
              ))}
            </div>
          </section>
        </div>

        <section className={estilos.energia} aria-labelledby="titulo-energia">
          <div className={estilos.energiaFoto}>
            <Image
              src="/obras/usinas-canis.jpg"
              alt="Vista aérea das usinas solares Canis, em Santa Inês"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <Revelar className={estilos.energiaTexto}>
            <p className={estilos.kickerClaro}>Santa Inês · Maranhão</p>
            <h2 id="titulo-energia" className={estilos.energiaTitulo}>
              Usinas Solares Canis
            </h2>
            <p className={estilos.energiaLinha}>
              Investimento estratégico do Grupo Almeida Andrade em fontes renováveis,
              implantado pela Exclusiva Engenharia com visão de longo prazo, inovação e
              responsabilidade ambiental.
            </p>

            <div className={estilos.energiaNumeros}>
              <div>
                <b>4</b>
                <small>Usinas em operação</small>
              </div>
              <div>
                <b>8.640</b>
                <small>Painéis fotovoltaicos</small>
              </div>
              <div>
                <b>6,2 MW</b>
                <small>Potência instalada</small>
              </div>
              <div>
                <b>300+</b>
                <small>Residências abastecidas</small>
              </div>
            </div>
          </Revelar>
        </section>

        <div className={estilos.conteudo}>
          <section className={estilos.secao} aria-labelledby="titulo-clientes">
            <Revelar>
              <h2 id="titulo-clientes" className={estilos.secaoTitulo}>
                Quem confia na Exclusiva
              </h2>
              <p className={estilos.secaoTexto}>
                Redes nacionais, indústrias e instituições financeiras constam entre as
                referências comerciais da empresa.
              </p>
            </Revelar>

            <Revelar className={estilos.marcas}>
              <CarrosselMarcas />
            </Revelar>
          </section>

          <section className={estilos.secao} aria-labelledby="titulo-grupo">
            <Revelar className={estilos.grupo}>
              <div>
                <p className={estilos.kickerEscuro}>Grupo Almeida Andrade</p>
                <h2 id="titulo-grupo" className={estilos.grupoTitulo}>
                  Uma empresa de grupo sólido.
                </h2>
                <p className={estilos.grupoTexto}>
                  A Exclusiva Engenharia integra o Grupo Almeida Andrade ao lado da E.G.I
                  Empreendimentos, que administra o portfólio próprio de imóveis para
                  locação. Construção, incorporação e gestão patrimonial sob o mesmo
                  compromisso: entregar bem-feito.
                </p>
              </div>
              <div className={estilos.grupoAcoes}>
                <Link href="/sobre" className={estilos.ctaEscuro}>
                  Conheça a nossa história
                </Link>
              </div>
            </Revelar>
          </section>
        </div>
      </main>

      <Rodape />

      <DadosEstruturados
        dados={{
          '@context': 'https://schema.org',
          '@type': 'GeneralContractor',
          name: 'Exclusiva Engenharia e Incorporação',
          telephone: '+55-98-98481-2793',
          email: EMAIL,
          foundingDate: '1989',
          areaServed: ['São Luís', 'São José de Ribamar', 'Pedreiras', 'Santa Inês'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'São Luís',
            addressRegion: 'MA',
            addressCountry: 'BR',
          },
          parentOrganization: {
            '@type': 'Organization',
            name: 'Grupo Almeida Andrade',
          },
          sameAs: [WHATSAPP],
        }}
      />
    </>
  )
}
