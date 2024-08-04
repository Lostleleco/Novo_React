import React from 'react';
import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo/Paragrafo";
import Titulo from "../../components/Titulo/Titulo";
import { BotaoTema, SidebarContainer, Descricao} from "./styles";

type Props ={
  trocaTema:()=> void;
}
const Sidebar = (props:Props) => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Titulo fontSize={20}>Alex Soares</Titulo>
    <Paragrafo>Lostleleco</Paragrafo>
    <Paragrafo>Desenvolvedor Front-End</Paragrafo>
    <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
