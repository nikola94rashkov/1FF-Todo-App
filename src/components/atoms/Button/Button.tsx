import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import './Button.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button: FC<IButton> = ({ children, className, ...rest }) => (
  <button className={`button ${className}`} {...rest}>
    {children}
  </button>
);
