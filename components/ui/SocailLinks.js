import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
const sLinks = [<FaFacebook />, <FaGithub />, <FaLinkedin />, <FaTwitter />];
const SocailLinks = () => {
  return (
    <ul className="flex justify-between w-72 sm:w-80 md:w-[30rem] mx-auto ">
      {sLinks.map((link, index) => {
        return (
          <li key={index}>
            <Link href="/">
              <a className="text-2xl text-gray-600 hover:text-[#e9b949] transition-all ">
                {link}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocailLinks;
