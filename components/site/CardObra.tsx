import Image from 'next/image'
import type { Obra } from '@/lib/obras'
import { SEGMENTOS } from '@/lib/obras'
import estilos from './CardObra.module.css'

function rotuloSegmento(obra: Obra): string {
  return SEGMENTOS.find((s) => s.segmento === obra.segmento)?.rotulo ?? obra.segmento
}

export function CardObra({ obra }: { obra: Obra }) {
  return (
    <article className={estilos.card}>
      {obra.imagem ? (
        <div className={estilos.foto}>
          <Image
            src={obra.imagem}
            alt={obra.nome}
            fill
            sizes="(max-width: 860px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : (
        <div className={estilos.capa}>
          <span className={estilos.ano}>{obra.entrega}</span>
        </div>
      )}

      <div className={estilos.corpo}>
        <span className={estilos.meta}>
          {rotuloSegmento(obra)}
          <em>{obra.entrega}</em>
        </span>
        <h3 className={estilos.nome}>{obra.nome}</h3>
        <p className={estilos.resumo}>{obra.resumo}</p>
        <p className={estilos.local}>
          {obra.local ? `${obra.local} · ` : ''}
          {obra.cidade}
          {obra.area ? ` · ${obra.area}` : ''}
        </p>
      </div>
    </article>
  )
}
