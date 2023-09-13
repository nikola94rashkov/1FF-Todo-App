import { FC, TextareaHTMLAttributes } from 'react';

interface ITextField extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export const TextField: FC<ITextField> = ({ name, ...rest }) => <textarea name={name} {...rest}></textarea>;
