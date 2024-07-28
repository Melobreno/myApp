import imgLogo from '../../assets/Logo.png'
import Menu from '../Menu/menu'
import * as S from './navBarStyle'


function navBar(){
    return(
        <S.Container>
            <img src={imgLogo}  width={200} alt="" />
            <Menu/>
        </S.Container>
    )
}

export default navBar