// import errorIcon from "../../assets/icons/error-icon.svg";
import Image from "next/image";
import caret from "../../public/icons/chevron-down.svg";
import { useRef, useState } from "react";

const SelectWithPicture: React.FC<Select> = ({
    name = "",
    value,
    label = "",
    borders = true,
    placeholder = "",
    optionsArray = [],
    labelStyles = {},
    inputStyles = {},
    absolute = false,
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
    const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
    const [selectedPic, setSelectedPic] = useState<string>(optionsArray.find((item) => item.value === value)?.image || "");
    const [dropdownPosition, setDropdownPosition] = useState<"top"|"bottom">("bottom");
    const selectRef = useRef<HTMLDivElement>(null);

    const toggleOptions = () => {
        setOptionsOpen((prevState: boolean) => !prevState);
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLDivElement;
        const coordinates = target.getBoundingClientRect();
        const { bottom } = coordinates;
        // console.log(coordinates);

        if (bottom + 300 > window.innerHeight) {
            setDropdownPosition("top");
        } else {
            setDropdownPosition("bottom");
        }
        toggleOptions();
    }

    const handleKeyup = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const target = e.currentTarget as HTMLDivElement;
        e.preventDefault();
        e.stopPropagation();
        if (e.code === '13') {
            console.log("13")
          target.click();
        }
    };

    const handleOptionsClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget as HTMLDivElement;
        const newValue = target.dataset.value;
        const select = selectRef.current as HTMLSelectElement | null;
        
        if (select && newValue) {
            select.value = newValue;
            const newImage = optionsArray.find((item) => item.value === newValue)?.image || ""
            setSelectedPic(newImage);

            toggleOptions();
            
            if (changeHandler) {
                // Call the changeHandler with the new value
                changeHandler({
                    target: select as unknown as React.ChangeEvent<HTMLSelectElement>,
                });
            }
        }
        toggleOptions();
    }

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
        setIsFocused(true);
        focusHandler ? focusHandler(e) : null;
    }

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
        setIsFocused(false);
        blurHandler ? blurHandler(e) : null;
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLSelectElement>) => {
        setIsHovered(true);
        mouseEnterHandler ? mouseEnterHandler(e) : null;
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLSelectElement>) => {
        setIsHovered(false);
        mouseLeaveHandler ? mouseLeaveHandler(e) : null;
    }

    return (
        <label className={`select-wrap ${errMsg ? "error" : ""} ${isFocused ? "is-focused" : ""} ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}>
            {label ? (
                <span className="select-label" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <div className="select" tabIndex={1}>
                <div className={`header picture-select ${borders ? "has-borders" : ""}`} ref={selectRef} onClick={handleClick} >
                    <Image 
                        src={selectedPic}
                        alt=""
                        width={24}
                        height={18}
                        loading="eager"
                    />
                    <span className={`select-text ${value ? "" : "placeholder"}`}>
                        {optionsArray.find((item: SelectOptionProps) => item.value === value)?.text || placeholder}
                    </span>
                    <Image 
                        src={caret}
                        alt=""
                        width={24}
                        height={24}
                    />
                    <select
                        name={name}
                        className=""
                        value={value}
                        disabled={disabled}
                        style={inputStyles}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {console.log("Target value: ", e.target.value); changeHandler ? changeHandler(e) : null}}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        tabIndex={-1}
                        {...props}
                    >
                        <option value="" disabled></option>
                        {optionsArray.length ? (
                            optionsArray.map((item: SelectOptionProps, idx: number) => (
                                <option 
                                    key={idx} 
                                    value={item.value}
                                >
                                    {item.text}
                                </option>
                            ))
                        ) : null}
                    </select>
                </div>
                <datalist className={`options-dropdown ${optionsOpen ? "grid" : "hidden"}
                    ${absolute ? `absolute ${dropdownPosition === "bottom" ? `${borders ? "top-[60px]" : "top-[40px]"}` : `${borders ? "bottom-[60px]" : "bottom-[40px]"}`}` : "relative"}`
                    // ${optionsOpen ? "grid opacity-100 max-h-[150px] p-3" : "hidden opacity-0 max-h-0"}
                }
                >
                    {optionsArray.length ? (
                        optionsArray.map((item: SelectOptionProps, idx: number) => (
                            <div 
                                key={idx}
                                tabIndex={idx + 1}
                                data-value={item.value} 
                                onClick={handleOptionsClick}
                                onKeyUp={handleKeyup}
                                className={`option ${item.value === value ? "bg-light-3 text-white" : "text-gray-9"}`}
                            >
                                <div className="p-1 flex items-center gap-3">
                                    <Image 
                                        src={item.image || ""}
                                        alt=""
                                        width={24}
                                        height={18}
                                        loading="eager"
                                    />
                                    <p className="flex-1">{item.text}</p>
                                </div>
                            </div> 
                        ))
                    ) : null}
                </datalist>
            </div>
        
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

export default SelectWithPicture;