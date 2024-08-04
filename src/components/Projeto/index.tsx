import React from 'react';
import Paragrafo from "../Paragrafo/Paragrafo";
import Titulo from "../Titulo/Titulo";
import { Card, LinkBotao } from "./style";

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo>Lista de tarefas feitas com VueJs</Paragrafo>
      <LinkBotao href="https://example.com">Visualizar </LinkBotao>
    </Card>
  );
};

export default Projeto;
