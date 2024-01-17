import ContactAddresses from "./ContactAddresses";
import ContactForm from "./ContactForm";


const ContactUsMain: React.FC = () => {

    return (
        <section className="bg-col-1 container-120 mt-7 mb-40">
            <section className="grid lg:flex w-full gap-16 lg:gap-28 py-6">
                <div className="bg-white py-6 px-3 mob:px-7 flex-[1_0_0]">
                    <h3 className="text-h4-2 text-center text-dark-1">
                        Reach us for more info
                    </h3>
                    <p className="text-gray-5 text-center text-subtitle2-1">
                        We can give you more information, and help you with your
                        inquiry. Simply fill the feedback form and we will get back to
                        you right away.
                    </p>
                    <ContactForm />
                </div>
                <ContactAddresses />
            </section>
        </section>
    )
}

export default ContactUsMain;