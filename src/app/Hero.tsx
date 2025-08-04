import { JSX } from "react";
import Image from "next/image";


export default function Hero(): JSX.Element {
  return (
    <>
      <section className="bg-[#FFF9EF] py-20 px-20">
        <h1 className="text-5xl font-bold font-display text-[#A7281B]">Natalia Castrillón</h1>
        <h3 className="text-[#7B4812] ">Subtítulo</h3>

        <div className="flex justify-center items-center gap-8 mt-10">
          <section className="flex-1 bg-[#F2D64B] text-[#7B4812] py-20 px-10 text-center">
            <h1 className="break-words text-justify">Lorem ipsum dolor sit amet, cghjkmnbnfghjmnbvftyujmnbvftyukmnbvfrtyukmnbvfrtyukmnbvfrtyuikmnbvftyuikmnb vcxdertyujmnbvcder56y7uikmnbvcxsertyujnbvcxdertyuikmnbvcxsertyuikmnbvcdertyujnbvcdsertyujhbvcdjhgfdcvbnkuytgfdfvbnjuytrfd</h1>
          </section>

          <section className="flex-1 text-center">
            <Image
              src="/principalImages/foto1.jpg"
              alt="Imagen de portada"
              width={5000}
              height={300}
            />
          </section>         
        </div>

        

      </section>
    </>
  );
};