import PropTypes from "prop-types";
// import infoIcon from "../../assets/icons/info-icon.svg";
// import errorIcon from "../../assets/icons/error-icon.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

const SelectWithPicture: React.FC<SelectWithPictureProps> = ({
    name,
    value,
    label = "",
    optionsArray = [],
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
    const [currentImage, setCurrentImage] = useState<string>("");

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

    useEffect(() => {
        if (optionsArray.length) {
            const image = optionsArray.find((item: SelectOptionProps) => item.value === value)?.image;
            console.log(image)
            image ? setCurrentImage(image): null;
        }
    }, [optionsArray, value])

    return (
        <label className={`select-with-img-wrap ${errMsg ? "error" : ""} ${isFocused ? "is-focused" : ""} ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}>
            {label ? (
                <span className="input-label" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <div className="flex gap-4 items-center">
                {currentImage ? (
                    <div className="w-[36px] h-[22px]">
                        <Image 
                            src={currentImage}
                            alt=""
                            className="object-cover"
                            fill
                        />
                        {/* <img src={currentImage} alt="" className="object-cover w-full h-full" /> */}
                    </div>
                ) : null}
                <select
                    name={name}
                    className="select-with-img"
                    value={value}
                    disabled={disabled}
                    style={inputStyles}
                    onChange={changeHandler}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    {...props}
                >
                    {optionsArray.length ? (
                        optionsArray.map((item: SelectOptionProps, idx: number) => (
                            <option key={idx} value={item.value} className="bg-bluegray-9 text-white">{item.text}</option>
                        ))
                    ) : null}
                </select>
            </div>
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

export default SelectWithPicture;