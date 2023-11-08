"use client";
import MiniSidebar from "@/components/MiniSidebar";
import React, { useRef, useState } from "react";
import mail from "../../public/icons/email.svg";
import alert from "../../public/icons/bell-alert.svg";
import help from "../../public/icons/account-lock.svg";
import power from "../../public/icons/power-standby.svg";
import settings from "../../public/icons/cog.svg";
import { SideProps } from "@/componentTypes";
import Image from "next/image";
import profile from "../../public/icons/profile.png";
import list from "../../public/icons/playlist-edit.svg";
import EditInput from "@/components/forms/EditInput";
import Select from "@/components/forms/Select";
import { booleanCategory, propertyCategory } from "@/constants/generalData";
import { countries } from "@/constants/countries";
import RoundedButton from "@/components/buttons/RoundedButton";
import ContactBar from "@/layout/ContactBar";
import Input from "@/components/forms/Input";
import OutlineButton from "@/components/buttons/OutlineButton";
import addImg from "../../public/icons/add-img.svg";

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
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
            <div className="flex flex-col pb-8 items-start justify-center gap-6 self-stretch flex-auto w-[644px] mx-auto">
              <Select
                name="select"
                optionsArray={propertyCategory}
                value={values.select}
                changeHandler={handleChange}
                placeholder="Property Type"
                borders={true}
              />
              <Select
                name="select"
                optionsArray={propertyCategory}
                value={values.select}
                changeHandler={handleChange}
                placeholder="Select location"
                borders={true}
              />
              <EditInput
                label="Title"
                placeholder="Write Title"
                btnText="Edit"
              />
              <EditInput
                label="Address"
                placeholder="House address"
                btnText="Edit"
              />
              <Select
                name="select"
                optionsArray={propertyCategory}
                value={values.select}
                changeHandler={handleChange}
                placeholder="Condition"
                borders={true}
              />
              <Select
                name="select"
                optionsArray={propertyCategory}
                value={values.select}
                changeHandler={handleChange}
                placeholder="Furnishing"
                borders={true}
              />
              <Select
                name="select"
                optionsArray={propertyCategory}
                value={values.select}
                changeHandler={handleChange}
                placeholder="No. of Bedroom"
                borders={true}
              />
              <EditInput
                label="No. of Toilet"
                placeholder="How many toilet(s)"
                type="number"
                btnText="Edit"
              />
              <Select
                name="select"
                optionsArray={booleanCategory}
                value={values.select}
                changeHandler={handleChange}
                placeholder="Car Par space"
                borders={true}
              />
              <EditInput
                label="Price"
                type="number"
                placeholder="Add price"
                btnText="Edit"
              />
              <div>
                <textarea
                  cols={20}
                  rows={3}
                  className="border-[0.4px] border-gray-6 py-3 px-6 w-full"
                  placeholder="Description"
                />
                <small className="text-gray-9">
                  Please provide a detailed description. Provide as many details
                  as possible will make your Ads more attractive to prospects.
                </small>
              </div>
              <div className="photo">
                <h4 className="font-medium">Add photo</h4>
                <p className="text-error-1 text-xs">
                  Add at least 4 photos for this category.
                </p>
                <p className="text-error-1 text-xs">
                  Supported format are .jpg, .gif and .png, 5MB max. Image width
                  must be at least: 600 px
                </p>
                <div className="flex cursor-pointer">
                  <Image
                    src={addImg}
                    onClick={handleEditClick}
                    alt="click to add an image"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    // onChange={handleImageChange}
                  />
                </div>
                <div className="flex my-3">
                  <OutlineButton
                    text="Add video"
                    styles={{
                      width: "183px",
                    }}
                  />
                  <OutlineButton
                    text="Upload"
                    styles={{
                      width: "183px",
                      color: "white",
                      backgroundColor: "#999BCF",
                    }}
                  />
                </div>
              </div>

              <RoundedButton
                colour="blue"
                text="Post Listing"
                styles={{
                  width: "183px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
