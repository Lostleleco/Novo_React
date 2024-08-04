import React from 'react';
import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo/Paragrafo";
import Titulo from "../../components/Titulo/Titulo";
import { Descricao, BotaoTema, SidebarContainer } from "./styles";


const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Titulo fontSize={20}>Alex Soares</Titulo>
    <Paragrafo>Lostleleco</Paragrafo>
    <Paragrafo>Desenvolvedor Front-End</Paragrafo>
    <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
