import { CSSProperties, HTMLInputTypeAttribute } from "react";

export {}

declare global {
    interface ComponentWithChildrenOnly {
        children: React.ReactNode;
    }

    interface GeneralInputProps<T> {
        name: string;
        value: string;
        label?: string;
        labelStyles?: CSSProperties;
        inputStyles?: CSSProperties;
        changeHandler?: (e?: React.ChangeEvent<T>) => void;
        blurHandler?: (e?: React.FocusEvent<T>) => void;
        focusHandler?: (e?: React.FocusEvent<T>) => void;
        mouseEnterHandler?: (e?: React.MouseEvent<T>) => void;
        mouseLeaveHandler?: (e?: React.MouseEvent<T>) => void;
        disabled?: boolean;
        errMsg?: string;
        infoMsg?: string;
    }

    interface GeneralButtonProps {
        type?: "button" | "submit" | "reset";
        fullWidth?: boolean;
        clickHandler?: () => void;
        width?: string;
        text: string;
        leftIcon?: string;
        rightIcon?: string;
        styles?: CSSProperties;
        textStyles?: CSSProperties;
    }

    interface InputProps extends GeneralInputProps<HTMLInputElement> {
        type: HTMLInputTypeAttribute;
        placeholder: string;
    }

    interface SelectOptionProps {
        text: string;
        value: string;
        image?: string;
    }

    interface SelectWithPictureProps extends GeneralInputProps<HTMLSelectElement> {
        optionsArray: SelectOptionProps[];
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