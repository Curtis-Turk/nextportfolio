import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:curtis.c.turk@outlook.com?subject]${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center justify-evenly items-center md:text-left md:flex-row max-w-7xl px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Call me on
          <span className="decoration-[#F7AB0A] underline p-5">
            07436468661
          </span>
        </h4>
        <h4 className="text-4xl font-semibold text-center">
          Email me on
          <span className="decoration-[#F7AB0A] underline p-5">
            curtis.c.turk@outlook.com
          </span>
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button type="submit" className="bg-[#F7AB0A] text-black">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
