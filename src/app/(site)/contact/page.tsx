import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BizBot - Liên Hệ & Hỗ Trợ",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Liên Hệ & Hỗ Trợ" />

      <Contact />
    </>
  );
};

export default ContactPage;
