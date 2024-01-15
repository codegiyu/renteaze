"use client";
import React from "react";
import Input from "./forms/Input";
import RoundedButton from "./buttons/RoundedButton";

const Cta = () => {
  return (
    <section className="bg-compli-1 py-10 container-120 mb-8">
      <div className="text-center flex flex-col items-center gap-8 w-full">
        <div className="text-dark-1 space-y-2">
          <h4 className="text-body1-1">
            We invite you to enlist for our Newsletter
          </h4>
          <p className="text-xs">
            sign up and we&apos;ll send the best property updates
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full max-w-xl mx-auto md:flex-row">
          <Input type="email" placeholder="enter your email" />
          <RoundedButton
            colour="blue"
            text="send"
            styles={{
              width: "50%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
