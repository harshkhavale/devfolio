import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { bot, semicolon2 } from "../assets";

const ContactSection = () => {
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message,setMessage] = useState("Send");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // template_by937ha
    // service_f9lge7n
    // xSUXSNQa16ExCz0zO
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Harsh",
          from_email: form.email,
          to_email: "harshkhavale.work@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Message Sent Successfully!")
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setMessage("Something went wrong!")
          alert("error");
        }
      );
  };
  return (
    <section className=" text-xl min-h-screen" id="contact" >
      <div className=" text-base h-[1px] w-full dark:bg-white bg-black"></div>
      <p className="text-7xl md:px-20 py-20 px-4 ">Would you like to work together?</p>
      <div className=" flex md:flex-row flex-col pb-20 px-8 justify-center gap-8">
        <div className="md:w-6/12">
          <div className="md:mx-20 p-8 h-min  rounded-2xl border-2 ">

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-4"
            >
              <label className="flex flex-col">
                <span className="text-gray-500 font-medium mb-4  normal-font">Your Name</span>
                <input
                  placeholder="whats your name?"
                  onChange={handleChange}
                  value={form.name}
                  className=" normal-font dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4  roundes-lg outlined-none  border-none font-medium"
                  type="text"
                  name="name"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-500 font-medium mb-4 normal-font">Your Email</span>
                <input
                  placeholder="enter your email here"
                  onChange={handleChange}
                  value={form.email}
                  className=" normal-font dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4  roundes-lg outlined-none  border-none font-medium"
                  type="email"
                  name="email"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-500 font-medium mb-4  normal-font">Your Message</span>
                <textarea
                  rows={5}
                  placeholder="write message here"
                  onChange={handleChange}
                  value={form.message}
                  className=" normal-font dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4  roundes-lg outlined-none  border-none font-medium"
                  name="message"
                />
              </label>
              <button
                className="text-white bg-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-[#261FB3] text-sm px-5 py-2.5 text-center me-2 mb-2 font-bold happy-font"
                type="submit"
              >
                {loading ? "Sending..." : message}
              </button>
            </form>
          </div>
        </div>

        <div className=" flex justify-center  items-center md:w-5/12 h-96 md:h-auto ">
          <p className=" md:text-[30rem] text-center font-bold new-font text-[16rem] text-[#261FB3]">h11</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
