import Underline from './ui/Underline';
import Image from 'next/image';
import AboutSkills from './ui/AboutSkills';
const About = () => {
  return (
    <section className="h-auto w-full  bg-gray-50 pb-10 md:h-[90vh]" id="about">
      <div className="mb-28 w-full ml-5">
        <h1 className="uppercase text-center pt-4 text-gray-800 font-bold tracking-widest text-xl">
          About me
        </h1>
        <Underline width="w-[4rem]" height="h-[0.15rem]" />
      </div>
      <div className="md:flex md:justify-evenly md:items-center">
        <article className="">
          <div className="w-[18rem] h-[18rem] rounded-full border-[#e9b949] border flex justify-center items-center mx-auto relative">
            <div className="w-48 h-48 mx-auto">
              <Image
                src="/images/jeph.jpg"
                height={300}
                width={300}
                alt="photo of jeph"
                className="rounded-full w-full h-full b"
              />
            </div>
            <AboutSkills
              imagePath="/images/javascript.png"
              top="top-[-25px]"
              title="javaScript"
              position="absolute"
            />
            <AboutSkills
              imagePath="/images/tailwind.png"
              right="right-[-25px]"
              title="Tailwind css"
              position="absolute"
            />
            <AboutSkills
              imagePath="/images/react.png"
              bottom="bottom-[-25px]"
              title="React js"
              position="absolute"
            />
            <AboutSkills
              imagePath="/images/nextjs.png"
              left="left-[-25px]"
              title="Next js"
              position="absolute"
            />
          </div>
        </article>
        <article className="bg-white shadow-xl  mt-14 w-96 h-80 md:mx-0 mx-auto">
          <div className="bg-gray-700 w-full h-[5rem] flex justify-evenly items-center">
            <AboutSkills imagePath="/images/javascript.png" />
            <AboutSkills imagePath="/images/tailwind.png" />
            <AboutSkills imagePath="/images/react.png" />
            <AboutSkills imagePath="/images/nextjs.png" />
          </div>

          <h4 className="text-center p-4 text-lg">
            Am Jephthah Mbah, a web developer, Dedicated to creating commercial
            and genuine websites to help businesses grow. With years of
            experience, I specializes in developing great website. As a web
            developer, i mainly worked for small to medium-sized companies in
            the technology sector.
          </h4>
        </article>
      </div>
    </section>
  );
};

export default About;
