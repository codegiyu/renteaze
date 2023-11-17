"use client";
import Cta from "@/components/Cta";
import AuthLayout from "@/layout/AuthLayout";
import Image from "next/image";
import React from "react";
import facebook from "../../public/icons/socials/facebook.svg";
import insta from "../../public/icons/socials/insta.svg";
import linkedin from "../../public/icons/socials/linkedin.svg";
import twitter from "../../public/icons/socials/twitter.svg";
import right from "../../public/icons/arrow-right.svg";
import Input from "@/components/forms/Input";
import RoundedButton from "@/components/buttons/RoundedButton";

const Contact = () => {
  return (
    <AuthLayout>
      <section>
        <div className="bg-col-1">
          <div className="flex w-full max-w-5xl mx-auto gap-28 py-6">
            <div className="bg-white py-6 px-7 flex-[1_0_0]">
              <h3 className="text-h4-2 text-center text-dark-1">
                Reach us for more info
              </h3>
              <p className="text-gray-5 text-center text-subtitle2-1">
                We can give you more information, and help you with your
                inquiry. Simply fill the feedback form and we will get back to
                you right away.
              </p>
              <form className="space-y-4 mt-10">
                <Input label="Your name" placeholder="Enter your name" />
                <Input
                  label="Your phone number"
                  placeholder="Enter your phone number"
                />
                <Input
                  label="Your email"
                  placeholder="Enter your Email Address"
                />

                <label
                  htmlFor="message"
                  className="input-wrap input-label font-[600]"
                >
                  Message
                  <textarea
                    cols={20}
                    rows={5}
                    className="border-[0.4px] border-gray-6 py-3 px-6 w-full mt-3"
                    placeholder="Message here"
                  />
                </label>
                <RoundedButton
                  rightIcon={right}
                  colour="blue"
                  text="Send Message"
                  styles={{
                    width: "183px",
                  }}
                />
              </form>
            </div>
            <div className="space-y-3 text-dark-1">
              <h4 className="text-h6-2">Contact info</h4>
              <p className="  text-subtitle2-2">
                No. 34a Zenth Avenue, Obafemi Awolowo Rd, Ikeja, NIGERIA
              </p>
              <p className="text-subtitle1-1 ">
                email: servicecare@renteaze.com
              </p>
              <p className="text-body2-1">Also reach us via</p>
              <div className="flex items-center gap-3">
                <a href="facebook.com" target="_blank" rel="noreferrer">
                  <Image src={facebook} alt="facebook" />
                </a>
                <a href="instagram.com" target="_blank" rel="noreferrer">
                  <Image src={insta} alt="instagram" />
                </a>
                <a href="linkedin.com" target="_blank" rel="noreferrer">
                  <Image src={linkedin} alt="linkedin" />
                </a>
                <a href="twitter.com" target="_blank" rel="noreferrer">
                  <Image src={twitter} alt="twitter" />
                </a>
                <strong>@ renteaze</strong>
              </div>
            </div>
          </div>
        </div>
        <Cta />
      </section>
    </AuthLayout>
  );
};

export default Contact;
