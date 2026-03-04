import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Button } from "../ui/Button";

export const LegalHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] py-6 transition-colors duration-300 text-light bg-primary/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="w-[78px]">
          <img
            src={logo}
            alt="M.K. - Marius Knipp"
            className="w-full h-auto invert"
          />
        </Link>

        <Button
          text="EMAIL"
          href="mailto:info@mariusknipp.de"
          variant="secondary"
          showIcon={false}
        />
      </div>
    </header>
  );
};
