'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import { getYouTubeEmbedUrl } from "../../../utils/getYouTubeEmbedUrl";
import { useState, useEffect } from "react";

type Video = {
  url: string;
};

const videoData: Video[] = [
  { url: 'https://www.youtube.com/watch?v=IhezuUWuV8c&ab_channel=NataliaCastrill%C3%B3n' },
  { url: 'https://www.youtube.com/watch?v=NGcbImlPPLQ&ab_channel=NataliaCastrill%C3%B3n' },
  { url: 'https://www.youtube.com/watch?v=KX46XhVGNz0&ab_channel=NataliaCastrill%C3%B3n' },
  { url: 'https://www.youtube.com/watch?v=p9txKFEOLGI&ab_channel=NataliaCastrill%C3%B3n' },
  { url: 'https://www.youtube.com/watch?v=WUV6hGd8Qz4&ab_channel=NataliaCastrill%C3%B3n' }
];

export default function VideoCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full py-4">
      {!isMobile && (
        <>
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 text-3xl px-2 text-gray-700 hover:text-black">
            ‹
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 text-3xl px-2 text-gray-700 hover:text-black">
            ›
          </button>
        </>
      )}

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides
        navigation={
          !isMobile
            ? { prevEl: ".swiper-button-prev-custom", nextEl: ".swiper-button-next-custom" }
            : undefined
        }
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 12 }
        }}
      >
        {videoData.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="px-2 py-2 aspect-video w-full">
              <iframe
                className="rounded-lg w-full h-full"
                src={getYouTubeEmbedUrl(video.url)}
                title={`YouTube video ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
