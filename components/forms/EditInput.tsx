// import errorIcon from "../../assets/icons/error-icon.svg";
import { useState } from "react";
import BlockButton from "../buttons/BlockButton";

const EditInput: React.FC<InputProps> = ({
  type = "text",
  name = "",
  value,
  borders = false,
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
  btnText = "",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    focusHandler ? focusHandler(e) : null;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    blurHandler ? blurHandler(e) : null;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsHovered(true);
    mouseEnterHandler ? mouseEnterHandler(e) : null;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsHovered(false);
    mouseLeaveHandler ? mouseLeaveHandler(e) : null;
  };

  return (
    <label
      className={`input-wrap ${errMsg ? "error" : ""} ${
        isFocused ? "is-focused" : ""
      } 
            ${disabled ? "is-disabled" : ""} ${isHovered ? "is-hovered" : ""}`}
    >
      {label ? (
        <span className="input-label font-[600]" style={labelStyles}>
          {label}
        </span>
      ) : null}
      <div className="flex w-full items-center justify-center border-y-[0.4px] border-y-gray-6">
        <input
          type={type}
          name={name}
          className={`input flex-[1_0_0] ${borders ? "has-borders" : ""}`}
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

        {btnText ? (
          <BlockButton
            colour="white"
            text={btnText}
            textStyles={{
              color: "black",
            }}
            styles={{
              width: "100px",
            }}
          />
        ) : null}
      </div>
    </label>
  );
};

export default EditInput;
