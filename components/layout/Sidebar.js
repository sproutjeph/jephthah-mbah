import React from 'react';
import Link from 'next/link';
import SocailLinks from '../ui/SocailLinks';
const links = ['Home', 'About', 'Projects', 'Contact'];
import { useGlobalContext } from '../../store/context';
import Underline from '../ui/Underline';

const Sidebar = () => {
  const { setIsOpen, isOpen } = useGlobalContext();
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className={`sidebar transition-all ${isOpen && 'show'}`}>
      <nav className="mb-20 mt-24">
        <ul className="text-center">
          {links.map((link, index) => {
            return (
              <li key={index} className="mt-10 " onClick={clickHandler}>
                <Link
                  href={`${index === 0 ? '/' : `#${link.toLocaleLowerCase()}`}`}
                >
                  <a className="text-xl uppercase  font-bold leading-loose tracking-wider text-gray-600">
                    {link}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Underline />
      <SocailLinks />
    </aside>
  );
};

export default Sidebar;
