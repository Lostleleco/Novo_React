import styled from "styled-components";
import { Props } from './Props'; // Ajuste o caminho conforme a localização real do arquivo Props.ts

// Definindo o tipo de propriedades esperadas para o componente estilizado
export const P = styled.p<Props>`
  font-size: 14px;
`;
