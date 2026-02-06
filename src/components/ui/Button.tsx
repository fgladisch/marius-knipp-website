interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  showIcon?: boolean;
}

export const Button = ({
  text,
  onClick,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center gap-4 py-2.5 px-[30px] border-[1.5px] rounded-button bg-transparent font-body text-body cursor-pointer transition-all duration-normal";

  const variantClasses =
    variant === "secondary"
      ? "border-light text-light hover:bg-light hover:text-primary"
      : "border-current text-inherit hover:bg-primary hover:text-light";

  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={`group ${buttonClasses}`}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`group ${buttonClasses}`}>
      {text}
    </button>
  );
};
