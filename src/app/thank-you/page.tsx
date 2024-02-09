import ThankYou from "@/components/ThankYou";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SGN Studio",
  description: "Hubungi SGN Studio untuk berkonsultasi, diskusi mengenai proyek dan lainnya.",
};

export default function Contact() {
  return (
    <>
      <ThankYou />
    </>
  );
}
