export type Segmento =
  | 'comercial'
  | 'residencial'
  | 'educacional'
  | 'saude'
  | 'industrial'
  | 'infraestrutura'
  | 'energia'

export interface InfoSegmento {
  segmento: Segmento
  rotulo: string
  descricao: string
}

export const SEGMENTOS: InfoSegmento[] = [
  {
    segmento: 'comercial',
    rotulo: 'Comercial e varejo',
    descricao: 'Shoppings, centros comerciais, lojas e edifícios corporativos.',
  },
  {
    segmento: 'residencial',
    rotulo: 'Residencial',
    descricao: 'Incorporações próprias, de kitnets a condomínios de alto padrão.',
  },
  {
    segmento: 'educacional',
    rotulo: 'Educacional',
    descricao: 'Escolas, colégios, bibliotecas e complexos esportivos.',
  },
  {
    segmento: 'saude',
    rotulo: 'Saúde',
    descricao: 'Hospitais, maternidades e instalações hospitalares especializadas.',
  },
  {
    segmento: 'industrial',
    rotulo: 'Industrial',
    descricao: 'Plantas industriais, galpões e usinas de concreto.',
  },
  {
    segmento: 'infraestrutura',
    rotulo: 'Infraestrutura',
    descricao: 'Urbanização, pavimentação e obras públicas de grande porte.',
  },
  {
    segmento: 'energia',
    rotulo: 'Energia',
    descricao: 'Usinas solares e investimento em fontes renováveis.',
  },
]

export interface Obra {
  nome: string
  resumo: string
  local?: string
  cidade: string
  /** Rótulo de entrega exibido no card: ano, período ou situação. */
  entrega: string
  /** Ano de referência para ordenação (mais recente primeiro). */
  ordem: number
  area?: string
  segmento: Segmento
  imagem?: string
  destaque?: boolean
}

