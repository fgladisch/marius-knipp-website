import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Button } from "../ui/Button";

interface HeaderProps {
  variant?: "light" | "dark";
}

export const Header = ({ variant = "light" }: HeaderProps) => {
  const isLight = variant === "light";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("home")?.offsetHeight ?? 982;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-6 transition-colors duration-300 ${isLight ? "text-light" : ""} ${isScrolled ? "bg-primary/90 backdrop-blur-sm" : ""}`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="w-[78px]">
          <img
            src={logo}
            alt="M.K. - Marius Knipp"
            className={`w-full h-auto ${isLight ? "invert" : ""}`}
          />
        </a>

        <nav className="hidden md:flex gap-20">
          <a
            href="#home"
            className="text-body font-bold uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-normal hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-body font-bold uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-normal hover:after:w-full"
          >
            About
          </a>
          <a
            href="#work"
            className="text-body font-bold uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-normal hover:after:w-full"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-body font-bold uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-normal hover:after:w-full"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            text="E-Mail"
            href="mailto:kontakt@mariusk.de"
            variant={isLight ? "secondary" : "primary"}
            showIcon={false}
          />
        </div>
      </div>
    </header>
  );
};
