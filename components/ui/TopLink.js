import { FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
const TopLink = () => {
  return (
    <div className="top-link">
      <Link href="/">
        <a>
          <FaArrowUp />
        </a>
      </Link>
    </div>
  );
};

export default TopLink;
