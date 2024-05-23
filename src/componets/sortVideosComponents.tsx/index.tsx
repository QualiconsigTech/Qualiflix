'use client'
import { useEffect, useState } from "react"

export const SortVideosComponents = (videos:any) => {
  const [getVideo, setGetVideo] = useState<any[]>()

  const validateHowTypeIs = async () => {
    const tipoIsPodcast =  videos.video.tipo == 'PodCast' ? setGetVideo(videos.video.videos) : null
    const tipoIsEvent =  videos.video.tipo == 'Evento' ? setGetVideo(videos.video.videos) : null
    const tipoIsTutorial =  videos.video.tipo == 'Tutorial' ? setGetVideo(videos.video.videos) : null
    const tipoIsEntrevista =  videos.video.tipo == 'Entrevista' ? setGetVideo(videos.video.videos) : null
    const tipoIsFesta =  videos.video.tipo == 'Festa' ? setGetVideo(videos.video.videos) : null
  }
  console.log(getVideo)
  useEffect(() => {
    validateHowTypeIs()
  },[videos])

  return (
    <div>
      
      {getVideo?.map((video) => (
        <div>
          {video.title}
        </div>
      ))}
    </div>
  )
}