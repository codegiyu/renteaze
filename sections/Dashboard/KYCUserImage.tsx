"use client";
import React, { useRef, useState } from "react";
import camera from "@/public/icons/camera.svg";
import Image from "next/image";

const KYCUserImage: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [photoDisplay, setPhotoDisplay] = useState<string>("");
    const [photoFile, setPhotoFile] = useState<File | null>(null);
  
    const handleEditClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    const setProfilePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
        const photo: File | null = e.target.files[0];
        console.log(photo);
  
        setPhotoFile(photo);
        setPhotoDisplay(URL.createObjectURL(photo));
      } 
    }

    return (
        <div className="relative w-[80px] h-[80px] -bottom-14 bg-col-1 rounded-full border-2 border-white">
            {photoDisplay ? (
                <Image src={photoDisplay} alt="user pic" className="rounded-full" fill />
            ) : null}
            
            <div className="w-fit cursor-pointer absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%] z-10">
              <Image
                src={camera}
                onClick={handleEditClick}
                alt="camera"
                width={70}
                height={70}
              />
              <input
                type="file"
                accept="image/*"
                multiple={false}
                ref={fileInputRef}
                onChange={setProfilePhoto}
                style={{ display: "none" }}
              />
            </div>
        </div>
    )
}

export default KYCUserImage;