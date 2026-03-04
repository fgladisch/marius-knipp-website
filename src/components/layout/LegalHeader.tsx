import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export const LegalHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] py-6 bg-primary/90 backdrop-blur-sm">
      <div className="container">
        <Link to="/" className="w-[78px] block">
          <img
            src={logo}
            alt="M.K. - Marius Knipp"
            className="w-full h-auto invert"
          />
        </Link>
      </div>
    </header>
  );
};
