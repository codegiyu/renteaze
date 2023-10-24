import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const ContactDataSingle: React.FC<ContactDataSingleProps> = ({ icon, text, type = "others" }) => {
  return (
    <>
        {type === "others" ? (
            <div className="text-subtitle2-2 flex items-center gap-3 text-dark-1">
                <span>
                    <Image src={icon} alt="" width={18} height={18} />
                </span>
                <span>{text}</span>
            </div>
        ) : (
            <Link href={`${type === "mail" ? "mailto:" : "tel:"}${text}`}>
                <div className="text-subtitle2-2 flex items-center gap-3 text-dark-1">
                    <span>
                        <Image src={icon} alt="" width={18} height={18} />
                    </span>
                    <span>{text}</span>
                </div>
            </Link>
        )}
    </>
  )
}

export default ContactDataSingle;