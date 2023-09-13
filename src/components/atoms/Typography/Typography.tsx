import { FC, ReactNode } from 'react';

interface ITypography {
  children: ReactNode;
  type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Typography: FC<ITypography> = ({ children, type = 'p', ...rest }) => {
  const Tag = type;

  return <Tag {...rest}>{children}</Tag>;
};
