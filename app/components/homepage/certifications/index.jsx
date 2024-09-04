// @flow strict
import Image from "next/image";
import { certifData } from "@/utils/data/certificationsData";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/study.json'; 
function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                certifData.map(certification => (
                  <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                    <div className="p-3 relative text-white">
                    <Image
                      src="/section.svg"
                      alt="Hero"
                      width={1572}
                      height={795}
                      className="absolute top-0 -z-10"
                    />
                      <div className="flex justify-center">
                      <a href={certification.link}>
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {certification.company}
                        </p>
                        </a>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <Image
                src={`/certifImages/${
                  certification.company === "365 Data Science"
                    ? "365DataScience"
                    : certification.company
                }.png`}
                alt={certification.company}
                width={
                  certification.company === "IBM" || certification.company === "Talend"
                    ? 75
                    : 50
                }
                height={
                  certification.company === "IBM" || certification.company === "Talend"
                    ? 75
                    : 50
                }
                className="rounded-full"
              />

                        </div>
                        <div>
                        <a href={certification.link}>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {certification.title}
                          </p>
                          </a>
                          <p className="text-sm sm:text-base">{certification.company}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
