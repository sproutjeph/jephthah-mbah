import { FaMapMarker, FaEnvelopeOpen, FaPhone } from 'react-icons/fa';
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
          <form action="" className="mt-8">
            <div className="md:flex">
              <div className=" mb-4">
                <label
                  htmlFor="name"
                  className="block capitalize font-semibold tracking-wide text-gray-800 text-left ml-5"
                >
                  your Name
                </label>
                <input
                  type="text"
                  name=""
                  id="name"
                  className="rounded-md p-1 bg-[rgba(0,0,0,0.1)] w-[90%]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block"
                  className="block capitalize font-semibold tracking-wide text-gray-800 text-left ml-5"
                >
                  your email
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  className="rounded-md p-1 bg-[rgba(0,0,0,0.1)] w-[90%]"
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="message"
                className="block"
                className="block capitalize font-semibold tracking-wide text-gray-800 text-left ml-5"
              >
                your message
              </label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="5"
                className="resize-none rounded-md p-2 bg-[rgba(0,0,0,0.1)] w-[90%]"
              ></textarea>
            </div>
            <div className=" mt-2 w-full">
              <button
                type="submit"
                className="uppercase text-xl bg-[#e9b949] py-1 px-5 font-semibold tracking-widest text-gray-100 w-28 rounded-md"
              >
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
