"use client";
import RoundedButton from "@/components/buttons/RoundedButton";
import Input from "@/components/forms/Input";
import right from "@/public/icons/arrow-right.svg";

const ContactForm: React.FC = () => {

    return (
        <form className="space-y-4 mt-10">
            <Input label="Your name" placeholder="Enter your name" />
            <Input
                label="Your phone number"
                placeholder="Enter your phone number"
            />
            <Input
                label="Your email"
                placeholder="Enter your Email Address"
            />

            <label
                htmlFor="message"
                className="input-wrap input-label font-[600]"
            >
                Message
                <textarea
                    cols={20}
                    rows={5}
                    className="border-[0.4px] border-gray-6 py-3 px-6 w-full mt-3"
                    placeholder="Message here"
                />
            </label>
            <RoundedButton
                rightIcon={right}
                colour="blue"
                text="Send Message"
                styles={{
                    width: "183px",
                }}
            />
        </form>
    )
}

export default ContactForm;