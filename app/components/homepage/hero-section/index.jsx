// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-slate-900 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-primary-600">{personalData.name}</span>
            {` , a Professional `}
            <span className=" text-primary-600">{personalData.role}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            {personalData.socials.github && (
              <Link
                href={personalData.socials.github}
                target='_blank'
                className="transition-all text-slate-500 hover:text-primary-600 hover:scale-110 duration-300"
              >
                <BsGithub size={30} />
              </Link>
            )}
            {personalData.socials.linkedin && (
              <Link
                href={personalData.socials.linkedin}
                target='_blank'
                className="transition-all text-slate-500 hover:text-primary-600 hover:scale-110 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            )}
            {personalData.socials.facebook && (
              <Link
                href={personalData.socials.facebook}
                target='_blank'
                className="transition-all text-slate-500 hover:text-primary-600 hover:scale-110 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
            )}
            {personalData.socials.leetcode && (
              <Link
                href={personalData.socials.leetcode}
                target='_blank'
                className="transition-all text-slate-500 hover:text-primary-600 hover:scale-110 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
            )}
            {personalData.socials.twitter && (
              <Link
                href={personalData.socials.twitter}
                target='_blank'
                className="transition-all text-slate-500 hover:text-primary-600 hover:scale-110 duration-300"
              >
                <FaTwitterSquare size={30} />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="rounded-full transition-all duration-300 hover:-translate-y-1">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-primary-600 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out flex items-center gap-1 hover:bg-primary-700">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            {personalData.socials.resumeUrl && (
              <Link className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-slate-700 no-underline transition-all duration-200 ease-out hover:bg-slate-50 hover:text-primary-600 hover:-translate-y-1" role="button" target="_blank" href={personalData.socials.resumeUrl}
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            )}
          </div>

        </div>
        <div className="order-1 lg:order-2 bg-white relative rounded-xl border border-slate-200 shadow-lg">
          <div className="px-4 lg:px-8 py-4 border-b border-slate-100 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-slate-200"></div>
            <div className="h-3 w-3 rounded-full bg-slate-200"></div>
            <div className="h-3 w-3 rounded-full bg-slate-200"></div>
          </div>
          <div className="overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-primary-600">const</span>
                <span className="mr-2 text-slate-900">coder</span>
                <span className="mr-2 text-primary-600">=</span>
                <span className="text-slate-500">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-900">name:</span>
                <span className="text-slate-500">{`'`}</span>
                <span className="text-emerald-600">{personalData.name}</span>
                <span className="text-slate-500">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-slate-900">skills:</span>
                <span className="text-slate-500">{`['`}</span>
                <span className="text-emerald-600">React</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">NextJS</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">Redux</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">Express</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">NestJS</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">MySql</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">MongoDB</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">Docker</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-emerald-600">AWS</span>
                <span className="text-slate-500">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-900">hardWorker:</span>
                <span className="text-rose-600">true</span>
                <span className="text-slate-500">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-900">quickLearner:</span>
                <span className="text-rose-600">true</span>
                <span className="text-slate-500">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-900">problemSolver:</span>
                <span className="text-rose-600">true</span>
                <span className="text-slate-500">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-700">hireable:</span>
                <span className="text-indigo-600">function</span>
                <span className="text-slate-500">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-rose-600">return</span>
                <span className="text-slate-500">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-indigo-600">this.</span>
                <span className="mr-2 text-slate-900">hardWorker</span>
                <span className="text-primary-600">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-indigo-600">this.</span>
                <span className="mr-2 text-slate-900">problemSolver</span>
                <span className="text-primary-600">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-indigo-600">this.</span>
                <span className="mr-2 text-slate-900">skills.length</span>
                <span className="mr-2 text-primary-600">&gt;=</span>
                <span className="text-rose-600">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-slate-500">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-slate-500">{`};`}</span></div>
              <div><span className="text-slate-500">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;