import Footer from "@/components/Footer";
import { mainNavLinks } from "@/constants/navLinksData";
import AuthHeader from "@/layout/AuthHeader";
import ContactBar from "@/layout/ContactBar";
import Link from "next/link";


const NotFound = () => {

    return (
        <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <header>
                <ContactBar />
                <AuthHeader linksArr={mainNavLinks} />
            </header>

            <section className="grid place-items-center">
                <p className="text-body1-1">
                    Sorry, this page does not exist. Return to <Link href="/" className="text-blue-700 hover:underline text-body1-2">Home</Link>
                </p>
            </section>

            <Footer />
        </main>
    )
}

export default NotFound;