// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { personalData } from '@/utils/data/personal-data';

function Footer() {
  return (
    <div className="relative border-t bg-white border-slate-200 text-slate-700">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href={personalData.socials.linkedin || personalData.socials.github || '#'} className="text-primary-600 font-semibold">{personalData.name}</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={`${personalData.socials.github || '#'}`}
              className="flex items-center gap-2 uppercase hover:text-primary-600 font-medium"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href={`${personalData.socials.github || '#'}`}
              className="flex items-center gap-2 uppercase hover:text-primary-600 font-medium"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;