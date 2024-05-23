

export const AllVideos = [
  {tipo: 'Evento',
    videos: [ 
      {title: 'Qualividas', tipo: 'Evento', desc: 'UM EVENTO MUITO DOIDO'}
    ]  
  },
  {tipo: 'Festa', 
    videos: [
      {title: 'Qualispeed', tipo: 'Festa', desc: 'Muito foda'},
      {title: 'Qualispeed', tipo: 'Festa', desc: 'Muito foda'},
    ]
  },
  {tipo: 'Tutorial', 
    videos: [
      {title: 'QualiEnsina', tipo: 'Tutorial', desc: 'Muito ensino'},   
      {title: 'QualiEnsina', tipo: 'Tutorial', desc: 'Muito ensino'},    
    ]
  },
  {tipo: 'PodCast', 
    videos: [
      {title: 'QualiFala', tipo: 'PodCast', desc: 'Muita conversa'},
      {title: 'QualiFala', tipo: 'PodCast', desc: 'Muita conversa'},
      {title: 'QualiBocaAberta', tipo: 'PodCast', desc: 'Muita conversa'}
    ]
  },
  {tipo: 'Entrevista', 
    videos: [
      {title: 'QualiPerguntas', tipo: 'Entrevista', desc: 'Muita Pergunta'},
      {title: 'QualiPerguntas', tipo: 'Entrevista', desc: 'Muita Pergunta'},
    ]
  }
]


export const Events = () => {
  let eventsVideos = []
  AllVideos.map((video:any) => {
    if(video.tipo === 'Evento') {
      eventsVideos.push(video)
    }
    return eventsVideos
  })
}

export const Party = () => {
  let partyVideos = []
  AllVideos.map((video:any) => {
    if(video.tipo === 'Evento') {
      partyVideos.push(video)
    }
    return partyVideos
  })
}

export const tutorial = () => {
  let tutorialVideos = []
  AllVideos.map((video:any) => {
    if(video.tipo === 'Evento') {
      tutorialVideos.push(video)
    }
    return tutorialVideos
  })
}

export const podcast = () => {
  let podCastVideos = []
  AllVideos.map((video:any) => {
    if(video.tipo === 'Evento') {
      podCastVideos.push(video)
    }
    return podCastVideos
  })
}

export const entrevista = () => {
  let entrevistaVideos = []
  AllVideos.map((video:any) => {
    if(video.tipo === 'Evento') {
      entrevistaVideos.push(video)
    }
    return entrevistaVideos
  })
}