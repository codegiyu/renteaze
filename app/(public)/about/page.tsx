import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import AuthHeader from "@/layout/AuthHeader";
import ContactBar from "@/layout/ContactBar";
import Image from "next/image";
import React from "react";
import about from "@/public/icons/about-bg.png";
import about1 from "@/public/icons/about-1.png";
import about2 from "@/public/icons/about-2.png";
import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Hero";
import PageIntro from "@/components/PageIntro";
import ImageTextFlex from "@/components/ImageTextFlex";

const About = () => {
  return (
    <MainLayout>
      <>
        <main>
          <Hero text="ABOUT US" overlayOpacity="30" />
          <section className="container-120 mt-8">
            <PageIntro
              heading="Who We Are"
              text="Welcome to Renteaze, your trusted resource for all things related to
              housing, property, and real estate. Our mission is simple yet
              profound: to empower individuals and families on their journey to
              finding their perfect home."
            />
            
            <ImageTextFlex
              image={about1}
              imageAlt="About Us"
              text="We are a passionate team of real estate experts, technology
              enthusiasts, and housing advocates who understand the importance
              of a place you can truly call home. With years of collective
              experience in the industry, we've witnessed firsthand the
              life-changing impact that the right housing can have on
              individuals and communities"
              reversed={true}
            />
            
            <ImageTextFlex
              image={about2}
              imageAlt="About Us"
              text="We believe that everyone deserves access to safe, comfortable, and
              affordable housing options. We are committed to facilitating that
              access by providing a user-friendly platform where you can
              discover, explore, and connect with housing solutions that meet
              your unique needs"
            />
          </section>
          <Cta />
        </main>
        <Footer />
      </>
    </MainLayout>
  );
};

export default About;
