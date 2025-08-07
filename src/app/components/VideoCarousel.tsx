'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import { getYouTubeEmbedUrl } from "../../../utils/getYouTubeEmbedUrl";

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
  return (
    <>

      <div className="relative w-full py-4">
        <button className="swiper-button-prev-custom absolute left-0 top--1 -translate-y-1/2 z-10 text-2xl px-2 text-gray-700 hover:text-black "> ‹ </button>
        <button className="swiper-button-next-custom absolute right-0 top--1 -translate-y-1/2 z-10 text-2xl px-2 text-gray-700 hover:text-black "> › </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={"auto"}
          centeredSlides
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom"
          }}
        >
          {videoData.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="px-2 py-2 aspect-video w-full">
                <iframe
                  className="rounded-lg"
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
    </>

  );
}
