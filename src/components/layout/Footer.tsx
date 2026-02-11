import { useFadeIn } from "../../hooks/useFadeIn";
import logo from "../../assets/images/logo.svg";

export const Footer = () => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <footer className="bg-primary text-light py-20 pb-15">
      <div ref={ref} className={`container flex flex-col md:flex-row items-start md:items-end justify-between gap-12 fade-in-up ${isVisible ? "visible" : ""}`}>
        <div className="w-[150px] md:w-[228px]">
          <img src={logo} alt="M.K." className="w-full h-auto invert" />
        </div>

        <div className="flex gap-6 text-body">
          <a href="/datenschutz" className="hover:underline">
            Datenschutz
          </a>
          <span>|</span>
          <a href="/impressum" className="hover:underline">
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
};
