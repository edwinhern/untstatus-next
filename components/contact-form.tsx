import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMe, setShowMe] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
    setShowMe(!showMe);
  };

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-0 pb-[5px] min-h-[70vh]">
      <div className="pb-10 container mx-auto px-10 text-center items-center justify-center mt-[40px]">
        <div className="mt-[10px] grid gap-6 lg:gap-20 -mb-[25px]">
          <div className="">
            <div className="container max-w-screen-lg mx-auto">
              <img
                alt="pictureofEdwin"
                className="mx-auto object-cover mb-2 w-44 h-44 rounded-full"
                src="/assets/social-media/me.JPG"
              />
            </div>
            <div className="text-2xl xl:text-3xl">Edwin Hernandez</div>
            
            <h2 className="mt-2"> Owner</h2>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center text-center items-center pt-5 lg:pt-5">
      {!showMe &&
        <><h2 className="text-4xl font-bold -mt-5 -mb-[20px]">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
            <input
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
              onChange={e => setName(e.target.value)}
              id="name"
              type="text"
              required maxLength={128}
              placeholder="Your Name"></input>
            <input
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
              onChange={e => setEmail(e.target.value)}
              id="email"
              type="email"
              required maxLength={128}
              placeholder="Your E-mail"></input>
            <textarea
              className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
              onChange={e => setMessage(e.target.value)}
              id="message"
              required maxLength={1048576}
              placeholder="Additional information"></textarea>
            <div className="text-center mt-10">
              <button
                type="submit"
                className="bg-white text-black rounded-3xl px-8 py-2">
                Submit
              </button>
            </div>
          </form></>
        }
        {showMe && <div className="text-white text-xl sm:text-2xl md:text-4xl text-center">Your message has been successfully sent.<p>I'll get back to you soon!</p></div>}
        </div>
    </div>
  );
};

export default ContactForm;
