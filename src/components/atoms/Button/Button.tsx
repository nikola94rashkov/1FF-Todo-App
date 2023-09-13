import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import './Button.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<IButton> = ({ children, ...rest }) => (
  <button className="button" {...rest}>
    {children}
  </button>
);
