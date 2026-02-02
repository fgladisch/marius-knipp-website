import './SectionTitle.css';
import arrowIcon from '../../assets/icons/arrow.svg';

interface SectionTitleProps {
  label: string;
  title?: string;
  className?: string;
}

export const SectionTitle = ({ label, title, className = '' }: SectionTitleProps) => {
  return (
    <div className={`section-title ${className}`.trim()}>
      <div className="section-title__label">
        <img src={arrowIcon} alt="" className="section-title__arrow" />
        <span>{label}</span>
      </div>
      {title && <h2 className="section-title__heading">{title}</h2>}
      <div className="section-title__line" />
    </div>
  );
};
