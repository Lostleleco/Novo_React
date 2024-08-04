import styled from "styled-components";

// Definindo o tipo de propriedades esperadas para o componente estilizado
interface StyledProps {
  fontSize?: number;
}

// Corrija a declaração do componente estilizado
export const TituloEstilo = styled.h3<StyledProps>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: bold;
  margin-bottom:16px;
`;
