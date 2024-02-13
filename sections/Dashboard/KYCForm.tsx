"use client";
import React, { useState } from "react";
import { countries } from "@/constants/countries";
// import profile from "@/public/icons/profile.png";
import EditInput from "@/components/forms/EditInput";
import Select from "@/components/forms/Select";
import { genderCategory } from "@/constants/generalData";
import CompoundPhoneInput from "@/components/forms/CompoundPhoneInput";
import RoundedButton from "@/components/buttons/RoundedButton";

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

const KYCForm: React.FC = () => {
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
        <form 
            className="flex flex-col pt-7 pb-20 items-start gap-6 self-stretch flex-auto"
        >
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
              optionsArray={genderCategory}
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
        </form>
    )
}

export default KYCForm;