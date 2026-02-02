import star1 from '../../assets/icons/stars/star-01.svg';
import star2 from '../../assets/icons/stars/star-02.svg';
import star3 from '../../assets/icons/stars/star-03.svg';
import star4 from '../../assets/icons/stars/star-04.svg';

const stars: Record<number, string> = {
  1: star1,
  2: star2,
  3: star3,
  4: star4,
};

interface StarDecorationProps {
  variant: 1 | 2 | 3 | 4;
  size?: number;
  color?: 'light' | 'dark' | 'accent';
  className?: string;
}

export const StarDecoration = ({
  variant,
  size = 74,
  color = 'light',
  className = '',
}: StarDecorationProps) => {
  const colorClasses = {
    light: '',
    dark: 'brightness-0',
    accent: 'brightness-0 saturate-100 invert-[29%] sepia-[98%] saturate-[2472%] hue-rotate-[243deg] brightness-[97%] contrast-[107%]',
  };

  return (
    <img
      src={stars[variant]}
      alt=""
      className={`block flex-shrink-0 ${colorClasses[color]} ${className}`.trim()}
      style={{ width: size, height: 'auto' }}
      aria-hidden="true"
    />
  );
};
