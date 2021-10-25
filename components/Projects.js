import ProjectItem from './ProjectItem';
import projects from '../data';
import Underline from './ui/Underline';
const Projects = () => {
  return (
    <section className="bg-[#f1f5f8] h-auto w-full px-2" id="projects">
      <h2 className="text-center uppercase font-black text-2xl tracking-widest text-gray-700 pt-4">
        Projects
      </h2>
      <Underline height="h-[0.2rem]" width="w-[5rem]" marginT="mt-[0]" />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-2 place-items-center mt-5">
        {projects.map((project) => {
          const {
            image,
            title,
            icons,
            source,
            id,
            description,
            visit,
            technologies,
            techImgPath,
          } = project;
          return (
            <li key={id} className="">
              <ProjectItem
                imageUrl={image}
                title={title}
                PrevIcon={icons[0]}
                GithubIcon={icons[1]}
                description={description}
                source={source}
                visit={visit}
                techImgPath={techImgPath}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
