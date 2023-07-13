import { useEffect, useState } from 'react';

export interface IconProps {
  className?: string;
}

const Icon = ({ className }: IconProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  let iconElement = null;

  if (!loading) {
    iconElement = <i className={className} />;
  }

  return (
    <span className="inline-block h-[1em] w-[1em] leading-none">
      <span className="inline-block" aria-hidden="true">
        {iconElement}
      </span>
    </span>
  );
};

export default Icon;
