import { JSX } from "react";
import Image from "next/image";


export default function Hero(): JSX.Element {
  return (
    <>
      <section className="bg-[#FFF9EF] py-20 px-20">


        <div className="flex flex-col md:flex-row items-start gap-8 mt-10">

          <div className="w-full md:w-2/5 flex flex-col gap-4">

            <div className="flex flex-col text-left">
              <h1 className="text-3xl md:text-5xl font-bold font-display text-[#A7281B]">Natalia Castrillón</h1>
              <h3 className="text-[#7B4812] text-xl md:text-3xl mt-2 ">Subtítulo</h3>
            </div>

            <section>
              <section className="bg-[#F2D64B] text-[#7B4812] py-5 px-4  text-center rounded-3xl">
                <h1 className="break-words text-justify">Lorem ipsum dolor sit amet, cghjkmnbnfghjmnbvftyujmnbvftyukmnbvfrtyukmnbvfrtyukmnbvfrtyuikmnbvftyuikmnb vcxdertyujmnbvcder56y7uikmnbvcxsertyujnbvcxdertyuikmnbvcxsertyuikmnbvcdertyujnbvcdsertyujhbvcdjhgfdcvbnkuytgfdfvbnjuytrfd</h1>
              </section>
            </section>

          </div>


           <section className="w-full md:flex-1 text-center">
            <Image
              src="/principalImages/foto1.jpg"
              alt="Imagen de portada"
              width={900}
              height={600}
            />
          </section>  

        </div>



      </section>
    </>
  );
};