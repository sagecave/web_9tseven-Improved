import Image from "next/image";

import EventCards from "../../../components/eventCard/EventCards";
const communityPage = () => {
  return (
    <section className="grid grid-cols-subgrid col-start-1 col-end-4">
      <div className="grid col-start-2 col-end-3 mt-30 mb-4">
        <div className="flex flex-row justify-between  *:text-HeaderSizeSmall *:text-main_black *:font-bold">
          <h2>EVENTS</h2>
          <h2>MAY 2025</h2>
        </div>
        <EventCards />
      </div>

      <div className="grid grid-cols-subgrid col-start-1 col-end-4  mt-4 ">
        <div className=" grid-cols-subgrid col-start-1 col-end-4 md:col-start-2 md:col-end-3 md:grid-cols-[3fr_4fr] grid">
          <div className=" col-start-2 col-end-3 mt-4 mb-4 md:col-start-1 md:col-end-2 md:w-[70%] ">
            <h2 className=" text-HeaderSizeSmall text-main_black">MANIFESTO</h2>
            <p className="text-neutral_black text-ParagraphSize mt-2">
              The 9TSEVEN Manifesto is a guide for living with purpose, growth, and connection. It encourages gratitude, self-awareness, and embracing all emotions. It reminds us to value diversity, challenge our limits, and stay committed to
              personal growth. The manifesto promotes balance—mentally, physically, and emotionally—and highlights the importance of community and passion. It’s about becoming the best version of yourself, one step at a time.
            </p>
          </div>

          <div className="grid col-start-1 col-end-4 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 md:mt-13 md:ml-5 relative  ">
            <Image className="object-cover w-full md:w-full max-h-[870px]" src="/assets/images/chillingSammy.webp" alt="Person sitting down" width={500} height={300} />
          </div>

          <div className="grid col-start-1 col-end-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 lg:bottom-15 md:mt-15 md:mr-5 md:relative sm:mb-5">
            <Image className="object-cover w-full md:w-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 max-h-[800px]" src="/assets/images/communityPictureGroup.webp" alt="Person standing" width={500} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default communityPage;
