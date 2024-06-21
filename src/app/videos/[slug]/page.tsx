'use client'
import { AllVideos } from "@/video/qualivideos"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import './style.scss'
import Link from "next/link"
import { FaPlay } from "react-icons/fa"

export default function Page() {
  
  const params = useParams()
  const [videoInformation, setVideoInformation] = useState<any>()
  const [urlVideo, setUrlVideo] = useState<any>()
  const format = params.slug.toString()
  const getVideo = () => {
    const video = AllVideos
    for(let i in video) {
      for(let j in video[i].videos) {
        if(video[i].videos[j].id == format) {
          setVideoInformation(video[i].videos[j])
          setUrlVideo(video[i].videos[j].link)
        }
      }
    }
  }

  useEffect(() => {
    getVideo()
  }, [params.slug])

  return (
    <div className="videoContainer">
      <div className="container">
        <div className="videoEspace">
          <h1 className="title">{videoInformation?.title}</h1>
          <p className="desc">{videoInformation?.desc}</p>
          {videoInformation?.link && (
            <Link href={videoInformation?.link} className="link">
              Assistir <FaPlay />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
