import { useState } from "react";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Something went wrong!");

      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-0 pb-[5px] min-h-[90vh]">
      <div className="flex-1 flex flex-col justify-center text-center items-center pt-5 lg:pt-5">
        {!isSubmitted && (
          <>
            <h2 className="text-4xl font-bold -mt-5 -mb-[20px]">Contact Us</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
            >
              <input
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                id="name"
                type="text"
                required
                maxLength={128}
                placeholder="Your Name"
              ></input>
              <input
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                id="email"
                type="email"
                required
                maxLength={128}
                placeholder="Your E-mail"
              ></input>
              <textarea
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                id="message"
                required
                maxLength={1048576}
                placeholder="Additional information"
              ></textarea>
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
        {isSubmitted && (
          <div className="text-white text-xl sm:text-2xl md:text-4xl text-center">
            Your message has been successfully sent.
            <p>I'll get back to you soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};
