"use client";
import Image from "next/image";
import Link from "next/link";

const RoundedButton: React.FC<ColoredButtonProps> = ({
  type = "button",
  fullWidth = false,
  link = "",
  clickHandler,
  colour = "blue",
  text,
  leftIcon = "",
  rightIcon = "",
  styles = {},
  textStyles = {},
  ...props
}) => {
  const className = "rounded-btn w-full disabled:opacity-40 " + colour;
  const { width: btnWidth, height: btnHeight } = styles;

  if (link)
    return (
      <Link
        href={link}
        className="w-full"
        style={{ width: btnWidth, height: btnHeight }}
      >
        <button type={type} className={className} style={styles} {...props}>
          {leftIcon ? (
            <div className="relative w-8 h-8">
              <Image src={leftIcon} alt="" fill className="object-cover" />
            </div>
          ) : null}
          <span className="w-max" style={textStyles}>
            {text}
          </span>
          {rightIcon ? (
            <div className="relative w-8 h-8">
              <Image src={rightIcon} alt="" fill className="object-cover" />
            </div>
          ) : null}
        </button>
      </Link>
    );
  else
    return (
      <button
        type={type}
        className={className}
        onClick={clickHandler}
        style={styles}
        {...props}
      >
        {leftIcon ? (
          <div className="relative w-8 h-8">
            <Image src={leftIcon} alt="" fill className="object-cover" />
          </div>
        ) : null}
        <span className="w-max" style={textStyles}>
          {text}
        </span>
        {rightIcon ? (
          <div className="relative w-8 h-8">
            <Image src={rightIcon} alt="" fill className="object-cover" />
          </div>
        ) : null}
      </button>
    );
};

export default RoundedButton;
