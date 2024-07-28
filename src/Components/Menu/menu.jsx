import * as S from './menuStyle';

function menu() {
  return (
    <S.Container>
      <li>
        <a href="#">Inicio</a>
      </li>
      <li>
        <a href="#">Contatos</a>
      </li>
      <li>
        <a href="#">Projetos</a>
      </li>
    </S.Container>
  );
}

export default menu;
