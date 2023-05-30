import React from "react";
import HomeVideo from "../assets/home/homeVideo.mp4";
import { defaultData } from "../data/Data";

const Default = () => {
  return (
    <div className="container text-[#ddd] mt-6">
      <a href="https://brodypaetau.com/cameltoe-brides-nfts">
        <video
          src={HomeVideo}
          autoplay="autoplay"
          loop="loop"
          muted
          preload="auto"
          playsinline=""
          type="video/mp4"
          className="w-full"
        ></video>
      </a>
      <h1 className="font-extrabold text-[24.2px] mt-[24px] mb-[60px] md:ml-48 leading-[1.2]">
        CAMELTOE BRIDES NFTS
      </h1>

      <ul className="flex justify-start gap-4 text-xl font-bold mb-[17px] leading-[1.2] ">
        <li className="hover:underline underline">DEFAULT</li>
        <li className="hover:underline">NEWEST</li>
        <li className="hover:underline">OLDEST</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {defaultData.map((item) => {
          return (
            <div key={item.id} className="mt-2 mb-6">
              <a href="https://brodypaetau.com/cameltoe-brides-nfts">
                <video
                  src={item.video}
                  autoplay="autoplay"
                  loop="loop"
                  muted
                  preload="auto"
                  playsinline=""
                  type="video/mp4"
                  className="w-[350px] h-[200px]"
                ></video>
              </a>

              <h1 className="text-2xl font-extrabold uppercase my-6">
                {item.title}
              </h1>
              <h6 className="text-sm">{item.desc}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Default;
