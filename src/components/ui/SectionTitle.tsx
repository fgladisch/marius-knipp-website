interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({
  children,
  className = "",
}: SectionTitleProps) => {
  return (
    <h2
      className={`uppercase text-section-title-xs xs:text-section-title-mobile xl:text-section-title-tablet 2xl:text-section-title mt-6 ${className}`.trim()}
    >
      {children}
    </h2>
  );
};
