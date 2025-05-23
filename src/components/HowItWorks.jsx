import SectionHeading from "./SectionHeading";

const HowItWorks = () => {
    return(
        <section className="bg-secondary pt-[43px]">
            <div className="container">
                <SectionHeading text="How it Works" className="text-center pb-[40px] md:pb-[71px]"/>
                <div className="lg:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
                    <div className="place-items-center relative">
                        <svg className="hidden lg:block absolute top-[30%] left-[-20%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="160"
                            fill="none"
                            viewBox="0 0 80 160"
                        >
                            <path
                            stroke="#C4CD24"
                            strokeLinecap="round"
                            strokeWidth="2.8"
                            d="M58.15 4.19C31.283-2.368 6.621 1.688 3.013 34.11c-2.78 24.977 21.41 51.73 47.754 44.116 6.312-1.824 9.09-10.577 8.438-16.507-1.03-9.382-7.664-14.267-16.77-15.456-16.544-2.16-38.25 8.148-40.299 26.312-3.207 28.423 17.288 51.717 40.94 64.551 4.712 2.557 42.7 15.547 24.791 1.872-3.25-2.482-13.269-9.527-10.18-6.845 5.119 4.445 8.18 6.73 14.6 9.394 1.276.529 8.324 2.362 4.836 4.23-7.142 3.825-13.955 8.182-21.195 11.849"
                            ></path>
                        </svg>
                            <img src="../src/assets/img/how-it-works-1.png" alt="how-it-works"/>
                            <img src="../src/assets/img/how-it-works-2.png" alt="how-it-works"/>
                        <svg className="hidden lg:block absolute right-[-13%] bottom-[21%]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="95"
                            height="109"
                            fill="none"
                            viewBox="0 0 95 109"
                        >
                            <path
                            stroke="#C4CD24"
                            strokeLinecap="round"
                            strokeWidth="2.8"
                            d="M1.392 107.033c22.05-11.386 40.393-26.207 41.286-50.153.307-8.247-.692-17.592-3.829-25.338-1.422-3.512-4.932-9.619-9.193-9.52-7.074.163-4.025 11.26-2.714 15.19 2.369 7.107 13.7 13.322 20.875 10.686 13.32-4.892 24.338-19.834 32.935-30.51 3.433-4.263 6.08-9.348 9.65-13.399 1.384-1.572-3.935.488-4.98.61-6.164.715-6.267.95.239-.901.9-.256 7.063-2.536 7.47-2.177.285.25-.785 12.423-.537 13.84"
                            ></path>
                        </svg>
                    </div>
                    <div className="place-items-center">
                        <img src="../src/assets/img/how-it-works-3.png" alt="how-it-works"/>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default HowItWorks;