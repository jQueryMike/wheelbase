import { IconProps } from './Icon.types';

const Icon = ({ className }: IconProps) => (
  <span className="inline-flex h-[1em] items-center justify-center leading-none ">
    <span className="inline-block" aria-hidden="true">
      <i className={className} />
    </span>
  </span>
);

export default Icon;
