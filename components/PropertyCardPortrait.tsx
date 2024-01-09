import Image from "next/image"
import PropertyBadge from "./PropertyBadge"
import RoundedButton from "./buttons/RoundedButton"
import RatingStarsGroup from "./RatingStarsGroup"


const PropertyCardPortrait: React.FC<PropertyListSingle> = ({
    id,
    grade,
    acquisitionType,
    image,
    price,
    name,
    rating,
    intro,
    features: {
        bed,
        toilet,
        car,
        meter,
        pets,
        goodRoads
    },
    condition
}) => {

    return (
        <div className="w-full h-fit  py-4 px-5 masonry-item">
            <div className="w-full h-fit rounded-xl overflow-hidden shadow-s1">
                <figure className="w-full p-0 relative">
                    <Image src={image} alt={`property-${id}`} className="w-full h-auto aspect-auto" />
                    <div className="absolute top-0 left-0 w-full h-full p-[0.875rem] bg-transparent flex flex-col justify-between z-[2]">
                        <div className="w-full flex items-center justify-between">
                            <PropertyBadge text={grade} />
                            <PropertyBadge color="red" text={`FOR ${acquisitionType}`} />
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <span className="text-white font-openSans font-medium text-[10px] leading-[0.6875rem] tracking-[0.032px]">
                                {`₦ ${price.toLocaleString()}${acquisitionType === "RENT" ? "/ANM" : ""}`}
                            </span>
                            <div className="flex items-center gap-[10px]">
                                <button className="w-fit bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="15" viewBox="0 0 11 10" fill="none">
                                        <path d="M6.74426 5.54514L8.67507 7.47595L8.09582 8.05519L6.16502 6.12439V5.81932L6.06075 5.71119C5.62053 6.08963 5.04901 6.31747 4.42729 6.31747C3.76158 6.31747 3.12314 6.05302 2.65241 5.58229C2.18169 5.11156 1.91724 4.47312 1.91724 3.80741C1.91724 3.14171 2.18169 2.50327 2.65241 2.03254C3.12314 1.56181 3.76158 1.29736 4.42729 1.29736C5.09299 1.29736 5.73144 1.56181 6.20216 2.03254C6.67289 2.50327 6.93734 3.14171 6.93734 3.80741C6.93734 4.42914 6.7095 5.00065 6.33107 5.44088L6.43919 5.54514H6.74426ZM4.42729 5.54514C5.39269 5.54514 6.16502 4.77282 6.16502 3.80741C6.16502 2.84201 5.39269 2.06969 4.42729 2.06969C3.46188 2.06969 2.68956 2.84201 2.68956 3.80741C2.68956 4.77282 3.46188 5.54514 4.42729 5.54514ZM5.39269 4.0005H4.62037V4.77282H4.23421V4.0005H3.46188V3.61433H4.23421V2.84201H4.62037V3.61433H5.39269V4.0005Z" fill="white"/>
                                    </svg>
                                </button>
                                <button className="w-fit bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10" fill="none">
                                        <path d="M4.96688 7.30218L4.92827 7.3408L4.88579 7.30218C3.05152 5.63782 1.83897 4.53726 1.83897 3.42125C1.83897 2.64893 2.41822 2.06969 3.19054 2.06969C3.78523 2.06969 4.36447 2.45585 4.56914 2.98103H5.2874C5.49206 2.45585 6.07131 2.06969 6.666 2.06969C7.43832 2.06969 8.01756 2.64893 8.01756 3.42125C8.01756 4.53726 6.80501 5.63782 4.96688 7.30218ZM6.666 1.29736C5.99407 1.29736 5.34918 1.61015 4.92827 2.10058C4.50735 1.61015 3.86246 1.29736 3.19054 1.29736C2.00116 1.29736 1.06665 2.22801 1.06665 3.42125C1.06665 4.87708 2.3796 6.07032 4.36833 7.8737L4.92827 8.38343L5.4882 7.8737C7.47694 6.07032 8.78989 4.87708 8.78989 3.42125C8.78989 2.22801 7.85537 1.29736 6.666 1.29736Z" fill="white"/>
                                    </svg>
                                </button>
                                <button className="w-fit bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="15" viewBox="0 0 11 10" fill="none">
                                        <g clipPath="url(#clip0_588_1815)">
                                            <path d="M5.46403 7.86211C3.76106 7.86211 2.37474 6.47578 2.37474 4.77281C2.37474 3.06984 3.76106 1.68352 5.46403 1.68352C7.16701 1.68352 8.55333 3.06984 8.55333 4.77281C8.55333 6.47578 7.16701 7.86211 5.46403 7.86211ZM5.46403 0.911194C4.95692 0.911194 4.45477 1.01108 3.98626 1.20514C3.51774 1.39921 3.09204 1.68365 2.73346 2.04224C2.00926 2.76643 1.60242 3.74865 1.60242 4.77281C1.60242 5.79698 2.00926 6.77919 2.73346 7.50339C3.09204 7.86197 3.51774 8.14642 3.98626 8.34048C4.45477 8.53455 4.95692 8.63443 5.46403 8.63443C6.4882 8.63443 7.47042 8.22758 8.19461 7.50339C8.9188 6.77919 9.32565 5.79698 9.32565 4.77281C9.32565 4.2657 9.22577 3.76355 9.0317 3.29503C8.83764 2.82652 8.55319 2.40082 8.19461 2.04224C7.83603 1.68365 7.41033 1.39921 6.94181 1.20514C6.4733 1.01108 5.97115 0.911194 5.46403 0.911194ZM5.8502 2.842H5.07787V4.38665H3.53323V5.15897H5.07787V6.70362H5.8502V5.15897H7.39484V4.38665H5.8502V2.842Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_588_1815">
                                            <rect width="9.26788" height="9.26788" fill="white" transform="translate(0.830322 0.138855)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </figure>

                <div className="w-full p-3 bg-white grid gap-[0.875rem]">
                    <div className="w-full grid gap-[0.625rem]">
                        <div className="w-full grid gap-[0.3rem]">
                            <div className="w-full flex items-center justify-between">
                                <span className="font-openSans font-semibold text-[0.625rem] leading-[0.875rem] tracking-[0.15px] text-dark-1">
                                    {name}
                                </span>
                                <div className="rating">
                                    <RatingStarsGroup rating={rating} />
                                </div>
                            </div>
                            <p className="text-gray-5 font-openSans font-medium text-[10px] leading-[0.6875rem] tracking-[0.032px]">
                                {intro}
                            </p>
                        </div>
                        <div className="w-full grid gap-[0.3rem] font-openSans font-medium text-[10px] leading-[0.6875rem] text-dark-1">
                            <span className="font-semibold tracking-[0.008px]">
                                APARTMENT
                            </span>
                            <div className="w-full flex items-center justify-between flex-wrap gap-[0.3rem]">
                                {bed ? (
                                    <div className="w-max flex items-center gap-[0.3rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <path d="M7.33714 3.66249H4.24785V6.36562H1.15855V2.89017H0.38623V8.68259H1.15855V7.52411H8.10947V8.68259H8.88179V5.20714C8.88179 4.79747 8.71905 4.40458 8.42937 4.11491C8.1397 3.82523 7.74681 3.66249 7.33714 3.66249ZM2.7032 5.97946C3.01045 5.97946 3.30512 5.85741 3.52237 5.64015C3.73963 5.42289 3.86169 5.12823 3.86169 4.82098C3.86169 4.51373 3.73963 4.21906 3.52237 4.0018C3.30512 3.78455 3.01045 3.66249 2.7032 3.66249C2.39595 3.66249 2.10129 3.78455 1.88403 4.0018C1.66677 4.21906 1.54472 4.51373 1.54472 4.82098C1.54472 5.12823 1.66677 5.42289 1.88403 5.64015C2.10129 5.85741 2.39595 5.97946 2.7032 5.97946Z" fill="#333333"/>
                                        </svg>
                                        <span>{bed + " beds"}</span>
                                    </div>
                                ) : null}
                                {toilet ? (
                                    <div className="w-max flex items-center gap-[0.3rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <g clipPath="url(#clip0_588_1846)">
                                                <path d="M8.18888 6.3656V6.75176C8.18888 7.48933 7.77569 8.13036 7.16555 8.45474L7.41656 9.45489H6.64423L6.45115 8.68257C6.3855 8.68257 6.32372 8.68257 6.25807 8.68257H3.16878C3.10313 8.68257 3.04134 8.68257 2.9757 8.68257L2.78262 9.45489H2.01029L2.2613 8.45474C1.65116 8.13036 1.23797 7.48933 1.23797 6.75176V6.3656H0.851807V5.59328H7.80272V2.89014C7.80272 2.78773 7.76203 2.68951 7.68961 2.61709C7.6172 2.54467 7.51897 2.50398 7.41656 2.50398C7.22348 2.50398 7.07673 2.63528 7.0304 2.80905C7.27368 3.01758 7.41656 3.32651 7.41656 3.66247H5.09959C5.09959 3.35522 5.22164 3.06055 5.4389 2.84329C5.65616 2.62604 5.95082 2.50398 6.25807 2.50398C6.28124 2.50398 6.30055 2.50398 6.32372 2.50398C6.48205 2.05603 6.91069 1.73166 7.41656 1.73166C7.72381 1.73166 8.01847 1.85371 8.23573 2.07097C8.45299 2.28823 8.57504 2.58289 8.57504 2.89014V6.3656H8.18888ZM7.41656 6.3656H2.01029V6.75176C2.01029 7.05901 2.13235 7.35368 2.3496 7.57093C2.56686 7.78819 2.86153 7.91025 3.16878 7.91025H6.25807C6.56532 7.91025 6.85999 7.78819 7.07724 7.57093C7.2945 7.35368 7.41656 7.05901 7.41656 6.75176V6.3656Z" fill="#333333"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_588_1846">
                                                <rect width="9.26788" height="9.26788" fill="white" transform="translate(0.0795898 0.95932)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>{toilet + " toilets"}</span>
                                    </div>
                                ) : null}
                                {car ? (
                                    <div className="w-max flex items-center gap-[0.3rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <path d="M7.45784 3.27633C7.38061 3.04463 7.14891 2.89017 6.91722 2.89017H2.66944C2.39912 2.89017 2.20604 3.04463 2.12881 3.27633L1.31787 5.5933V8.68259C1.31787 8.87567 1.51095 9.06876 1.70403 9.06876H2.09019C2.32189 9.06876 2.47636 8.87567 2.47636 8.68259V8.29643H7.1103V8.68259C7.1103 8.87567 7.30338 9.06876 7.49646 9.06876H7.88262C8.0757 9.06876 8.26878 8.87567 8.26878 8.68259V5.5933L7.45784 3.27633ZM2.78529 3.66249H6.76275L7.18753 4.82098H2.39912L2.78529 3.66249ZM7.49646 7.52411H2.09019V5.5933H7.49646V7.52411ZM3.0556 5.97946C3.36453 5.97946 3.63484 6.24977 3.63484 6.5587C3.63484 6.86763 3.36453 7.13795 3.0556 7.13795C2.74667 7.13795 2.47636 6.86763 2.47636 6.5587C2.47636 6.24977 2.74667 5.97946 3.0556 5.97946ZM6.53105 5.97946C6.83998 5.97946 7.1103 6.24977 7.1103 6.5587C7.1103 6.86763 6.83998 7.13795 6.53105 7.13795C6.22213 7.13795 5.95181 6.86763 5.95181 6.5587C5.95181 6.24977 6.22213 5.97946 6.53105 5.97946Z" fill="#333333"/>
                                        </svg>
                                        <span>{car + " cars"}</span>
                                    </div>
                                ) : null}
                                {meter ? (
                                    <div className="w-max flex items-center gap-[0.3rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <path d="M6.41788 2.50398H6.03171V1.73166H5.25939V2.50398H4.48707V1.73166H3.71474V2.50398H3.32858C2.47517 2.50398 1.78394 3.19521 1.78394 4.04863V7.91025C1.78394 8.76366 2.47517 9.45489 3.32858 9.45489H6.41788C7.27129 9.45489 7.96252 8.76366 7.96252 7.91025V4.04863C7.96252 3.19521 7.27129 2.50398 6.41788 2.50398ZM4.87323 7.91025C4.34033 7.91025 3.90783 7.48547 3.90783 6.96029C3.90783 6.53937 4.07387 6.42352 4.87323 5.49674C5.66486 6.4158 5.83863 6.53937 5.83863 6.96029C5.83863 7.48547 5.40613 7.91025 4.87323 7.91025ZM6.41788 4.82095H3.32858V4.04863H6.41788V4.82095Z" fill="#333333"/>
                                        </svg>
                                        <span>meter</span>
                                    </div>
                                ) : null}
                                {pets ? (
                                    <div className="w-max flex items-center gap-[0.3rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <path d="M7.65545 2.1178L6.1108 3.66244L7.26929 4.82093L7.65545 4.43477L8.04161 4.82093L8.81393 4.04861L7.65545 2.89012V2.1178ZM1.47686 3.66244L1.0907 4.04861L2.24918 5.20709V6.36558L1.86302 6.75174V9.06871H2.63535V7.91022L3.40767 6.75174H6.1108V9.06871H6.88312V5.20709L5.72464 4.04861L5.33848 4.43477H2.24918L1.47686 3.66244Z" fill="#333333"/>
                                        </svg>
                                        <span>pets</span>
                                    </div>
                                ) : null}
                                {goodRoads ? (
                                    <div className="w-max flex items-center gap-[0.3rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                            <path d="M7.38807 2.81287C7.34945 2.61979 7.19499 2.50394 7.00191 2.50394H5.41864L5.49588 3.66242H4.56909L4.64632 2.50394H3.02444C2.83136 2.50394 2.6769 2.6584 2.63828 2.81287L1.59564 8.21913C1.55703 8.45083 1.75011 8.68252 1.98181 8.68252H4.26016L4.37601 6.75172H5.68896L5.80481 8.68252H8.04454C8.27624 8.68252 8.46932 8.45083 8.43071 8.21913L7.38807 2.81287ZM4.41462 5.97939L4.49186 4.43475H5.49588L5.57311 5.97939H4.41462Z" fill="#333333"/>
                                        </svg>
                                        <span>good roads</span>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="w-max flex flex-col justify-between font-openSans font-medium text-[10px] leading-[0.6875rem] text-dark-1">
                            <span className="font-semibold tracking-[0.008px]">
                                CONDITION
                            </span>
                            <span className="tracking-[0.032px]">
                                {condition === "NEW" ? "Newly/" : ""}
                                <span className="text-gray-7">Serviced</span>
                            </span>
                        </div>
                        <RoundedButton 
                            text="Start a chat" 
                            colour="red" 
                            styles={{ 
                                width: "98px", 
                                padding: "9px",
                            }} 
                            textStyles={{
                                fontFamily: '"Open Sans", sans-serif',
                                fontSize: "10px",
                                lineHeight: "12px",
                                fontWeight: "500"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCardPortrait