import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
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
        "service_f9lge7n",
        "template_by937ha",
        {
          from_name: form.name,
          to_name: "Harsh",
          from_email: form.email,
          to_email: "harshkhavale1102@gmail.com",
          message: form.message,
        },
        "xSUXSNQa16ExCz0zO"
      )
      .then(
        () => {
          setLoading(false);
          alert("done!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("error");
          alert("error");
        }
      );
  };
  return (
    <section id="contact">
      <div className=" shadow-md md:mx-20  m-4 md:w-1/3 p-6  md:p-12 h-min  rounded-2xl border-2 ">
        <p className=" happy-font font-bold">get in touch</p>
        <p className=" text-5xl font-bold">CONTACT ME</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-gray-500 font-medium mb-4">Your Name</span>
            <input
              placeholder="whats your name?"
              onChange={handleChange}
              value={form.name}
              className=" dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4 placeholder:text-primary roundes-lg outlined-none  border-none font-medium"
              type="text"
              name="name"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-500 font-medium mb-4">Your Email</span>
            <input
              placeholder="enter your email here"
              onChange={handleChange}
              value={form.email}
              className=" dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4 placeholder:text-primary roundes-lg outlined-none  border-none font-medium"
              type="email"
              name="email"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-500 font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              placeholder="write message here"
              onChange={handleChange}
              value={form.message}
              className=" dark:bg-black bg-gray-200 outline-sky-500 outline-4 py-4 px-4 placeholder:text-primary roundes-lg outlined-none  border-none font-medium"
              name="message"
            />
          </label>
          <button
            className="border-2 border-current p-2  hover:bg-white text-white border-white rounded-xl happy-font font-bold hover:text-black"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
