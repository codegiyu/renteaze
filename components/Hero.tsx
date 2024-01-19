import heroImg from "@/public/images/main_hero.png";
import Image from "next/image";

const Hero: React.FC<HeroProps> = ({ imageSrc = heroImg, text = "", overlayOpacity = "00" }) => {

    return (
        <section className="hero-section xl:container-120">
            <div className="bg-blue-500 w-full aspect-square mob:aspect-[1.75] sm:aspect-[2] relative">
                <Image src={imageSrc} alt="Hero image" fill priority />
                {text ? (
                    <div 
                        className="w-full h-full grid place-items-center absolute top-0 left-0 z-[2]"
                        style={{ background: "#000000" + overlayOpacity.slice(0, 2).padStart(2, "0") }}
                    >
                        <p className="w-[85%] md:w-[75%] lg:w-[600px] text-white text-3xl sm:text-4xl lg:text-[48px] leading-[150%] font-semibold text-center">
                            {text}
                        </p>
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default Hero;