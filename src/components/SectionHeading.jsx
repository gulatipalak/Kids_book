const SectionHeading = ({text,color='text-brand-white',className}) => {
    return (
    <>
    <h2 className={`font-candal font-normal text-4xl md:text-section-heading tracking-tightest ${color} ${className}`}>{text}</h2>
    </>
    )
}

export default SectionHeading;