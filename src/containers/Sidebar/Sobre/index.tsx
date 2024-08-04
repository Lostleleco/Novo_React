import Titulo from "../../../components/Titulo/Titulo"
import { Githubsecao } from "./style";

const Sobre = () => {
  return (

    <section>
      <Titulo fontSize={16}>Sobre Mim</Titulo>
      <p>Meu nome é Alex sou analista de suporte com três anos de experiência na área onde aprendi muito sobre resolução de problemas e trabalho em equipe. Graduado em Análise e Desenvolvimento de Sistemas. Tenho focado todo o meu tempo e energia em me tornar um desenvolvedor front-end qualificado, com estudos intensivos na EBAC.

      Ao longo da minha jornada, adquiri habilidades valiosas não apenas em desenvolvimento de software, mas também em colaboração eficaz com colegas e stakeholders. Estou entusiasmado para aplicar meu conhecimento e contribuir de maneira positiva em projetos desafiadores. Estou à disposição para novas oportunidades e para compartilhar o que aprendi até agora!</p>
    <Githubsecao>

<img src="https://github-readme-stats.vercel.app/api?username=lostleleco&show_icons=true&theme=dark" alt="Estatísticas do GitHub"/>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lostleleco&layout=compact&langs_count=7&theme=dracula" alt="Línguas mais usadas"/>

    </Githubsecao>
    </section>
  );
}

export default Sobre;
