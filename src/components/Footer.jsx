import BrandLogo from "./BrandLogo";
import NavItems from "./NavItems";

const Footer = () => {
    return (
        <footer className="bg-secondary py-[36px]">
            <div className="container">
                <div className="flex items-center gap-5 lg:gap-6 flex-col lg:flex-row justify-items-center md:justify-between">
                    <BrandLogo/>
                    <NavItems
                    Items={[
                        { name: "About Us", href: "about-us" },
                        { name: "How it Works", href: "how-it-works" },
                        { name: "Terms & Conditions", href: "terms-conditions" },
                        { name: "Privacy Policy", href: "privacy-policy" },
                    ]} className="gap-5 lg:gap-6 justify-center lg:justify-right"
                />
                </div>
            </div>
            
        </footer>
            
        
    )
}

export default Footer;