import React from 'react';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import SocailLinks from '../ui/SocailLinks';
import Link from 'next/link';
const Hero = () => {
  return (
    <section className="bg-[#fffaeb] h-scale-90 text-center pb-4 md:h-screen px-1 w-full">
      <div className="grid sm:flex sm:justify-evenly sm:items-center">
        <div className="md:mt-28">
          <div className="pt-16 md:pt-0">
            <h2 className="font-black text-gray-700 text-4xl sm:text-5xl sm:font-extrabold">
              Hi I'm Jephthah
            </h2>
            <p className="font-black text-gray-500 text-xl mt-5 mb-16 sm:text-2xl">
              A Front-End web developer
            </p>
          </div>
          <div className="img-container mx-auto sm:hidden">
            <Image
              src="/images/jeph.jpg"
              alt="photo of jeph"
              height={300}
              width={300}
              className=" rounded-[50%] w-full h-full object-cover relative"
            />
          </div>
          <div>
            <Link href="/images/cv.pdf">
              <button className="uppercase shadow-sm text p-4 mt-10 text-gray-100 bg-[#e9b949] hover:bg-gray-400 rounded-lg w-48 mb-10 group">
                <span className="inline-block ">my cv</span>
                <span className="inline-block ml-3 group-hover:animate-bounce">
                  <FaArrowDown />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className=" img-container w-52 h-52 hidden sm:block sm:h-56 sm:w-56">
          <Image
            src="/images/jeph.jpg"
            alt="photo of jeph"
            height={300}
            width={300}
            className=" rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="sm:mt-[7rem] lg:mt-[10rem]">
        <SocailLinks />
      </div>
    </section>
  );
};

export default Hero;
