import RoundedButton from "@/components/buttons/RoundedButton"


const PropertyControls: React.FC = () => {

    return (
        <section className="container-120">
            <div className="w-[90%] md:w-[76%] p-4 grid gap-4 bg-white mx-auto shadow-s2 translate-y-[-50%] relative z-[3]">
                <div className="grid gap-3">
                    <div className="flex gap-4 items-center">
                        <span className="text-dark-1 text-subtitle1-2 ">Filter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10.0001 11.3333H15.3334V12.6667H10.0001V11.3333ZM8.66673 13.2533C8.6934 13.4533 8.62674 13.6667 8.48007 13.8067C8.2134 14.0667 7.7934 14.0667 7.5334 13.8067L4.86007 11.1333C4.70673 10.98 4.64007 10.7733 4.66673 10.58V7.16667L1.4734 3.08C1.24673 2.79333 1.30007 2.37333 1.58673 2.14667C1.7134 2.05333 1.8534 2 2.00007 2H11.3334C11.4801 2 11.6201 2.05333 11.7467 2.14667C12.0334 2.37333 12.0867 2.79333 11.8601 3.08L8.66673 7.16667V13.2533ZM3.36007 3.33333L6.00007 6.71333V10.3867L7.3334 11.72V6.7L9.9734 3.33333H3.36007Z" fill="#00011B"/>
                        </svg>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        <div className="w-full md:w-[200px] h-10 bg-blue-500"></div>
                        <div className="w-full md:w-[200px] h-10 bg-blue-500"></div>
                        <div className="w-full md:w-[200px] h-10 bg-blue-500"></div>
                        <div className="w-full md:w-[156px] h-10 bg-blue-500"></div>
                        <div className="w-full md:w-[156px] h-10 bg-blue-500"></div>
                        <div className="w-full md:w-[156px] h-10 bg-blue-500"></div>
                    </div>
                </div>
                <div className="w-full md:w-[300px]">
                    <RoundedButton
                        text="Search now"
                        colour="red"
                        styles={{ width: "100%" }}
                        // clickHandler={() => {}}
                    />
                </div>
            </div>
            <div 
                className="w-full bg-white py-6 px-10 md:px-20 lg:px-[120px] border-gray-7 border-[0.2px] shadow-s2 flex 
                justify-end gap-8 translate-y-[-100%]"
            >
                <button className="w-fit bg-transparent hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M0.181885 1.05882C0.181885 0.474051 0.655936 0 1.24071 0H6.53483C7.1196 0 7.59365 0.474052 7.59365 1.05882V6.35294C7.59365 6.93771 7.1196 7.41177 6.53483 7.41177H1.24071C0.655936 7.41177 0.181885 6.93771 0.181885 6.35294V1.05882Z" fill="#000236"/>
                        <path d="M10.7701 1.05882C10.7701 0.474051 11.2442 0 11.8289 0H17.1231C17.7078 0 18.1819 0.474052 18.1819 1.05882V6.35294C18.1819 6.93771 17.7078 7.41177 17.1231 7.41177H11.8289C11.2442 7.41177 10.7701 6.93771 10.7701 6.35294V1.05882Z" fill="#000236"/>
                        <path d="M0.181885 11.6471C0.181885 11.0623 0.655936 10.5882 1.24071 10.5882H6.53483C7.1196 10.5882 7.59365 11.0623 7.59365 11.6471V16.9412C7.59365 17.5259 7.1196 18 6.53483 18H1.24071C0.655936 18 0.181885 17.5259 0.181885 16.9412V11.6471Z" fill="#000236"/>
                        <path d="M10.7701 11.6471C10.7701 11.0623 11.2442 10.5882 11.8289 10.5882H17.1231C17.7078 10.5882 18.1819 11.0623 18.1819 11.6471V16.9412C18.1819 17.5259 17.7078 18 17.1231 18H11.8289C11.2442 18 10.7701 17.5259 10.7701 16.9412V11.6471Z" fill="#000236"/>
                    </svg>
                </button>
                <button className="w-fit bg-transparent hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M0.181885 2.04545C0.181885 0.915781 1.09767 0 2.22734 0H16.9546C18.0843 0 19.0001 0.915781 19.0001 2.04545C19.0001 3.17513 18.0843 4.09091 16.9546 4.09091H2.22734C1.09767 4.09091 0.181885 3.17513 0.181885 2.04545Z" fill="#000236"/>
                        <path d="M0.181885 9C0.181885 8.09626 0.91451 7.36364 1.81825 7.36364H17.3637C18.2674 7.36364 19.0001 8.09626 19.0001 9C19.0001 9.90374 18.2674 10.6364 17.3637 10.6364H1.81825C0.914509 10.6364 0.181885 9.90374 0.181885 9Z" fill="#000236"/>
                        <path d="M0.181885 15.9545C0.181885 14.8249 1.09767 13.9091 2.22734 13.9091H16.9546C18.0843 13.9091 19.0001 14.8249 19.0001 15.9545C19.0001 17.0842 18.0843 18 16.9546 18H2.22734C1.09767 18 0.181885 17.0842 0.181885 15.9545Z" fill="#000236"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default PropertyControls