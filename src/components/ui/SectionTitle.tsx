import arrowIcon from '../../assets/icons/arrow.svg';

interface SectionTitleProps {
  label: string;
  title?: string;
  className?: string;
}

export const SectionTitle = ({ label, title, className = '' }: SectionTitleProps) => {
  return (
    <div className={`mb-20 relative ${className}`.trim()}>
      <div className="flex items-center gap-4.5 text-body uppercase">
        <img src={arrowIcon} alt="" className="w-[33px] h-[26px] -rotate-90" />
        <span>{label}</span>
      </div>
      {title && <h2 className="text-section-title-xs xs:text-section-title-mobile xl:text-section-title-tablet 2xl:text-section-title mt-6">{title}</h2>}
      <div className="absolute right-0 top-0 w-[100px] h-[5px] bg-current" />
    </div>
  );
};