export const OBRAS: Obra[] = [
  {
    nome: 'Green Fit Residence',
    resumo: 'Condomínio residencial em construção, incorporação com recursos próprios.',
    cidade: 'São Luís (MA)',
    entrega: 'Em construção',
    ordem: 2027,
    segmento: 'residencial',
  },
  {
    nome: 'Selfit Academias — 2ª unidade',
    resumo:
      'Segundo empreendimento built-to-suit da parceria com a rede Selfit, guiado por inteligência imobiliária e localização estratégica.',
    cidade: 'São Luís (MA)',
    entrega: 'Em construção',
    ordem: 2026,
    segmento: 'comercial',
    imagem: '/obras/selfit-interior.jpg',
  },
  {
    nome: 'Condomínio Residencial Ville D’Or',
    resumo: '21 residências duplex de alto padrão, incorporação própria.',
    local: 'Jardim Eldorado, Turu',
    cidade: 'São Luís (MA)',
    entrega: 'Maio de 2025',
    ordem: 2025,
    segmento: 'residencial',
    imagem: '/obras/ville-dor-casa.jpg',
    destaque: true,
  },
  {
    nome: 'Usinas Solares Canis 1, 2, 3 e 5',
    resumo:
      '4 usinas solares em operação com 8.640 painéis fotovoltaicos e capacidade de geração de 6,2 MWh — energia para mais de 300 residências.',
    cidade: 'Santa Inês (MA)',
    entrega: 'Em operação',
    ordem: 2024,
    segmento: 'energia',
    imagem: '/obras/usinas-canis.jpg',
    destaque: true,
  },
  {
    nome: 'Selfit Academias — 1ª unidade',
    resumo:
      'Empreendimento built-to-suit para a rede nacional Selfit, parceria estratégica de longo prazo.',
    cidade: 'São Luís (MA)',
    entrega: 'Entregue',
    ordem: 2023,
    segmento: 'comercial',
    imagem: '/obras/selfit-fachada.jpg',
    destaque: true,
  },
  {
    nome: 'Hospital da Ilha',
    resumo:
      'Participação na construção do centro médico de referência do Governo do Maranhão, executada durante a fase final da pandemia de Covid-19.',
    cidade: 'São Luís (MA)',
    entrega: 'Entregue',
    ordem: 2022,
    segmento: 'saude',
    imagem: '/obras/hospital-da-ilha.jpg',
    destaque: true,
  },
  {
    nome: 'Center Valley Shopping',
    resumo:
      'Maior centro comercial do Médio Mearim: 68 lojas, megalojas, cinema, parque infantil, academia e praça de alimentação.',
    cidade: 'Pedreiras (MA)',
    entrega: 'Novembro de 2021',
    ordem: 2021,
    area: '6.880 m²',
    segmento: 'comercial',
    destaque: true,
  },
  {
    nome: 'Edifício Comercial e Empresarial Galeria A',
    resumo: '6 lojas térreas e coberturas corporativas em rooftop.',
    local: 'Av. dos Sambaquis, Calhau',
    cidade: 'São Luís (MA)',
    entrega: 'Outubro de 2021',
    ordem: 2021,
    area: '3.305 m²',
    segmento: 'comercial',
  },
  {
    nome: 'Supermercado Mateus Pedreiras',
    resumo:
      'Empreendimento comercial de grande porte com 12.000 m² de salão de vendas e depósito, em terreno de 23.000 m².',
    cidade: 'Pedreiras (MA)',
    entrega: 'Abril de 2018',
    ordem: 2018,
    area: '12.000 m²',
    segmento: 'comercial',
  },
  {
    nome: 'Residencial Búzios',
    resumo: 'Edifício residencial com 12 apartamentos de 50 m², incorporação própria.',
    local: 'Sítio Leal, Filipinho',
    cidade: 'São Luís (MA)',
    entrega: 'Junho de 2017',
    ordem: 2017,
    segmento: 'residencial',
  },
  {
    nome: 'Centro Comercial Ana Diná',
    resumo: '13 lojas distribuídas em três pavimentos.',
    local: 'Outeiro',
    cidade: 'São José de Ribamar (MA)',
    entrega: 'Junho de 2013',
    ordem: 2013,
    area: '2.635 m²',
    segmento: 'comercial',
  },
  {
    nome: 'Centro Comercial Olgamérica',
    resumo: 'Centro comercial no Anjo da Guarda.',
    local: 'Av. dos Portugueses, Anjo da Guarda',
    cidade: 'São Luís (MA)',
    entrega: 'Junho de 2013',
    ordem: 2013,
    area: '1.516 m²',
    segmento: 'comercial',
  },
  {
    nome: 'Nova Sede CEI-COC',
    resumo: 'Construção da unidade do Centro de Educação Internacional — Colégio Osvaldo Cruz.',
    local: 'Av. dos Sambaquis, Calhau',
    cidade: 'São Luís (MA)',
    entrega: 'Dezembro de 2012',
    ordem: 2012,
    area: '1.800 m²',
    segmento: 'educacional',
  },
  {
    nome: 'Nova Sede Yázigi Internacional',
    resumo: 'Construção de sede educacional.',
    local: 'Av. Sambaquis, Calhau',
    cidade: 'São Luís (MA)',
    entrega: 'Julho de 2012',
    ordem: 2012,
    area: '550 m²',
    segmento: 'educacional',
  },
  {
    nome: 'Loja Richards',
    resumo: 'Implantação das reformas do novo projeto da loja, com serviços técnicos especializados.',
    cidade: 'São Luís (MA)',
    entrega: 'Dezembro de 2011',
    ordem: 2011,
    segmento: 'comercial',
  },
  {
    nome: 'Loja Yoggi',
    resumo: 'Adequações e serviços técnicos especializados.',
    cidade: 'São Luís (MA)',
    entrega: 'Dezembro de 2011',
    ordem: 2011,
    segmento: 'comercial',
  },
  {
    nome: 'Prédio Comercial São Luís Rei de França',
    resumo: 'Edifício comercial no Turu.',
    local: 'Av. São Luís Rei de França, Turu',
    cidade: 'São Luís (MA)',
    entrega: 'Junho de 2011',
    ordem: 2011,
    area: '1.344 m²',
    segmento: 'comercial',
  },
  {
    nome: 'Centro Comercial Pátio Brasil e Edifício Guarujá',
    resumo: '11 lojas térreas de 40 m² e edifício com 21 apartamentos de 30 m².',
    local: 'Av. Brasil, Olho d’Água',
    cidade: 'São Luís (MA)',
    entrega: '2011',
    ordem: 2011,
    segmento: 'comercial',
  },
  {
    nome: 'Edifício San Gabriel',
    resumo: '48 apartamentos de médio-alto padrão, incorporação própria.',
    local: 'Ponta d’Areia',
    cidade: 'São Luís (MA)',
    entrega: 'Julho de 2010',
    ordem: 2010,
    area: '6.022 m²',
    segmento: 'residencial',
    imagem: '/obras/san-gabriel.jpg',
  },
  {
    nome: 'Supermercado Mateus Maiobão',
    resumo: 'Empreendimento comercial atacadista e varejista do Grupo Mateus.',
    local: 'Rod. MA-053, Tijupá Queimado',
    cidade: 'São José de Ribamar (MA)',
    entrega: 'Outubro de 2010',
    ordem: 2010,
    area: '12.000 m²',
    segmento: 'comercial',
  },
  {
    nome: 'Centro Comercial Luminy Plaza',
    resumo: 'Centro comercial com 8 lojas de aproximadamente 100 m² cada, recursos próprios.',
    local: 'Av. dos Holandeses',
    cidade: 'São Luís (MA)',
    entrega: 'Dezembro de 2008',
    ordem: 2008,
    segmento: 'comercial',
  },
  {
    nome: 'Edifício Angra dos Reis',
    resumo: 'Residencial com 16 unidades, incorporação própria.',
    local: 'Sítio Leal, Filipinho',
    cidade: 'São Luís (MA)',
    entrega: 'Junho de 2008',
    ordem: 2008,
    segmento: 'residencial',
  },
  {
    nome: 'Edifício Residencial Parati',
    resumo: 'Residencial com 14 unidades, incorporação própria.',
    local: 'Sítio Leal, Filipinho',
    cidade: 'São Luís (MA)',
    entrega: 'Julho de 2008',
    ordem: 2008,
    segmento: 'residencial',
  },
  {
    nome: 'Hospital da Mulher — Ampliação',
    resumo:
      'Reforma, ampliação e adequação hospitalar para a Prefeitura de São Luís, via concorrência pública.',
    local: 'Av. dos Portugueses, Vila Bacanga',
    cidade: 'São Luís (MA)',
    entrega: '2007',
    ordem: 2007,
    area: '6.137 m²',
    segmento: 'saude',
  },
  {
    nome: 'Gás Hospitalar — Hospital da Mulher',
    resumo: 'Instalação de sistemas de gás hospitalar, contratada por concorrência pública.',
    local: 'Av. dos Portugueses, Vila Bacanga',
    cidade: 'São Luís (MA)',
    entrega: '2007',
    ordem: 2007,
    segmento: 'saude',
  },
  {
    nome: 'Maternidade Rural — Projetos',
    resumo: 'Elaboração de projeto arquitetônico e complementares para a Prefeitura de São Luís.',
    local: 'BR-135, Km 09, Maracanã',
    cidade: 'São Luís (MA)',
    entrega: '2007',
    ordem: 2007,
    segmento: 'saude',
  },
  {
    nome: 'Centro de Capacitação do Olho d’Água',
    resumo: 'Reforma e recuperação de instalações educacionais para a Prefeitura de São Luís.',
    local: 'Av. Rei de França, Olho d’Água',
    cidade: 'São Luís (MA)',
    entrega: '2007',
    ordem: 2007,
    segmento: 'educacional',
  },
  {
    nome: 'Edifício Francisco de Sousa Coelho',
    resumo: 'Edifício comercial para escritório de advocacia.',
    local: 'Av. Sambaquis, Calhau',
    cidade: 'São Luís (MA)',
    entrega: '2007',
    ordem: 2007,
    area: '1.080 m²',
    segmento: 'comercial',
  },
  {
    nome: 'CEI-COC — Ampliação',
    resumo:
      'Ampliação e adequação educacional: salas de aula, acessibilidade, laboratórios, quadra e vestiários.',
    local: 'Av. dos Holandeses, Calhau',
    cidade: 'São Luís (MA)',
    entrega: '2007',
    ordem: 2007,
    area: '1.800 m²',
    segmento: 'educacional',
  },
  {
    nome: 'Usina de Concreto Supermix',
    resumo: 'Construção de base estrutural, rampas, silos, tanques e sistema de filtragem.',
    local: 'Av. General Artur Carvalho',
    cidade: 'São José de Ribamar (MA)',
    entrega: '2007',
    ordem: 2007,
    area: '2.600 m²',
    segmento: 'industrial',
  },
  {
    nome: 'Condomínio Residencial Grand Trianon',
    resumo: '12 apartamentos de cerca de 300 m², alto padrão, incorporação própria.',
    local: 'Av. dos Holandeses, Olho d’Água',
    cidade: 'São Luís (MA)',
    entrega: 'Março de 2005',
    ordem: 2005,
    area: '6.778 m²',
    segmento: 'residencial',
    imagem: '/obras/grand-trianon.jpg',
  },
  {
    nome: 'Edifício Riviera Confort',
    resumo: '36 apartamentos de médio-alto padrão, incorporação própria.',
    local: 'Calhau',
    cidade: 'São Luís (MA)',
    entrega: 'Novembro de 2004',
    ordem: 2004,
    area: '4.376 m²',
    segmento: 'residencial',
    imagem: '/obras/riviera-confort.jpg',
  },
  {
    nome: 'Condomínio Residencial Atlantic Village',
    resumo: '15 residências duplex de alto padrão, incorporação própria.',
    local: 'Parque Atlântico, Olho d’Água',
    cidade: 'São Luís (MA)',
    entrega: 'Abril de 2002',
    ordem: 2002,
    area: '7.120 m²',
    segmento: 'residencial',
    imagem: '/obras/atlantic-village.jpg',
  },
  {
    nome: 'Edifício-Sede Yázigi Internexus',
    resumo:
      'Construção de 6.370 m² do edifício-sede da Sociedade Civil Maranhão Línguas, obra contratada por concorrência.',
    local: 'Av. dos Holandeses, Calhau',
    cidade: 'São Luís (MA)',
    entrega: '2001',
    ordem: 2001,
    area: '6.370 m²',
    segmento: 'educacional',
  },
  {
    nome: 'Pousada AIMCA',
    resumo: 'Construção da pousada da Associação das Irmãs Missionárias Capuchinhas.',
    local: 'Araçagi',
    cidade: 'São Luís (MA)',
    entrega: '2000',
    ordem: 2000,
    segmento: 'comercial',
  },
  {
    nome: 'Complexo Esportivo Colégio Batista',
    resumo:
      'Piscina semiolímpica e complexo esportivo do Colégio Batista Daniel de La Touche.',
    local: 'João Paulo',
    cidade: 'São Luís (MA)',
    entrega: '1999',
    ordem: 1999,
    segmento: 'educacional',
  },
  {
    nome: 'Casas Residenciais Jardim Primavera',
    resumo: 'Construção de casas residenciais, incorporação própria.',
    local: 'Cohama',
    cidade: 'São Luís (MA)',
    entrega: '1999',
    ordem: 1999,
    segmento: 'residencial',
  },
  {
    nome: 'Prédio da Inteligue',
    resumo: 'Construção de edifício comercial.',
    local: 'Monte Castelo',
    cidade: 'São Luís (MA)',
    entrega: '1999',
    ordem: 1999,
    segmento: 'comercial',
  },
  {
    nome: 'Centro Educacional Montessoriano',
    resumo: 'Construção do edifício com 28.000 m² de área construída.',
    local: 'Renascença',
    cidade: 'São Luís (MA)',
    entrega: '1998',
    ordem: 1998,
    area: '28.000 m²',
    segmento: 'educacional',
    destaque: true,
  },
  {
    nome: 'Colégio Divina Pastora',
    resumo: 'Construção de ginásio, biblioteca e laboratórios para as Irmãs Capuchinhas.',
    local: 'Anil',
    cidade: 'São Luís (MA)',
    entrega: '1998',
    ordem: 1998,
    segmento: 'educacional',
  },
  {
    nome: 'Galpões Editora FTD',
    resumo: 'Construção de galpões logísticos.',
    local: 'Monte Castelo',
    cidade: 'São Luís (MA)',
    entrega: '1998',
    ordem: 1998,
    segmento: 'industrial',
  },
  {
    nome: 'Sede Administrativa Editora FTD',
    resumo: 'Construção da sede administrativa.',
    local: 'Monte Castelo',
    cidade: 'São Luís (MA)',
    entrega: '1997',
    ordem: 1997,
    segmento: 'comercial',
  },
  {
    nome: 'Complexo Industrial Mineradora Itamirim',
    resumo:
      'Implantação de planta industrial de britagem, terraplanagem, construções civis, pavimentações e rede de alta tensão.',
    cidade: 'Maranhão',
    entrega: '1996',
    ordem: 1996,
    segmento: 'industrial',
  },
  {
    nome: 'Urbanização e Pavimentação da Avenida Litorânea',
    resumo: 'Obra de urbanização e pavimentação de um dos principais eixos viários da capital.',
    cidade: 'São Luís (MA)',
    entrega: '1993',
    ordem: 1993,
    segmento: 'infraestrutura',
  },
  {
    nome: 'Gerência de Infraestrutura do Maranhão',
    resumo: 'Diversas obras executadas para a Gerência de Infraestrutura do Estado.',
    cidade: 'Maranhão',
    entrega: '1991–1995',
    ordem: 1995,
    segmento: 'infraestrutura',
  },
  {
    nome: 'Secretaria Municipal de Educação de São Luís',
    resumo: 'Diversas obras educacionais executadas ao longo de mais de uma década.',
    cidade: 'São Luís (MA)',
    entrega: '1989–2002',
    ordem: 2002,
    segmento: 'educacional',
  },
]

