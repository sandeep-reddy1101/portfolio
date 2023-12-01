"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";

import Button from "./button";
import { theme } from "@/lib/theme";
import Image from "next/image";

interface contactFrom {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  let name = useRef<HTMLInputElement>(null);
  let email = useRef<HTMLInputElement>(null);
  let message = useRef<HTMLTextAreaElement>(null);
  const [sent, setSent] = useState(false);
  const inputClasses = `${theme.contact.formInputTextColor} p-4 w-full mt-2 border border-solid ${theme.contact.formInputBorderColor} text-sm ${theme.contact.formInputbackgroundColor} rounded-md font-medium focus:none`;
  const labelClasses = `text-gray-600 text-sm tracking-wide text-left font-semibold dark:text-gray-200`;

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
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
      sendEmail(body);
    }
  };

  const sendEmail = (body: contactFrom) => {
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
        resetContactForm();
        toast.success(data.message);
        setSent(false);
      })
      .catch((error) => {
        toast.error(error);
        setSent(false);
      });
  };

  const resetContactForm = () => {
    if (
      name.current !== null &&
      email.current !== null &&
      message.current !== null
    ) {
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
      <div className="mb-8">
        <label className={labelClasses} htmlFor="name">
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
        <label className={labelClasses} htmlFor="email">
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
        <label className={labelClasses} htmlFor="message">
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
      <div className="text-right">
        <Button>{sent ? "Sending..." : "Send Email"}</Button>
      </div>
    </form>
  );
}
