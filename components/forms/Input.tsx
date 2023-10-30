// import errorIcon from "../../assets/icons/error-icon.svg";
import { useState } from "react";

const Input: React.FC<InputProps> = ({
    type = "text",
    name = "",
    value,
    borders = true,
    placeholder = "",
    label = "",
    labelStyles = {},
    inputStyles = {},
    changeHandler,
    blurHandler,
    focusHandler,
    mouseEnterHandler,
    mouseLeaveHandler,
    disabled = false,
    errMsg = "",
    infoMsg = "",
    ...props
}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        focusHandler ? focusHandler(e) : null;
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        blurHandler ? blurHandler(e) : null;
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsHovered(true);
        mouseEnterHandler ? mouseEnterHandler(e) : null;
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsHovered(false);
        mouseLeaveHandler ? mouseLeaveHandler(e) : null;
    }

    return (
        <label 
            className={`input-wrap ${errMsg ? "error" : ""} ${isFocused ? "is-focused" : ""} 
            ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}
        >
            {label ? (
                <span className="input-label font-[600]" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <input
                type={type}
                name={name}
                className={`input ${borders ? "has-borders" : ""}`}
                value={value}
                disabled={disabled}
                style={inputStyles}
                onChange={changeHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                placeholder={placeholder}
                {...props}
            />
            {/* {errMsg ? (
                <div className="input-error flex items-center gap-2">
                    <img src={errorIcon} alt="" className="" />
                    <span className="text-sm lg:text-base text-error">
                        {errMsg}
                    </span>
                </div>
            ) : null
            } */}
        </label>
    )
}

export default Input;