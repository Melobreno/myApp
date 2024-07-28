import imgLogo from '../../assets/Logo.png';
import * as S from './footerStyle';

function footer() {
  return (
    <S.Container>
      <img src={imgLogo} width={100} alt="" />
      <p>
        Copyright <span>brenomelo.com</span>. Todos os direitos reservados.
      </p>
    </S.Container>
  );
}

export default footer;
