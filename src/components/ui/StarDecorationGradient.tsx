interface StarDecorationGradientProps {
  size?: number;
  className?: string;
  topColor?: string;
  bottomColor?: string;
}

export const StarDecorationGradient = ({
  size = 100,
  className = "",
  topColor = "#1E1E1E",
  bottomColor = "#F5F5F5",
}: StarDecorationGradientProps) => {
  const gradientId = `star-gradient-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 102 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="50%" stopColor={topColor} />
          <stop offset="50%" stopColor={bottomColor} />
        </linearGradient>
      </defs>
      <path
        d="M42.8526 107.711L46.0376 62.2521L8.68633 87.4424L0 72.0966L41.1153 53.5657L0.289546 35.3244L8.68633 20.2681L46.3271 45.4585L42.8526 0H59.9357L56.1716 45.4585L93.5228 20.2681L101.63 35.0349L60.8043 53.5657L101.92 72.0966L93.5228 87.1529L56.1716 62.2521L59.6461 107.711H42.8526Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};
