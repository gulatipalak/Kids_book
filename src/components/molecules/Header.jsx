import { useState } from "react";
import BrandLogo from "../atoms/BrandLogo";
import Button from "../atoms/Button";
import NavItems from "../atoms/NavItems";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-6 fixed w-full top-0 bg-primary z-50">
      <div className="container relative">
        
        <div className="flex items-center justify-between">
          <BrandLogo />

          
          <nav className="hidden md:flex items-center gap-8">
            <NavItems
              Items={[
                { name: "About Us", href: "about-us" },
                { name: "How it Works", href: "how-it-works" },
              ]}
              className="flex gap-8"
            />
            <Button variant="secondary">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-secondary shadow-md py-4 flex flex-col items-center gap-4 mt-2 rounded-b-lg z-50">
            <NavItems
              Items={[
                { name: "About Us", href: "about-us" },
                { name: "How it Works", href: "how-it-works" },
              ]}
              className="flex flex-col gap-4"
            />
            <Button variant="secondary">Get Started</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
