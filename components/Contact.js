import { FaMapMarker, FaEnvelopeOpen, FaPhone } from 'react-icons/fa';
import ContactForm from './ui/ContactForm';
import Underline from './ui/Underline';

const Contact = () => {
  return (
    <section
      className="bg-white h-auto  w-full  md:h-screen mx-auto "
      id="contact"
    >
      <h1 className="text-center uppercase font-bold text-gray-800 text-xl tracking-wider">
        contact <span className="text-[#e9b949]">me</span>
      </h1>
      <Underline width="w-[4rem]" height="h-[0.2rem]" />
      <div className="md:flex justify-evenly mt-10 items-center">
        <article className=" p-4 shadow-xl rounded-lg w-[80%] mx-auto bg-gray-100 max-w-[20rem] h-[23rem] md:m-0">
          <div className="flex gap-x-6 mb-10 mt-8">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaMapMarker className="text-gray-500" />
            </div>
            <div>
              <h4 className="uppercase font-bold tracking-widest text-lg text-gray-800">
                address
              </h4>
              <p className="text-gray-700">Taraba State Nigeria</p>
            </div>
          </div>
          <div className="flex gap-x-6 mb-10">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaEnvelopeOpen className="text-gray-500" />
            </div>
            <div>
              <h4 className="uppercase font-bold tracking-widest text-lg text-gray-800">
                email
              </h4>
              <p className="text-gray-700">don_jeph@yahoo.com</p>
              <p className="text-gray-700">donjeph@gmail.com </p>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaPhone className="text-gray-500" />
            </div>
            <div>
              <h4 className="uppercase font-bold tracking-widest text-lg text-gray-800">
                phone
              </h4>
              <p className="text-gray-700">+2347065406165</p>
              <p className="text-gray-700">+2347065406165</p>
            </div>
          </div>
        </article>
        <div className="border m-2 relative mt-10 shadow-lg text-center">
          <p className="absolute top-[-15px] bg-white capitalize text-lg px-4">
            let me hear from you
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
