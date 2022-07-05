import './button.scss';

import { mapClassNameModifiers } from '@/helpers/style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  variant:
    | 'info'
    | 'link'
    | 'primary'
    | 'primary-bordered'
    | 'secondary'
    | 'secondary-bordered'
    | 'success'
    | 'success-bordered'
    | 'warning'
    | 'warning-bordered'
    | 'disabled';
  size: 'sm' | 'base' | 'lg';
};

export const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  size,
  ...rest
}) => (
  <button
    {...rest}
    className={mapClassNameModifiers('button', [variant, size])}
  >
    {title}
  </button>
);
