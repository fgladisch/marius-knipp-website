import './Header.css';
import logo from '../../assets/images/logo.svg';
import { Button } from '../ui/Button';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export const Header = ({ variant = 'light' }: HeaderProps) => {
  return (
    <header className={`header ${variant === 'light' ? 'header--light' : ''}`}>
      <div className="header__container container">
        <a href="#home" className="header__logo">
          <img src={logo} alt="M.K. - Marius Knipp" />
        </a>

        <nav className="header__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <Button
          text="Contact me"
          href="#contact"
          variant={variant === 'light' ? 'secondary' : 'primary'}
        />
      </div>
    </header>
  );
};
