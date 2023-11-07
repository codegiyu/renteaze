"use client";
import MiniSidebar from "@/components/MiniSidebar";
import AuthLayout from "@/layout/AuthLayout";
import React, { useState } from "react";
import pay from "../../public/icons/lock-off.svg";
import security from "../../public/icons/security.svg";
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

const KYC = () => {
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
    console.log(target, name, value);

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
    <AuthLayout>
      <section className="container-120">
        <div className="bg-light-4 py-4 px-6 flex justify-between text-white items-center">
          <div>
            <h2 className="text-3xl">Personal Details</h2>
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
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default KYC;
