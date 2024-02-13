"use client";
import React, { useCallback, useEffect, useState } from "react";
import Input from "@/components/forms/Input";
import google from "@/public/icons/google.svg";
import facebook from "@/public/icons/facebook.svg";
import OutlineButton from "@/components/buttons/OutlineButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import Link from "next/link";
import { useAlertService, useUserService } from "@/app/_services";

interface Values {
    email: string;
    password: string;
}

const SigninForm: React.FC = () => {
    const userService = useUserService();
    const alertService = useAlertService();
    const { login } = userService;
    const { error } = alertService;

    const [formValid, setFormValid] = useState<boolean>(false);
    const [regLoading, setRegLoading] = useState<boolean>(false);
    const [values, setValues] = useState<Values>({
        email: "",
        password: ""
    });
    
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const name = target.name;
        const value = target.value;
    
        setValues((prevState: Values) => ({ ...prevState, [name]: value }));
    };

    const checkFormValid = useCallback(() => {
      if (!values.email || !values.password) {
        console.log({valid: false, values});
        setFormValid(false);
      } else {
        console.log({valid: true, values});
        setFormValid(true);
      }
    }, [values])

    const handleSignIn = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!formValid) {
        error("Please fill all form fields before submitting");
        console.log("Please fill all form fields before submitting");
        return;
      }

      setRegLoading(true);
      
      console.log({values});

      await login(values.email, values.password);
      setRegLoading(false);
    }

    useEffect(() => {
        checkFormValid();
    }, [checkFormValid])

    return (
        <form 
            className="w-full md:w-[478px] mx-auto px-8 py-[1.375rem] grid gap-6 bg-col-1"
            onSubmit={handleSignIn}
        >
            <h2 className="text-xl text-center font-semibold max-w-sm mx-auto mb-4">
              Sign in
            </h2>
            <Input
              name="email"
              type="email"
              value={values.email}
              changeHandler={handleChange}
              placeholder="Enter your email address here"
              label="Email Address"
            />

            <Input
              name="password"
              type="text"
              value={values.password}
              changeHandler={handleChange}
              placeholder="Enter your password"
              label="Password"
            />

            <RoundedButton
              text={regLoading ? "Signing in..." : "Sign in with email"}
              colour="blue"
              width="[90px]"
              type="submit"
              disabled={!formValid || regLoading}
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
              <Link href="*" className="text-pri-blue">
                Terms & conditions
              </Link>{" "}
              and{" "}
              <Link href="*" className="text-pri-blue">
                Privacy{" "}
              </Link>
              statement
            </div>
            <p className="text-sm font-medium text-center max-w-sm mx-auto">
              Not registered?{" "}
              <Link href="/signup" className="text-pri-blue">
                Sign up
              </Link>
            </p>
        </form>
    )
}

export default SigninForm;