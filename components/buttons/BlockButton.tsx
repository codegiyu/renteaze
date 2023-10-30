import Image from "next/image";
import Link from "next/link";

const BlockButton: React.FC<ColoredButtonProps> = ({
    type = 'button',
    fullWidth = false,
    link = "",
    clickHandler,
    colour = "blue",
    width = "full",
    text,
    leftIcon = "",
    rightIcon = "",
    styles = {},
    textStyles = {},
    ...props
}) => {
    const className = "block-btn w-full " + colour;
    const {width: btnWidth, height: btnHeight} = styles;

    if (link) return (
        <Link href={link} className="w-full" style={{width: btnWidth, height: btnHeight}}>
            <button
                type={type}
                className={className}
                style={styles}
                {...props}
            >
                {leftIcon ? (
                    <div className="w-4 h-4 lg:w-8 lg:h-8">
                        <Image
                            src={leftIcon}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                ) : null}
                <span className='w-max' style={textStyles}>
                    {text}
                </span>
                {rightIcon ? (
                    <div className="w-4 h-4 lg:w-8 lg:h-8">
                    <Image
                        src={rightIcon}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                ) : null}
            </button>
        </Link>
    )
    else return (
        <button
            type={type}
            className={className}
            onClick={clickHandler}
            style={styles}
            {...props}
        >
            {leftIcon ? (
                <div className="w-4 h-4 lg:w-8 lg:h-8">
                    <Image
                        src={leftIcon}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            ) : null}
            <span className='w-max' style={textStyles}>
                {text}
            </span>
            {rightIcon ? (
                <div className="w-4 h-4 lg:w-8 lg:h-8">
                <Image
                    src={rightIcon}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            ) : null}
        </button>
    )
}

export default BlockButton