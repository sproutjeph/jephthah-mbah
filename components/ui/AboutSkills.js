import Image from 'next/image';

const AboutSkills = ({
  imagePath,
  top,
  right,
  left,
  bottom,
  title,
  position,
}) => {
  return (
    <div
      className={`rounded-full object-cover ${position} ${top} ${right} ${bottom} ${left}  w-14 h-14 shadow-xl cursor-pointer group`}
    >
      <Image
        src={imagePath}
        height={100}
        width={100}
        alt="photo of skill"
        className="rounded-full object-cover w-full h-full"
      />
      <p className="text-base font-semibold text-gray-800 invisible group-hover:visible">
        {title}
      </p>
    </div>
  );
};

export default AboutSkills;
