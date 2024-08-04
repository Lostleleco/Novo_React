import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) =>props.theme.corDaBorda};
  padding: 16px;
  border-radius: 8px;
  background-color:${(props) =>props.theme.corDeFundo};
`;

export const LinkBotao = styled.a`
  color:${(props) =>props.theme.corSecundaria};
  font-size: 14px;
  background-color:${(props) =>props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`;
