

const PageIntro: React.FC<PageIntroProps> = ({ heading, text }) => {

    return (
        <section className="text-center max-w-4xl mx-auto px-3">
            <h3 className="text-h3-2 text-[#1814D8] mb-3">{heading}</h3>
            <p className="text-subtitle2-1 text-dark-1">
                {text}
            </p>
        </section>
    )
}

export default PageIntro;