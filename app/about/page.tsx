import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import AuthHeader from "@/layout/AuthHeader";
import ContactBar from "@/layout/ContactBar";
import Image from "next/image";
import React from "react";
import about from "../../public/icons/about-bg.png";
import about1 from "../../public/icons/about-1.png";
import about2 from "../../public/icons/about-2.png";

const About = () => {
  return (
    <section>
      <ContactBar />
      <AuthHeader />
      <div className="grid place-items-center container-120">
        <Image src={about} alt="about us" className="w-full" />
      </div>
      <div className="container-120 mt-8">
        <div className="text-center max-w-4xl mx-auto px-3">
          <h3 className="text-h3-2 text-[#1814D8] mb-3">Who We Are</h3>
          <p className="text-subtitle2-1 text-dark-1">
            Welcome to Renteaze, your trusted resource for all things related to
            housing, property, and real estate. Our mission is simple yet
            profound: to empower individuals and families on their journey to
            finding their perfect home.
          </p>
        </div>
        <div className="flex gap-10 justify-center my-16">
          <div className="items-start flex-[1_0_0] text-subtitle2-2">
            <p>
              We are a passionate team of real estate experts, technology
              enthusiasts, and housing advocates who understand the importance
              of a place you can truly call home. With years of collective
              experience in the industry, we've witnessed firsthand the
              life-changing impact that the right housing can have on
              individuals and communities
            </p>
          </div>
          <div className="flex-[1_0_0]">
            <Image src={about1} alt="about us" className="w-full" />
          </div>
        </div>
        <div className="flex gap-10 justify-center my-16 text-subtitle2-2">
          <div className="flex-[1_0_0]">
            <Image src={about2} alt="about us" className="w-full" />
          </div>
          <div className="items-start flex-[1_0_0]">
            <p>
              We believe that everyone deserves access to safe, comfortable, and
              affordable housing options. We are committed to facilitating that
              access by providing a user-friendly platform where you can
              discover, explore, and connect with housing solutions that meet
              your unique needs
            </p>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </section>
  );
};

export default About;
