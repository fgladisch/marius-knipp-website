import './Button.css';
import arrowIcon from '../../assets/icons/arrow.svg';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button = ({
  text,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const buttonClass = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        <img src={arrowIcon} alt="" className="button__arrow" />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      <img src={arrowIcon} alt="" className="button__arrow" />
      <span>{text}</span>
    </button>
  );
};
