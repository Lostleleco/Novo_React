import styled from "styled-components";
import { StyledProps } from './types';


export const P = styled.p<StyledProps>`
  color: ${(props) =>
    props.tipos === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: bold;
  line-height: 22px;
  margin-bottom: 15px;
`;
