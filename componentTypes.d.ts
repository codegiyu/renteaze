import { CSSProperties, HTMLInputTypeAttribute } from "react";

export {}

declare global {
    interface ComponentWithChildrenOnly {
        children: React.ReactNode;
    }

    interface GeneralInputProps<T> {
        name?: string;
        value?: string;
        label?: string;
        labelStyles?: CSSProperties;
        inputStyles?: CSSProperties;
        changeHandler?: (e: React.ChangeEvent<T>) => void;
        blurHandler?: (e: React.FocusEvent<T>) => void;
        focusHandler?: (e: React.FocusEvent<T>) => void;
        mouseEnterHandler?: (e: React.MouseEvent<T>) => void;
        mouseLeaveHandler?: (e: React.MouseEvent<T>) => void;
        disabled?: boolean;
        errMsg?: string;
        infoMsg?: string;
    }

    interface GeneralButtonProps {
        type?: "button" | "submit" | "reset";
        fullWidth?: boolean;
        link?: string;
        clickHandler?: () => void;
        width?: string;
        text: string;
        leftIcon?: string;
        rightIcon?: string;
        styles?: CSSProperties;
        textStyles?: CSSProperties;
    }

    interface InputProps extends GeneralInputProps<HTMLInputElement|HTMLSelectElement> {
        type?: HTMLInputTypeAttribute;
        placeholder?: string;
        borders?
    }

    interface SelectOptionProps {
        text: string;
        value: string;
        image?: string;
    }

    interface Select extends GeneralInputProps<HTMLInputElement|HTMLSelectElement> {
        placeholder?: string;
        optionsArray: SelectOptionProps[];
        borders?: boolean;
        absolute?: boolean;
    }

    interface CompoundPhoneInputProps {
        phoneCodeName: string; 
        phoneCodeValue: string; 
        phoneCodeOptions: SelectOptionProps[];
        phoneName: string; 
        phoneValue: string; 
        placeholder?: string; 
        label?: string;
        labelStyles?: CSSProperties;
        changeHandler: (e: React.ChangeEvent<T>) => void; 
        disabled?: boolean; 
        errMsg?: string;
    }

    interface ColoredButtonProps extends GeneralButtonProps {
        colour: "blue" | "red";
    }

    interface ContactDataSingleProps {
        icon: string;
        text: string;
        type: "mail" | "tel" | "others";
    }
}

export type SideProps = {
  title: string;
  icon?: string | StaticImport;
  path: string;
};