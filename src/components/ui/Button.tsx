import arrowIcon from '../../assets/icons/arrow.svg';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  showIcon?: boolean;
}

export const Button = ({
  text,
  onClick,
  href,
  variant = 'primary',
  className = '',
  showIcon = true,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center gap-4 py-2.5 px-[30px] border-[1.5px] rounded-button bg-transparent font-body text-body uppercase cursor-pointer transition-all duration-normal';

  const variantClasses = variant === 'secondary'
    ? 'border-light text-light hover:bg-light hover:text-primary'
    : 'border-current text-inherit hover:bg-primary hover:text-light';

  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  const arrowClasses = variant === 'secondary'
    ? 'w-6 h-auto transition-transform duration-normal group-hover:translate-x-1 group-hover:brightness-0'
    : 'w-6 h-auto transition-transform duration-normal group-hover:translate-x-1 group-hover:brightness-0 group-hover:invert';

  if (href) {
    return (
      <a href={href} className={`group ${buttonClasses}`}>
        {showIcon && <img src={arrowIcon} alt="" className={arrowClasses} />}
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`group ${buttonClasses}`}>
      {showIcon && <img src={arrowIcon} alt="" className={arrowClasses} />}
      <span>{text}</span>
    </button>
  );
};
