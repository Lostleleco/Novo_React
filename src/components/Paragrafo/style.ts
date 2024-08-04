import styled from "styled-components";
import { StyledProps } from './types'; // Ajuste o caminho conforme necessário

export const P = styled.p<StyledProps>`
  color:${(props)=>(props.tipos === 'principal'? '#282a35': '#949494')} #282a35;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: bold;
  line-height: 22px;
  margin-bottom:15px;
`;
