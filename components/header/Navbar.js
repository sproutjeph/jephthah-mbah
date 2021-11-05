import Link from 'next/link';
import MainNav from './MainNav';
import { useGlobalContext } from '../../store/context';
import ToggleBtn from '../ui/ToggleBtn';
const Navbar = () => {
  const { setIsOpen, isOpen, scrollPosition } = useGlobalContext();
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`p-4 w-full h-auto md:px-10 text-gray-700 bg-[#fffaeb] ${
        scrollPosition > 150 && 'fixedNav'
      }`}
    >
      <div className="flex justify-between">
        <Link href="/">
          <a className="text-2xl uppercase font-bold font-mono hover:animate-bounce">
            Jeph
          </a>
        </Link>
        <MainNav />
        <div className="md:hidden" onClick={clickHandler}>
          <ToggleBtn />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
