// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-8 lg:my-10 relative">
      <div className="flex justify-center my-5 lg:py-6">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="w-full">
        <p className="text-slate-600 text-sm lg:text-lg leading-relaxed text-center sm:text-justify max-w-5xl mx-auto">
          {personalData.bio}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;