export const ANO_FUNDACAO = 1989

export const INCORPORACOES = [
  'Edifício San Gabriel',
  'Condomínio Residencial Grand Trianon',
  'Edifício Riviera Confort',
  'Condomínio Residencial Ville D’Or',
  'Condomínio Residencial Atlantic Village',
  'Green Fit Residence (em construção)',
  'Jardim Primavera',
  'Residencial Búzios',
  'Residencial Paraty',
  'Residencial Angra dos Reis',
  'Residencial Guarujá',
  'Ipanema (projeto)',
]

export const REFERENCIAS_NACIONAIS = [
  'WEG do Brasil',
  'Grupo Mateus',
  'Selfit Academias',
  'Caixa Econômica Federal',
  'Pague Menos',
  'Deca',
  'Supermix Concreto',
  'Eliane Revestimentos',
  'Votorantim Cimentos',
]

export function listarObras(segmento?: Segmento): Obra[] {
  const obras = segmento ? OBRAS.filter((o) => o.segmento === segmento) : OBRAS
  return [...obras].sort((a, b) => b.ordem - a.ordem)
}

export function obterEstatisticas() {
  return {
    anos: new Date().getFullYear() - ANO_FUNDACAO,
    obras: OBRAS.length,
    metros: '100 mil m²',
    energia: '6,2 MWh',
  }
}
