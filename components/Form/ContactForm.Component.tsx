import { useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(response.statusText);

      reset(); // Resets form fields
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
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
            >
              <input
                {...register("name", {
                  required: true,
                  maxLength: 128,
                })}
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                type="text"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-600">Name is required</p>}

              <input
                {...register("email", { required: true, maxLength: 128 })}
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                type="email"
                placeholder="Your E-mail"
              />
              {errors.email && (
                <p className="text-red-600">Email is required</p>
              )}
              <textarea
                {...register("message", { required: true, maxLength: 1048576 })}
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
                placeholder="Additional information"
              ></textarea>
              {errors.message && (
                <p className="text-red-600">Information is required</p>
              )}
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
