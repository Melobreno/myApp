import img from '../../assets/fotoMain.png'
import * as S from './mainStyle'
import Button from '../button/button'

function Main(){
    return(
        <S.mainContainer>
            <S.Container>
                <h1>
                    Tornando sua empresa digital com <span>ideias inovadoras</span>.
                </h1>

                <p>
                    Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.
                </p>

                <div className='divBtn'>
                    <Button/>
                </div>

            </S.Container>

            <S.ContainerImg>
                <img src={img} alt="" />
            </S.ContainerImg>
        </S.mainContainer>
    )
}

export default Main