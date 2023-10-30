import Input from "./Input";
import SelectWithPicture from "./SelectWithPicture";


const CompoundPhoneInput: React.FC<CompoundPhoneInputProps> = ({
    phoneCodeName, 
    phoneCodeValue, 
    phoneCodeOptions, 
    phoneName, 
    phoneValue, 
    placeholder = "",
    label = "",
    labelStyles = {},
    changeHandler, 
    disabled = false, 
    errMsg = ""
}) => {

    return (
        <div className="w-full grid gap-2">
            {label ? (
                <span className="label" style={labelStyles}>
                    {label}
                </span>
            ) : null
            }
            <div 
                className="w-full bg-white grid items-center grid-cols-[100px_1fr] gap-4 p-4 rounded border-gray-8/75 hover:border-gray-9 outline-none 
                focus:border-gray-9 border-[0.4px] shadow-er-1dp focus:shadow-[0_0_0_2px_#E2E8F0]"
            >
                <div className="w-full border-r-[0.6px] border-dark-1">
                    <SelectWithPicture
                        name={phoneCodeName}
                        value={phoneCodeValue}
                        optionsArray={phoneCodeOptions}
                        changeHandler={changeHandler}
                        disabled={disabled}
                        borders={false}
                        absolute={true}
                    />
                </div>
                <div className="w-full">
                    <Input
                        type="number"
                        name={phoneName}
                        value={phoneValue}
                        placeholder={placeholder}
                        changeHandler={changeHandler}
                        disabled={disabled}
                        borders={false}
                    />
                </div>
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
        </div>
    )
}

export default CompoundPhoneInput