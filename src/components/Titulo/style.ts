import styled from "styled-components";


interface StyledProps {
  fontSize?: number;
}


export const TituloEstilo = styled.h3<StyledProps>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`;
