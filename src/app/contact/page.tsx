import ContactForm from "@/components/ContactForm";
import PlainBanner from "@/components/PlainBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SGN Studio",
  description: "Hubungi SGN Studio untuk berkonsultasi, diskusi mengenai proyek dan lainnya.",
};

export default function Contact() {
  return (
    <>
      <PlainBanner />
      <ContactForm />
    </>
  );
}
