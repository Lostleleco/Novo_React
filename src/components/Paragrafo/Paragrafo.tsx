import React from 'react';
import { P } from './style'; // Ajuste o caminho conforme necessário

type Props = {
  children: React.ReactNode;
  fontSize?: number;
};

const Paragrafo: React.FC<Props> = ({ children, fontSize }) => (
  <P fontSize={fontSize}>
    {children}
  </P>
);

export default Paragrafo;
