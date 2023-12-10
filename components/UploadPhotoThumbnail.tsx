import Image from "next/image"
import { useState } from "react"


const UploadPhotoThumbnail: React.FC<UploadPhotoThumbnailProps> = ({ img, index, setPhotoFiles, setPhotosDisplay }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const deletePhoto = () => {
        setPhotoFiles((prevState) => {
            const files = [...prevState];
            files.splice(index, 1);
            return files;
        })

        setPhotosDisplay((prevState) => {
            const files = [...prevState];
            files.splice(index, 1);
            return files;
        })
    }

    return (
        <div 
            className="h-[70px] w-[70px] overflow-hidden rounded bg-gray-5 relative" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <Image src={img} alt="" fill loading="eager" />
            <div className={`absolute w-full h-full ${isHovered ? "top-0" : "-top-[100%]"} left-0 grid place-items-center bg-[#00000099]
                transition-all ease-in-out duration-300`}>
                <button 
                    className="w-fit h-fit bg-transparent border-none outline-none"
                    onClick={deletePhoto}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#ff2020" d="M10 5h4a2 2 0 1 0-4 0ZM8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5H8.5Zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM14.25 9a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default UploadPhotoThumbnail;