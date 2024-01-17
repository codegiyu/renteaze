import Image from "next/image"


const ImageTextFlex: React.FC<ImageTextFlexProps> = ({ image, imageAlt = "", text, reversed = false }) => {

    return (
        <div className={`grid md:flex gap-10 justify-center my-16`}>
            <div className={`${reversed ? "order-1 md:order-2" : "order-1"} flex-[1_0_0]`}>
                <Image src={image} alt={imageAlt} className="w-full" />
            </div>
            <div className={`${reversed ? "order-2 md:order-1" : "order-2"} items-start flex-[1_0_0] text-subtitle2-2`}>
                <p>
                   { text }
                </p>
            </div>
        </div>
    )
}

export default ImageTextFlex;