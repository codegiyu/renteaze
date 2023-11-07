"use client";
import MiniSidebar from "@/components/MiniSidebar";
import AuthLayout from "@/layout/AuthLayout";
import React, { useState } from "react";
import mail from "../../public/icons/email.svg";
import alert from "../../public/icons/bell-alert.svg";
import help from "../../public/icons/account-lock.svg";
import power from "../../public/icons/power-standby.svg";
import settings from "../../public/icons/cog.svg";
import user from "../../public/icons/card-account-phone.svg";
import { SideProps } from "@/componentTypes";
import Image from "next/image";
import profile from "../../public/icons/profile.png";
import camera from "../../public/icons/camera.svg";
import EditInput from "@/components/forms/EditInput";
import Select from "@/components/forms/Select";
import { gender } from "@/constants/generalData";
import CompoundPhoneInput from "@/components/forms/CompoundPhoneInput";
import { countries } from "@/constants/countries";
import RoundedButton from "@/components/buttons/RoundedButton";
import ContactBar from "@/layout/ContactBar";

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

interface Values {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  select: string;
  pic: string;
  phoneCode: string;
  phone: string;
}

const Dashboard = () => {
  const [values, setValues] = useState<Values>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    select: "",
    pic: "+234",
    phoneCode: "+234",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const name = target.name;
    const value = target.value;
    // console.log(target, name, value);
    setValues((prevState: Values) => ({ ...prevState, [name]: value }));
    // console.log(values);
  };

  const phoneCodesData: SelectOptionProps[] = Object.values(countries).map(
    (item: any) => ({
      text: item.phone[0],
      value: item.phone[0],
      image: item.image,
    })
  );

  return (
    <>
      <ContactBar />
      <section className="container-120">
        <h2 className="text-h4-2 text-white bg-light-4">Property Listing</h2>
        <div className="bg-light-4 py-4 px-6 flex justify-between text-white items-center">
          <div>
            <p className="text-sm">Update your personal infomations</p>
          </div>
          <div className="relative -bottom-14">
            <Image src={profile} alt="user pic" />
            <Image
              className="absolute -bottom-3 left-6"
              src={camera}
              alt="camera"
            />
          </div>
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
          <div className="flex flex-col pt-7 pb-8 items-start gap-6 self-stretch flex-auto">
            <EditInput
              label="1. Name"
              placeholder="Full names"
              btnText="Edit"
            />
            <EditInput
              label="2. Address"
              placeholder="House address"
              btnText="Edit"
            />
            <EditInput
              label="3. Email"
              placeholder="Email Address"
              type="email"
              btnText="Edit"
            />
            <Select
              label="4. Gender"
              name="select"
              optionsArray={gender}
              value={values.select}
              changeHandler={handleChange}
              placeholder="Male/Female"
              borders={true}
            />
            <EditInput
              label="5. DOB"
              type="date"
              placeholder="Full names"
              btnText="Edit"
            />
            <CompoundPhoneInput
              label="6. Contact Number"
              phoneCodeName="phoneCode"
              phoneCodeValue={values.phoneCode}
              phoneCodeOptions={phoneCodesData}
              phoneName="phone"
              phoneValue={values.phone}
              changeHandler={handleChange}
              placeholder="***********"
            />
            {/* <SelectWithPicture
              name={phoneCodeName}
              value={phoneCodeValue}
              optionsArray={phoneCodeOptions}
              changeHandler={changeHandler}
              disabled={disabled}
              borders={false}
              absolute={true}
            /> */}
            <RoundedButton
              colour="blue"
              text="Save"
              styles={{
                width: "183px",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
