"use client";
import { useEffect, useState } from "react";
import { AllVideos } from "@/video/qualivideos";
import "../styles/style.scss";
import { SortVideosComponents } from "@/componets/sortVideosComponents.tsx";
import { Header } from "@/componets/header";

export default function Home() {
  const [allVideos, setAllvideos] = useState<any[]>();

  const receivedVideosFromQuali = () => {
    const receivedVideo = AllVideos;
    setAllvideos(receivedVideo);
  };

  useEffect(() => {
    receivedVideosFromQuali();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container-95">
        <div className="typeComponents">
          {allVideos?.map((item, index) => (
            <div key={index} className="videosComponents">
              <h1>{item.tipo}</h1>
              <SortVideosComponents video={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
