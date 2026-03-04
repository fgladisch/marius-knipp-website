import emailIcon from "../../assets/icons/email-icon.svg";

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
    "inline-flex items-center gap-4 py-2 px-[24px] border-[1.5px] rounded-button bg-transparent font-body text-body cursor-pointer transition-all duration-normal";

  const variantClasses =
    variant === "secondary"
      ? "border-light text-light hover:bg-[var(--button-color)] hover:text-light"
      : "border-current text-inherit hover:bg-[var(--button-color)] hover:text-light";

  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={`group ${buttonClasses}`}>
        <span className="hidden xl:block">{text}</span>
        <img
          className="block xl:hidden h-[16px]"
          src={emailIcon}
          alt="Email icon"
        />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`group ${buttonClasses}`}>
      {text}
    </button>
  );
};
