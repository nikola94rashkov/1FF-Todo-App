import { FC, InputHTMLAttributes } from 'react';

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'date' | 'file' | 'radio' | 'checkbox';
}

export const Field: FC<IField> = ({ type = 'text', ...rest }) => <input type={type} {...rest} />;
