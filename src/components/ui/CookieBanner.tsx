import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const COOKIE_CONSENT_KEY = "cookie-consent-accepted";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-light px-6 py-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-8">
        <p className="text-body text-center sm:text-left">
          Diese Website verwendet ausschließlich technische Cookies um das
          bestmögliche Erlebnis für Sie sicherzustellen.{" "}
          <Link to="/datenschutz" className="underline hover:opacity-80">
            Mehr erfahren
          </Link>
        </p>
        <Button
          text="Verstanden"
          variant="secondary"
          onClick={handleAccept}
          className="shrink-0"
        />
      </div>
    </div>
  );
};
