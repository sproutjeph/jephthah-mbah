import SocailLinks from '../ui/SocailLinks';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="h-[30vh] w-full bg-[#222] text-center pt-10">
      <SocailLinks />
      <h1 className="text-gray-100 text-xl pt-10">
        &copy; <span>{date} </span> Jephthah Mbah. All Rights Reserved
      </h1>
    </section>
  );
};

export default Footer;
