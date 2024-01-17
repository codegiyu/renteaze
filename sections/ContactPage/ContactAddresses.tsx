import Image from "next/image";
import facebook from "../../public/icons/socials/facebook.svg";
import insta from "../../public/icons/socials/insta.svg";
import linkedin from "../../public/icons/socials/linkedin.svg";
import twitter from "../../public/icons/socials/twitter.svg";

const ContactAddresses: React.FC = () => {

    return (
        <section className="space-y-3 text-dark-1">
            <h4 className="text-h6-2">Contact info</h4>
            <p className="  text-subtitle2-2">
            No. 34a Zenth Avenue, Obafemi Awolowo Rd, Ikeja, NIGERIA
            </p>
            <p className="text-subtitle1-1 ">
            email: servicecare@renteaze.com
            </p>
            <p className="text-body2-1">Also reach us via</p>
            <div className="flex items-center gap-3">
            <a href="facebook.com" target="_blank" rel="noreferrer">
                <Image src={facebook} alt="facebook" />
            </a>
            <a href="instagram.com" target="_blank" rel="noreferrer">
                <Image src={insta} alt="instagram" />
            </a>
            <a href="linkedin.com" target="_blank" rel="noreferrer">
                <Image src={linkedin} alt="linkedin" />
            </a>
            <a href="twitter.com" target="_blank" rel="noreferrer">
                <Image src={twitter} alt="twitter" />
            </a>
            <strong>@ renteaze</strong>
            </div>
        </section>
    )
}

export default ContactAddresses;