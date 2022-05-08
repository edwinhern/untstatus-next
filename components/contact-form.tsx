import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-0 pb-10 min-h-[70vh]">
      <div className="pb-10 container mx-auto px-10 text-center items-center justify-center mt-28">
        <div className="mt-10 grid gap-6 lg:gap-20">
          <div className="">
            <div className="container max-w-screen-lg mx-auto">
              <img
                alt="pictureofEdwin"
                className="mx-auto object-cover mb-2 w-44 h-44 rounded-full"
                src="/assets/social-media/me.JPG"
              />
            </div>
            <div className="text-2xl xl:text-3xl">Edwin Hernandez</div>
            
            <h2 className="-mb-4"> Owner</h2>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        {/* <div className="pb-10">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 w-10 h-10 rounded-full"
          ></div>
        </div> */}
        <h2 className="text-4xl font-bold">Contact Me</h2>
        
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
            <input 
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            required maxLength={128}
            type="text" 
            placeholder="Company Name"></input>
            <input
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            type="email"
            required maxLength={128}
            placeholder="Your E-mail"></input>
            <textarea
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
            required maxLength={1048576}
            placeholder="Additional information"></textarea>
            <div className="text-center mt-10">
                <button
                type="submit"
                className="bg-white text-black rounded-3xl px-8 py-2">
                Submit
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
