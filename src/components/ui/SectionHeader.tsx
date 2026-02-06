import arrowIcon from "../../assets/icons/arrow.svg";

interface SectionHeaderProps {
  label: string;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeader = ({
  label,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`mb-10 relative ${className}`.trim()}>
      <div className="flex items-center gap-4.5 text-body uppercase">
        <img src={arrowIcon} alt="" className="w-[33px] h-[26px] -rotate-90" />
        <span>{label}</span>
      </div>
      <div className="absolute right-0 top-0 w-[100px] h-[5px] bg-current" />
    </div>
  );
};
