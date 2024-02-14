import Cta from "@/components/Cta";
import AuthLayout from "@/layout/AuthLayout";
import ContactUsMain from "@/sections/ContactPage/ContactUsMain";
import React from "react";

const Contact = () => {
  return (
    <AuthLayout>
      <section>
        <ContactUsMain />
        <Cta />
      </section>
    </AuthLayout>
  );
};

export default Contact;
