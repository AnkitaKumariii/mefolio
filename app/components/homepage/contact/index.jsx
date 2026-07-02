// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-slate-900">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-primary-50 w-fit text-primary-600 font-bold rotate-90 p-2 px-5 text-xl rounded-md tracking-wider">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-primary-100"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            {personalData.socials.email && (
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail
                  className="bg-slate-100 p-2 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={36}
                />
                <span>{personalData.socials.email}</span>
              </p>
            )}
            {personalData.socials.phone && (
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  className="bg-slate-100 p-2 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={36}
                />
                <span>
                  {personalData.socials.phone}
                </span>
              </p>
            )}
            {personalData.address && (
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  className="bg-slate-100 p-2 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={36}
                />
                <span>
                  {personalData.address}
                </span>
              </p>
            )}
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            {personalData.socials.github && (
              <Link target="_blank" href={personalData.socials.github}>
                <IoLogoGithub
                  className="bg-slate-100 p-3 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
            {personalData.socials.linkedin && (
              <Link target="_blank" href={personalData.socials.linkedin}>
                <BiLogoLinkedin
                  className="bg-slate-100 p-3 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
            {personalData.socials.twitter && (
              <Link target="_blank" href={personalData.socials.twitter}>
                <FaXTwitter
                  className="bg-slate-100 p-3 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
            {personalData.socials.stackOverflow && (
              <Link target="_blank" href={personalData.socials.stackOverflow}>
                <FaStackOverflow
                  className="bg-slate-100 p-3 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
            {personalData.socials.facebook && (
              <Link target="_blank" href={personalData.socials.facebook}>
                <FaFacebook
                  className="bg-slate-100 p-3 rounded-full hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 text-slate-700 cursor-pointer"
                  size={48}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;