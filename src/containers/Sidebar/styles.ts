import styled from "styled-components";
import { P } from "../../components/Paragrafo";

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px; /* Corrigido o erro de digitação aqui */
  font-size: 15px;
`
export const BotaoTema= styled.button `
border-radius: 12px;
padding: 8px;
color: #eee;
font-size: 10px;
font-weight: bold;
background-color: #282a35;
cursor: pointer;
`
;

export const SidebarContainer = styled.div`
position:sticky;
top:80px;
left: 0;
`;