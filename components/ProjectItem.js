import Image from 'next/image';
import Link from 'next/link';
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
    <article className="bg-gray-50 w-[20rem]  h-auto my-2 rounded-lg shadow-lg text-gray-700 mb-8 px-2 lg:w-[25rem]">
      <div className="">
        <h2 className="text-center uppercase text-xl font-bold">{title}</h2>
      </div>
      <div className="h-[20rem] w-[100%]">
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
        <h2 className="">{description}</h2>
      </section>
      <footer className="flex justify-between py-1 px-2  w-full">
        <ProjectIcon Icon={PrevIcon} title={'preview'} />
        <Link href="https://github.com/sproutjeph?tab=repositories">
          <a target="_blank">
            <ProjectIcon Icon={GithubIcon} title={'code'} />
          </a>
        </Link>
      </footer>
    </article>
  );
};

export default ProjectItem;
