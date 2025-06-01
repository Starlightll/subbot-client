import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BizBot - Bảng Giá",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Bảng Giá" />
      <Pricing />
      {/* <Faq /> */}
    </>
  );
};

export default PricingPage;
