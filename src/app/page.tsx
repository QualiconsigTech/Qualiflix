'use client'
import { useEffect, useState } from 'react';
import  {AllVideos}  from '@/video/qualivideos';
import  '../styles/style.scss'
import { SortVideosComponents } from '@/componets/sortVideosComponents.tsx';

export default function Home() {
  const [allVideos, setAllvideos] = useState<any[]>()

  const receivedVideosFromQuali = () => {
    const receivedVideo = AllVideos
    setAllvideos(receivedVideo)
  }

  useEffect(() => {
    receivedVideosFromQuali()
  },[])

  return (
    <div className='teste'>
     {allVideos?.map((item, index) => (
      <div key={index}>
        <h1>{item.tipo}</h1>
        <SortVideosComponents video={item}/>
      </div>
     ))}
    </div>
  );
}
