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
      className={`uppercase font-extralight text-hero-mobile xl:text-hero-tablet 2xl:text-hero mt-6 ${className}`.trim()}
    >
      {children}
    </h2>
  );
};
