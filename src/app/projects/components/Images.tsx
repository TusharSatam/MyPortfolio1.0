import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";

export default function ShowImages({ images,projectName }: { images:any[],projectName:any }) {
  return (
    <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[
          ...new Array(2).fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {images.map((image, i) => (
                <div
                  key={`image-${i}`}
                  className="max-w-xs md:max-w-md hover:transform-gpu transition duration-300 relative after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:z-30 overflow-hidden after:-outline-offset-2 after:rounded-3xl after:outline-black after:pointer-events-none"
                >
                  <Image
                    src={image}
                    alt={`image-${i}`}
                    className={` rounded-3xl object-center ${projectName==="Voodle"?"h-[350px] lg:h-[350px]":"h-[250px] lg:h-[300px]"} `}
                  />
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
}
