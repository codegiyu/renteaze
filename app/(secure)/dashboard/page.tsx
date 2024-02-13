// "use client";
import MiniSidebar from "@/components/MiniSidebar";
import mail from "@/public/icons/email.svg";
import alert from "@/public/icons/bell-alert.svg";
import help from "@/public/icons/account-lock.svg";
import power from "@/public/icons/power-standby.svg";
import settings from "@/public/icons/cog.svg";
// import { SideProps } from "@/componentTypes";
import Image from "next/image";
import profile from "@/public/icons/profile.png";
import list from "@/public/icons/playlist-edit.svg";
import ContactBar from "@/layout/ContactBar";
import UpdateUserForm from "@/sections/Dashboard/UpdateUserForm";

const sideLists = [
  {
    title: "Inbox",
    icon: mail,
    path: "/dashboard",
  },
  {
    title: "Notification",
    icon: alert,
    path: "/dashboard",
  },
  {
    title: "Favourites",
    icon: help,
    path: "/dashboard",
  },
  {
    title: "Settings",
    icon: settings,
    path: "/dashboard",
  },
  {
    title: "Logout",
    icon: power,
    path: "/dashboard",
  },
];

const Dashboard = () => {

  return (
    <>
      {/* <ContactBar /> */}
      <section className="container-120">
        <h2 className="text-h4-2 text-white bg-light-4 py-4 px-6">
          Property Listing
        </h2>
        <div className="text-sm flex items-start">
          <div>
            <h3 className="p-4 text-white bg-pri-blue flex items-center gap-4 border-b-[0.3px] border-b-gray-6">
              <Image src={list} alt="list-icon" />
              <span className="text-sm">List Property</span>
            </h3>

            {sideLists.map((item: SideProps, id: number) => (
              <MiniSidebar key={id} {...item} />
            ))}
          </div>
          <div className="flex flex-col pb-8 items-start gap-6 self-stretch flex-auto">
            <div className="bg-pri-blue py-[17.3px] px-6 relative flex justify-center text-white items-center w-full">
              <p className="text-sm uppercase">Create List</p>
              <Image
                className="absolute right-10 -top-10"
                src={profile}
                alt="user pic"
              />
            </div>
            <UpdateUserForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
