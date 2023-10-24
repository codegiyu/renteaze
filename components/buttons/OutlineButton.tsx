import Image from "next/image";

const OutlineButton: React.FC<GeneralButtonProps> = ({
    type = 'button',
    fullWidth = false,
    clickHandler,
    width = "full",
    text,
    leftIcon = "",
    rightIcon = "",
    styles = {},
    textStyles = {},
    ...props
}) => {

    return (
        <button
            type={type}
            className={"outline-btn " + "w-" + width}
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

export default OutlineButton