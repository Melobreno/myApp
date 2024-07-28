import css from '../../assets/ferramentas/CSS.svg';
import git from '../../assets/ferramentas/git.svg';
import html from '../../assets/ferramentas/HTML.svg';
import js from '../../assets/ferramentas/javascript.svg';
import node from '../../assets/ferramentas/Nodejs.svg';
import react from '../../assets/ferramentas/react.svg';
import * as S from './conhecimentosStyle';

function Conhecimentos() {
  return (
    <S.Section>
      <section>
        <div className="apresentServ">
          <h2>Conhecimentos</h2>
          <p>Ferramentas das quais domíno</p>
        </div>

        <S.ContainerImg>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={git} alt="" />
          <img src={js} alt="" />
          <img src={node} alt="" />
          <img src={react} alt="" />
        </S.ContainerImg>
      </section>
    </S.Section>
  );
}

export default Conhecimentos;
