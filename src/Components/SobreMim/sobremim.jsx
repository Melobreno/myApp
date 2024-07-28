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
          <h3>Desenvolvedor de Software</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quibusdam, dolorem dolores saepe, obcaecati est, eaque distinctio
            nisi ab magni accusantium at esse adipisci? Repudiandae vel quia
            maxime expedita veritatis.
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
