// "use client";
import MiniSidebar from "@/components/MiniSidebar";
import OnboardingLayout from "@/layout/OnboardingLayout";
import pay from "@/public/icons/lock-off.svg";
import security from "@/public/icons/security.svg";
import help from "@/public/icons/account-lock.svg";
import power from "@/public/icons/power-standby.svg";
import settings from "@/public/icons/cog.svg";
import user from "@/public/icons/card-account-phone.svg";
// import { SideProps } from "@/componentTypes";
import Image from "next/image";
import KYCForm from "@/sections/Dashboard/KYCForm";
import KYCUserImage from "@/sections/Dashboard/KYCUserImage";

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
    <OnboardingLayout>
      <section className="container-120">
        <div className="bg-light-4 py-4 px-6 flex justify-between text-white items-center">
          <div>
            <h2 className="text-3xl">Personal Details</h2>
            <p className="text-sm">Update your personal infomations</p>
          </div>
          <KYCUserImage />
        </div>
        <div className="text-sm mt-16 flex gap-8 items-start">
          <div>
            <h3 className="p-3 text-white bg-light-3 flex items-center gap-4 border-b-[0.3px] border-b-gray-6">
              <Image src={user} alt="Personal info" />
              <span>Personal info</span>
            </h3>

            {sideLists.map((item: SideProps, id: number) => (
              <MiniSidebar key={id} {...item} />
            ))}
          </div>
          <KYCForm />
        </div>
      </section>
    </OnboardingLayout>
  );
};

export default KYC;
