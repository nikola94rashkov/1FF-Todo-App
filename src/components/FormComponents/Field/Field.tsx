import { FC, InputHTMLAttributes } from 'react';
import './Field.scss';

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'date' | 'checkbox';
  label: string;
  id: string;
}

export const Field: FC<IField> = ({ type = 'text', label, id, ...rest }) => {
  return (
    <div className="form__row">
      <label htmlFor={id}>{label}</label>
      <input name={id} type={type} id={id} {...rest} />
    </div>
  );
};
