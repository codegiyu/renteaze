"use client";

import React, { useCallback, useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import { userCategories } from "@/constants/generalData";
import { countries } from "@/constants/countries";
import Select from "@/components/forms/Select";
import CompoundPhoneInput from "@/components/forms/CompoundPhoneInput";
import google from "@/public/icons/google.svg";
import facebook from "@/public/icons/facebook.svg";
import OutlineButton from "@/components/buttons/OutlineButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import Link from "next/link";
import { useAlertService, useUserService } from "@/app/_services";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "Agent" | "Developer" | "Landlord" | "User";
    phoneCode: string;
    phone: string;
}

const SignupForm: React.FC = () => {
    const userService = useUserService();
    const alertService = useAlertService();
    const { register } = userService;
    const { error } = alertService;

    const [formValid, setFormValid] = useState<boolean>(false);
    const [regLoading, setRegLoading] = useState<boolean>(false);
    const [values, setValues] = useState<Values>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "User",
      phoneCode: "+234",
      phone: "",
    });
  
    const phoneCodesData: SelectOptionProps[] = Object.values(countries).map(
      (item: any) => ({
        text: item.phone[0],
        value: item.phone[0],
        image: item.image,
      })
    );
  
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

    const checkFormValid = useCallback(() => {
      if (
        !values.firstName
        || !values.lastName
        || !values.email
        || !values.phone
        || !values.role
        || !values.password 
        || values.password.length < 6
        || values.password.length > 25
        || !values.confirmPassword
      ) {
        console.log({valid: false, values});
        setFormValid(false);
      } else {
        console.log({valid: true, values});
        setFormValid(true);
      }
    }, [values])

    const handleCreateAccount = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!formValid) {
          error("Please fill all form fields before submitting");
          console.log("Please fill all form fields before submitting");
          return;
      }

      if (values.password !== values.confirmPassword) {
          error("Password and Confirm Password do not match");
          console.log("Password and Confirm Password do not match");
          return;
      }

      setRegLoading(true);

      const payload: INewUser = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          phone: values.phoneCode + values.phone,
          role: values.role,

      }
      console.log({payload})
      await register(payload);
      setRegLoading(false);
    }

    useEffect(() => {
        checkFormValid();
    }, [checkFormValid])

    return (
        <form 
            className="w-full md:w-[600px] mx-auto px-8 py-[1.375rem] grid gap-10 bg-col-1"
            onSubmit={handleCreateAccount}
        >
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <div className="grid md:flex items-center gap-10 md:gap-4">
              <Input
                name="firstName"
                value={values.firstName}
                changeHandler={handleChange}
                placeholder="First name"
              />
              <Input
                name="lastName"
                value={values.lastName}
                changeHandler={handleChange}
                placeholder="Last name"
              />
            </div>
            <Input
              name="email"
              type="email"
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
              name="role"
              optionsArray={userCategories}
              value={values.role}
              changeHandler={handleChange}
              placeholder="Categories"
              borders={true}
            />
            <p className="text-subtitle1-2 text-center">
              Or use one of these options
            </p>
            <div className="flex justify-between gap-8 mx-auto ">
              <OutlineButton
                // link="/login"
                type="button"
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
                // link="/login"
                type="button"
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
              text={regLoading ? "Creating Account..." : "Create account"}
              colour="blue"
              width="[90px]"
              type="submit"
              disabled={!formValid || regLoading}
            />
            <p className="text-sm font-medium text-center max-w-sm mx-auto">
              Already registered?{" "}
              <Link href="/login" className="text-pri-blue">
                Sign in
              </Link>
            </p>
        </form>
    )
}

export default SignupForm;