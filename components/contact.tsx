"use client";
import { useRef, useState } from "react";
import SectionHeader from "./section-header";

export default function Contact() {
  let name = useRef<HTMLInputElement>(null);
  let email = useRef<HTMLInputElement>(null);
  let message = useRef<HTMLTextAreaElement>(null);
  let [successMessage, setSuccessMessage] = useState("");
  const heading = "Contact";
  const subHeading =
    "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible";

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (
      name.current !== null &&
      email.current !== null &&
      message.current !== null
    ) {
      const body = {
        name: name.current.value,
        email: email.current.value,
        message: message.current.value,
      };
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
      fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTimeout(() => setSuccessMessage(data.message), 1000);
          removeSuccessMessage()
        });
    }
  };

  const removeSuccessMessage = () => {
    setTimeout(() => {
        setSuccessMessage("")
    }, 5000)
  }

  return (
    <section id="contact" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader heading={heading} subHeading={subHeading} />
        <div className="w-11/12 max-w-3xl mx-auto mt-6 p-8 bg-gray-50 dark:bg-gray-800 shadow-2xl rounded-md">
          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
          >
            <div className="mb-8">
              <label
                className="text-gray-600 text-sm tracking-wide text-left font-semibold dark:text-gray-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                ref={name}
                required
                type="text"
                placeholder="Enter your name"
                className="text-gray-800 dark:text-gray-300 p-4 w-full mt-2 border border-solid border-gray-100 dark:border-gray-700 text-sm bg-gray-100 dark:bg-gray-700 rounded-md font-medium focus:none"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-8">
              <label
                className="text-gray-600 text-sm tracking-wide text-left font-semibold dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                ref={email}
                required
                type="email"
                placeholder="Enter your email"
                className="text-gray-800 dark:text-gray-300 p-4 w-full mt-2 border border-solid border-gray-100 dark:border-gray-700 text-sm bg-gray-100 dark:bg-gray-700 rounded-md font-medium focus:none"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-8">
              <label
                className="text-gray-600 text-sm tracking-wide text-left font-semibold dark:text-gray-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                ref={message}
                required
                cols={30}
                rows={10}
                placeholder="Enter your message here"
                className="text-gray-800 dark:text-gray-300 p-4 w-full mt-2 border border-solid border-gray-100 dark:border-gray-700 text-sm bg-gray-100 dark:bg-gray-700 rounded-md font-medium focus:none"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div className="text-center my-1 text-green-600">
                {successMessage}
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-violet-600 text-white text-base font-semibold py-3 px-10 rounded uppercase transform transition-transform hover:translate-y-[-3px] drop-shadow-xl tracking-wide"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
