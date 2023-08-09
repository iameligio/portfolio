import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FiMail } from "react-icons/fi";
import { BiCoffeeTogo } from "react-icons/bi";

const ContactPage = () => {
  const [ref, inView] = useInView();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Perform any additional form submission logic here

    // Reset the form fields
    formRef.current.submit();
    formRef.current.reset();
  };

  return (
    <div
      id="contact"
      className="overflow-hidden py-40 transition ease-in-out w-full max-h-fit flex flex-col justify-evenly items-center gap-6 md:flex-row dark:text-white"
    >
      <div className="p-2 md:shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-red-500 rounded-md flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center mx-10">
          <h1 className="text-red-500 text-2xl font-semibold mb-3">
            Hit me up!
          </h1>
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300">
            <p>@bacaltosbaryshnikov@gmail.com</p>
            <FiMail size={40} />
            </div>
        </div>

        <div className="transition ease-in-out p-8 rounded-md gap-3 w-full text-gray-600 dark:text-gray-300">
          <h1 className="text-center text-2xl mb-4 font-bold text-red-500">
            Contact Me
          </h1>
          <form
            ref={formRef} // Set the ref to the form element
            action="https://formsubmit.co/0aa1430e654bfe0983f97e885b3aef07"
            method="POST"
            target="_blank"
            className="flex flex-col gap-3 text-black dark:text-white"
            onSubmit={handleSubmit} // Call the handleSubmit function on form submission
          >
            <h6 className="text-gray-600 dark:text-gray-300">Email:</h6>
            <input
              type="text"
              name="Email"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-md focus: outline-red-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Message:</h6>
            <textarea
              name="Message"
              id=""
              rows="7"
              required
              className="resize-none shadow-lg shadow-black-500/50 p-1 rounded-md focus: outline-red-500 dark:text-black"
            ></textarea>
            <button
              type="submit"
              className="w-full self-center p-2 rounded-md bg-red-500 text-white hover:scale-105 transition ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
