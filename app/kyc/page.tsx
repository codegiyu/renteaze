import MiniSidebar from "@/components/MiniSidebar";
import AuthLayout from "@/layout/AuthLayout";
import React from "react";
import pay from "../../public/icons/lock-off.svg";
import security from "../../public/icons/security.svg";
import help from "../../public/icons/account-lock.svg";
import power from "../../public/icons/power-standby.svg";
import settings from "../../public/icons/cog.svg";
import user from "../../public/icons/card-account-phone.svg";
import { SideProps } from "@/componentTypes";
import Image from "next/image";

const sideLists = [
  {
    title: "Payment details",
    icon: pay,
    path: "/kyc",
  },
  {
    title: "Security & Privacy",
    icon: security,
    path: "/kyc",
  },
  {
    title: "Help & Service details",
    icon: help,
    path: "/kyc",
  },
  {
    title: "Settings",
    icon: settings,
    path: "/kyc",
  },
  {
    title: "Logout",
    icon: power,
    path: "/kyc",
  },
];

const KYC = () => {
  return (
    <AuthLayout>
      <section>
        <div>
          <h3>
            <Image src={user} alt="Personal info" />
            <span>Personal info</span>
          </h3>

          {sideLists.map((item: SideProps, id: number) => (
            <MiniSidebar key={id} {...item} />
          ))}
        </div>
        <div></div>
      </section>
    </AuthLayout>
  );
};

export default KYC;
