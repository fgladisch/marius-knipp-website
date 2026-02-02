import './Footer.css';
import logo from '../../assets/images/logo.svg';

const LinkedInIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="56" height="56" rx="4" fill="currentColor" />
    <path
      d="M20.5 23H16V40H20.5V23ZM18.25 21C19.77 21 21 19.77 21 18.25C21 16.73 19.77 15.5 18.25 15.5C16.73 15.5 15.5 16.73 15.5 18.25C15.5 19.77 16.73 21 18.25 21ZM40 40H35.5V31.75C35.5 29.43 35.46 26.46 32.29 26.46C29.08 26.46 28.6 28.99 28.6 31.57V40H24.1V23H28.38V25.75H28.44C29.04 24.67 30.47 23.52 32.58 23.52C37.13 23.52 38 26.54 38 30.48V40H40Z"
      fill="black"
    />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <img src={logo} alt="M.K." />
        </div>

        <a
          href="https://linkedin.com/in/mariusknipp"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon />
        </a>

        <div className="footer__legal">
          <a href="/datenschutz">Datenschutz</a>
          <span>|</span>
          <a href="/impressum">Impressum</a>
        </div>
      </div>
    </footer>
  );
};
