"use client";

import Input from "@/components/forms/Input";
import AuthLayout from "@/layout/AuthLayout";
import React, { useState } from "react";
import google from "@/public/icons/google.svg";
import facebook from "@/public/icons/facebook.svg";
import OutlineButton from "@/components/buttons/OutlineButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import Link from "next/link";

interface Values {
  random: string;
  select: string;
  pic: string;
  phoneCode: string;
  phone: string;
}

const Login = () => {
  const [values, setValues] = useState<Values>({
    random: "",
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

    setValues((prevState: Values) => ({ ...prevState, [name]: value }));
  };

  return (
    <AuthLayout>
      <section className="container-120 h-full">
        <section className="py-10 grid gap-10">
          <div className="w-full md:w-[478px] mx-auto px-8 py-[1.375rem] grid gap-6 bg-col-1">
            <h2 className="text-xl text-center font-[600] max-w-sm mx-auto mb-4">
              Sign in or Sign up to create an account
            </h2>
            <Input
              name="random"
              value={values.random}
              changeHandler={handleChange}
              placeholder="Enter your email address here"
              label="Email Address"
            />

            <RoundedButton
              text="Continue with email"
              colour="blue"
              width="[90px]"
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
                  background: "#ffffff",
                }}
              />
              <OutlineButton
                text=""
                rightIcon={facebook}
                styles={{
                  width: "60px",
                  height: "60px",
                  gap: "0",
                  border: "0.3px solid #666666",
                  borderRadius: "4px",
                  background: "#ffffff",
                }}
              />
            </div>
            <div className="border-y-2 py-3 text-sm font-medium text-center max-w-sm">
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
          </div>
        </section>
      </section>
    </AuthLayout>
  );
};

export default Login;
