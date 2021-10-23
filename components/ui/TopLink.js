import { FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
const TopLink = () => {
  return (
    <div className="top-link">
      <Link href="/">
        <FaArrowUp />
      </Link>
    </div>
  );
};

export default TopLink;
