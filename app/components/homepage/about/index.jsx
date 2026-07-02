// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-primary-50 w-fit text-primary-600 font-bold rotate-90 p-2 px-5 text-xl rounded-md tracking-wider">
          ABOUT
        </span>
        <span className="h-36 w-[2px] bg-primary-100"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-semibold mb-5 text-primary-600 text-xl uppercase tracking-wide">
            Overview
          </p>
          <p className="text-slate-600 text-sm lg:text-lg leading-relaxed">
            {personalData.bio}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          {personalData.profileImage && (
            <Image
              src={personalData.profileImage}
              width={280}
              height={280}
              alt={personalData.name}
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              style={{ width: 'auto', height: 'auto' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;