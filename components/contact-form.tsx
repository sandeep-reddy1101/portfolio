"use client";
import { useRef, useState } from "react";
import Button from "./button";

export default function ContactForm() {
  let name = useRef<HTMLInputElement>(null);
  let email = useRef<HTMLInputElement>(null);
  let message = useRef<HTMLTextAreaElement>(null);
  let [successMessage, setSuccessMessage] = useState("");
  const inputClasses = "text-gray-800 dark:text-gray-300 p-4 w-full mt-2 border border-solid border-gray-100 dark:border-gray-700 text-sm bg-gray-100 dark:bg-gray-700 rounded-md font-medium focus:none";
  const labelClasses = "text-gray-600 text-sm tracking-wide text-left font-semibold dark:text-gray-200";

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
          removeSuccessMessage();
        });
    }
  };

  const removeSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };
  return (
    <form
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
      <div className="mb-8">
        <label
          className={labelClasses}
          htmlFor="name"
        >
          Name
        </label>
        <input
          ref={name}
          required
          type="text"
          placeholder="Enter your name"
          className={inputClasses}
          id="name"
          name="name"
        />
      </div>
      <div className="mb-8">
        <label
          className={labelClasses}
          htmlFor="email"
        >
          Email
        </label>
        <input
          ref={email}
          required
          type="email"
          placeholder="Enter your email"
          className={inputClasses}
          id="email"
          name="email"
        />
      </div>
      <div className="mb-8">
        <label
          className={labelClasses}
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
          className={inputClasses}
          id="message"
          name="message"
        ></textarea>
      </div>
      <div className="text-center mb-3 text-green-600">{successMessage}</div>
      <div className="text-right">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
