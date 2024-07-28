import imGaroto from '../../assets/garotoDeProg.png';
import github from '../../assets/github.svg';
import insta from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import wpp from '../../assets/whatsapp.svg';
import * as S from './sobreStyle';

function sobreMim() {
  return (
    <S.ContainerSec>
      <S.Container>
        <div className="imagemGaroto">
          <img src={imGaroto} width={300} alt="" />
        </div>

        <S.SobreMim>
          <h3>Sobre Mim</h3>
          <h1>Breno Melo</h1>
          <h3>Desenvolvedor Web</h3>
          <p>
            Engajado e proativo, com 22 anos, busco minha primeira oportunidade
            como desenvolvedor. Possuo formação técnica em Análise e
            Desenvolvimento de Sistemas e estou constantemente aprendendo novas
            tecnologias. Atualmente, participo do projeto Start, onde desenvolvo
            projetos práticos utilizando JavaScript, React, Typescript e
            Node.js.
          </p>

          <S.Contatos>
            <h3>Contatos</h3>

            <div>
              <a href="https://github.com/Melobreno" target="_blank">
                <img src={github} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/melobreno/" target="_blank">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/_melobreno/" target="_blank">
                <img src={insta} alt="" />
              </a>
              <img src={wpp} alt="#" />
            </div>
          </S.Contatos>
        </S.SobreMim>
      </S.Container>
    </S.ContainerSec>
  );
}

export default sobreMim;
