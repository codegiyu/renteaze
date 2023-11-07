import mail from "@/public/icons/email.svg";
import phone from "@/public/icons/phone.svg";

export const contactBarData: ContactDataSingleProps[] = [
    {
        icon: phone,
        text: "+234 8133 5111 111",
        type: "tel"
    },
    {
        icon: mail,
        text: "info@renteazeproperty.com",
        type: "mail"
    }
]

export const userCategories: SelectOptionProps[] = [
    {
        text: "Agent",
        value: "Agent",
    },
    {
        text: "Developer",
        value: "Developer",
    },
    {
        text: "Landlord",
        value: "Landlord",
    },
    {
        text: "User",
        value: "User",
    },
]
export const gender: SelectOptionProps[] = [
    {
        text: "Male",
        value: "Male",
    },
    {
        text: "Female",
        value: "Female",
    },
]