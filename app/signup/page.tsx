"use client";

import Input from "@/components/forms/Input";
import AuthLayout from "@/layout/AuthLayout";
import React, { useState } from "react";
import { userCategories } from "@/constants/generalData";
import { countries } from "@/constants/countries";
import Select from "@/components/forms/Select";
import CompoundPhoneInput from "@/components/forms/CompoundPhoneInput";
import google from "@/public/icons/google.svg";
import facebook from "@/public/icons/facebook.svg";
import OutlineButton from "@/components/buttons/OutlineButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import Link from "next/link";

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

const Signup = () => {
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
    // console.log(target,name, value);
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
      <section className="container-120 h-full">
        <section className="py-10 grid gap-10">
          <div className="w-full md:w-[600px] mx-auto px-8 py-[1.375rem] grid gap-10 bg-col-1">
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <div className="grid md:flex items-center gap-10 md:gap-4">
              <Input
                name="firstname"
                value={values.firstname}
                changeHandler={handleChange}
                placeholder="First name"
              />
              <Input
                name="lastname"
                value={values.lastname}
                changeHandler={handleChange}
                placeholder="Last name"
              />
            </div>
            <Input
              name="email"
              value={values.email}
              changeHandler={handleChange}
              placeholder="Email address"
            />
            <Input
              name="password"
              value={values.password}
              changeHandler={handleChange}
              placeholder="Password"
            />
            <Input
              name="confirmPassword"
              value={values.confirmPassword}
              changeHandler={handleChange}
              placeholder="Confirm Password"
            />
            <CompoundPhoneInput
              phoneCodeName="phoneCode"
              phoneCodeValue={values.phoneCode}
              phoneCodeOptions={phoneCodesData}
              phoneName="phone"
              phoneValue={values.phone}
              changeHandler={handleChange}
              placeholder="***********"
            />
            <Select
              name="select"
              optionsArray={userCategories}
              value={values.select}
              changeHandler={handleChange}
              placeholder="Categories"
              borders={true}
            />
            <p className="text-subtitle1-2 text-center">
              Or use one of these options
            </p>
            <div className="flex justify-between gap-8 mx-auto ">
              <OutlineButton
                link="/login"
                leftIcon={google}
                text=""
                styles={{
                  width: "60px",
                  height: "60px",
                  gap: "0",
                  border: "0.3px solid #666666",
                  borderRadius: "4px",
                }}
              />
              <OutlineButton
                link="/login"
                text=""
                rightIcon={facebook}
                styles={{
                  width: "60px",
                  height: "60px",
                  gap: "0",
                  border: "0.3px solid #666666",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div className="border-y-2 py-3 text-sm font-medium text-center ">
              By signing in or creating an account, you agree with our{" "}
              <Link href="/" className="text-pri-blue">
                Terms & conditions
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-pri-blue">
                Privacy{" "}
              </Link>
              statement
            </div>

            <RoundedButton
              text="Create account"
              colour="blue"
              width="[90px]"
            />
            <p className="text-sm font-medium text-center max-w-sm mx-auto">
              Already registered?{" "}
              <Link href="/login" className="text-pri-blue">
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </section>
    </AuthLayout>
  );
};

export default Signup;
