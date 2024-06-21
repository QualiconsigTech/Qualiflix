"use client";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import "./videos.style.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

export const SortVideosComponents = (videos: any) => {
  const [getVideo, setGetVideo] = useState<any[]>();
  const [canScroll, setCanScroll] = useState(false);


  const validateHowTypeIs = async () => {
    const tipoIsPodcast =
      videos.video.tipo == "PodCast" ? setGetVideo(videos.video.videos) : null;
    const tipoIsEvent =
      videos.video.tipo == "Evento" ? setGetVideo(videos.video.videos) : null;
    const tipoIsTutorial =
      videos.video.tipo == "Treinamento" ? setGetVideo(videos.video.videos) : null;
    const tipoIsEntrevista =
      videos.video.tipo == "Entrevista"
        ? setGetVideo(videos.video.videos)
        : null;
    const tipoIsFesta =
      videos.video.tipo == "Festa" ? setGetVideo(videos.video.videos) : null;
  };
  const [scrollx, setScrollx] = useState(0);

 
  const handleMoveScrollLeft = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };

  const handleMoveScrollRight = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = getVideo!.length * 180;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollx(x);
  };

  useEffect(() => {
    validateHowTypeIs();
  }, [videos]);

  return (
    <div className="videos">
      <div className="movieRow--left" onClick={handleMoveScrollLeft}>
        <IoMdArrowBack />
      </div>
      {getVideo?.length * 200 > window.innerWidth &&
      <div className="movieRow" style={{ marginLeft: scrollx }}>
        {getVideo?.map((video, index) => (
         <Link href={'videos/'+video.id} key={index} className="movieRowItem">
         {video.title}
        </Link>
        ))}
      </div>
      }
      {getVideo?.length * 200 < window.innerWidth &&
        <div className="movieRow">
        {getVideo?.map((video, index) => (
          <Link href={'videos/'+video.id} key={index} className="movieRowItem">
             {video.title}
          </Link>
        ))}
      </div>
      }
      <div className="movieRow--right" onClick={handleMoveScrollRight}>
        <IoMdArrowForward />
      </div>
    </div>
  );
};
