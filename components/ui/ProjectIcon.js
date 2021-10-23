import Image from 'next/image';
const ProjectIcon = ({ Icon, title, imagePath }) => {
  if (Icon) {
    return (
      <div className="flex flex-col items-center group cursor-pointer">
        <Icon className="text-xl group-hover:animate-bounce" />
        <p className="uppercase tracking-widest font-bold mt-1 text-[#e9b949]">
          {title}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center ml-4 cursor-pointer">
        <div className="group">
          <Image
            src={imagePath}
            width={40}
            height={40}
            alt={title}
            className="object-cover w-10 h-10  group-hover:animate-bounce"
          />
        </div>
      </div>
    );
  }
};

export default ProjectIcon;
