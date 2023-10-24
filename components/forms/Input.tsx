// import infoIcon from "../../assets/icons/info-icon.svg";
// import errorIcon from "../../assets/icons/error-icon.svg";
import { useState } from "react";

const Input: React.FC<InputProps> = ({
    type = "text",
    name,
    value,
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

    const handleFocus = () => {
        setIsFocused(true);
        focusHandler ? focusHandler() : null;
    }

    const handleBlur = () => {
        setIsFocused(false);
        blurHandler ? blurHandler() : null;
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
        mouseEnterHandler ? mouseEnterHandler() : null;
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseLeaveHandler ? mouseLeaveHandler() : null;
    }

    return (
        <label 
            className={`input-wrap ${errMsg ? "error" : ""} ${isFocused ? "is-focused" : ""} 
            ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}
        >
            {label ? (
                <span className="input-label" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <input
                type={type}
                name={name}
                className="input"
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
            {/* {infoMsg ? (
                <div className="input-info flex items-center gap-2">
                    <img src={infoIcon} alt="" className="" />
                    <span className="text-sm lg:text-base text-inp-info">
                        {infoMsg}
                    </span>
                </div>
            ) : null
            }
            {errMsg ? (
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