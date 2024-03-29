import React from "react";
import facebook from "../public/icons/socials/facebook.svg";
import insta from "../public/icons/socials/insta.svg";
import linkedin from "../public/icons/socials/linkedin.svg";
import twitter from "../public/icons/socials/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container-120 bg-dark-3 text-white">
      <section className="w-full grid sm:flex gap-12 sm:gap-[80px] lg:gap-[190px] justify-between py-10 ">
        <div className="flex flex-col gap-[34px] flex-[1_0_0]">
          <h3 className="text-h6-1">RentEaze Property</h3>
          <div className="space-y-2">
            <p className="text-subtitle1-1">Connect with us</p>
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
            </div>
          </div>
        </div>
        <div className="w-fit grid sm:flex gap-10 lg:gap-20 flex-[1_0_0] justify-end">
          <div className="flex flex-col gap-3">
            <h6 className="text-subtitle1-1">Company</h6>
            <div className="space-y-2 font-normal">
              <p className="text-body2-2">About us</p>
              <p className="text-body2-2">Contact us</p>
              <p className="text-body2-2">Terms of service</p>
              <p className="text-body2-2">Privacy & Policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="text-subtitle1-1">Community</h6>
            <div className="space-y-2  font-normal">
              <p className="text-body2-2">Find agents</p>
              <p className="text-body2-2">Lifestyle</p>
              <p className="text-body2-2">Blog</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full border-t border-white py-5 text-center">
        Copyright &copy; {new Date().getFullYear()} Renteaze
      </section>
    </footer>
  );
};

export default Footer;
