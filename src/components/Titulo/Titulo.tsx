import React from 'react';
import { TituloEstilo } from './style';

// Definindo o tipo de propriedades esperadas para o componente
type Props = {
  children: React.ReactNode; // Ajustado para aceitar qualquer tipo de nó React
  fontSize?: number;
}

// Corrigido o uso de 'TituloEstilo' e a renderização correta
const Titulo: React.FC<Props> = ({ children, fontSize }) => (
  <TituloEstilo fontSize={fontSize}>
    {children}
  </TituloEstilo>
);

export default Titulo;
