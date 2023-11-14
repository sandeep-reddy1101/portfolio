import { contact } from "@/lib/data";
import ContactForm from "./contact-form";
import SectionHeader from "./section-header";
import { theme } from "@/lib/theme";

export default function Contact() {
  return (
    <section id="contact" className={`py-32 ${theme.contact.backgroundColor}`}>
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader {...contact} />
        <div
          className={`w-full sm:w-11/12 max-w-3xl mx-auto mt-6 p-8 ${theme.contact.formBackgroundColor} shadow-2xl rounded-md`}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
