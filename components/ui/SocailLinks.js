import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
const SocailLinks = () => {
  return (
    <ul className="flex justify-between w-72 sm:w-80 md:w-[30rem] mx-auto ">
      <li>
        <Link href="https://github.com/sproutjeph">
          <a
            className="text-2xl text-gray-600 hover:text-[#e9b949] transition-all "
            target="_blank"
          >
            <FaGithub />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/jephthah-mbah-71244263/">
          <a
            className="text-2xl text-gray-600 hover:text-[#e9b949] transition-all "
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://web.facebook.com/jephthah.mbah/">
          <a
            className="text-2xl text-gray-600 hover:text-[#e9b949] transition-all "
            target="_blank"
          >
            <FaFacebook />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/sproutjeph">
          <a
            className="text-2xl text-gray-600 hover:text-[#e9b949] transition-all "
            target="_blank"
          >
            <FaTwitter />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default SocailLinks;
