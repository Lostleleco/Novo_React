import React from 'react';
import { TituloEstilo } from './style';

type Props = {
  children: React.ReactNode;
  fontSize?: number;
}


const Titulo: React.FC<Props> = ({ children, fontSize }) => (
  <TituloEstilo fontSize={fontSize}>
    {children}
  </TituloEstilo>
);

export default Titulo;
