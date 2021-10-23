import Image from 'next/image';
import ProjectIcon from './ui/ProjectIcon';
const ProjectItem = (props) => {
  const {
    imageUrl,
    title,
    PrevIcon,
    GithubIcon,
    description,
    source,
    visit,
    techImgPath,
  } = props;
  return (
    <article className="bg-gray-50 w-[25rem] h-auto mx-auto my-2 rounded-lg shadow-lg text-gray-700 mb-8">
      <div className="">
        <h2 className="text-center uppercase text-xl font-bold">{title}</h2>
      </div>
      <div className="max-h-80 max-w-80 h-[30rem] w-[25rem]">
        <Image
          src={imageUrl}
          width={600}
          height={400}
          alt={title}
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>
      <div className="border-b-2 flex justify-between">
        <h2 className="text-lg font-medium uppercase ml-1">Technologies</h2>
        <div className="flex">
          <ProjectIcon imagePath={techImgPath.react} />
          <ProjectIcon imagePath={techImgPath.nextjs} />
          <ProjectIcon imagePath={techImgPath.tailwind} />
        </div>
      </div>
      <section className="border-b-2 p-2">
        <h1 className="uppercase font-bold text-gray-800">{title}</h1>
        <h2>{description}</h2>
      </section>
      <footer className="flex justify-between py-1 px-2  w-full">
        <ProjectIcon Icon={PrevIcon} title={'preview'} />
        <ProjectIcon Icon={GithubIcon} title={'code'} />
      </footer>
    </article>
  );
};

export default ProjectItem;
