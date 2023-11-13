import { contact } from "@/lib/data";
import ContactForm from "./contact-form";
import SectionHeader from "./section-header";

export default function Contact() {

  return (
    <section id="contact" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader {...contact} />
        <div className="w-full sm:w-11/12 max-w-3xl mx-auto mt-6 p-8 bg-gray-50 dark:bg-gray-800 shadow-2xl rounded-md">
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}
