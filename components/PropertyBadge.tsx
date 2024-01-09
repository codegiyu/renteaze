

const PropertyBadge: React.FC<PropertyBadgeProps> = ({ color = "blue", text }) => {

    return (
        <div className={`${color === "blue" ? "bg-pri-blue" : "bg-error-1"} min-w-[75px] rounded-[7px] px-1 py-[0px] text-center`}>
            <p className="text-white font-openSans font-medium text-[10px] leading-[20px] tracking-[0.1px] ">
                {text}
            </p>
        </div>
    )
}

export default PropertyBadge;