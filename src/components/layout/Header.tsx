import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Button } from "../ui/Button";

interface HeaderProps {
  variant?: "light" | "dark";
}

const SECTIONS = ["home", "about", "work", "contact"];

export const Header = ({ variant = "light" }: HeaderProps) => {
  const isLight = variant === "light";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("home")?.offsetHeight ?? 982;
      setIsScrolled(window.scrollY > heroHeight - 100);

      const offset = 150;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && el.offsetTop - offset <= window.scrollY) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
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

        <nav className="hidden md:flex xl:gap-20 gap-10">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-body font-bold uppercase relative transition-colors duration-normal after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[var(--button-color)] after:transition-all after:duration-normal hover:after:w-full ${
                activeSection === section
                  ? "text-[var(--button-color)] after:w-full"
                  : "after:w-0"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        <Button
          text="EMAIL"
          href="mailto:info@mariusknipp.de"
          variant={isLight ? "secondary" : "primary"}
          showIcon={false}
        />
      </div>
    </header>
  );
};
