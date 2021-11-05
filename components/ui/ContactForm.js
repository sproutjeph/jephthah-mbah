import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  function handleSubmit(e) {
    e.preventDefault();
    reset();
    console.log(name, email, message);
  }
  return (
    <form
      className="mt-8"
      onSubmit={handleSubmit}
      action="mailto:donjeph@gmail.com"
      method="post"
      encType="text/plain"
    >
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
            name="name"
            id="name"
            required
            className={`rounded-md p-1 bg-[rgba(0,0,0,0.1)] w-[90%] `}
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            name="email"
            id="email"
            required
            className="rounded-md p-1 bg-[rgba(0,0,0,0.1)] w-[90%]"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
          type="text"
          name="message"
          id="message"
          cols="30"
          rows="5"
          required
          className="resize-none rounded-md p-2 bg-[rgba(0,0,0,0.1)] w-[90%]"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
      <div className=" mt-2 w-full">
        <button
          type="submit"
          className="uppercase text-xl bg-[#e9b949] py-1 px-5 font-semibold tracking-widest text-gray-100 w-[90%] rounded-md mb-5"
        >
          send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
