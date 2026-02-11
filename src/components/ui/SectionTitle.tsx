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
      className={`uppercase font-extralight text-hero-mobile xl:text-hero-tablet mt-6 ${className}`.trim()}
      style={{ lineHeight: 0.9 }}
    >
      {children}
    </h2>
  );
};
