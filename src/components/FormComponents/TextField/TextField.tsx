import { FC, TextareaHTMLAttributes } from 'react';
import './TextField.scss';

interface ITextField extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export const TextField: FC<ITextField> = ({ label, id, ...rest }) => {
  return (
    <div className="form__row">
      <label htmlFor={id}>{label}</label>
      <textarea name={id} {...rest}></textarea>;
    </div>
  );
};
