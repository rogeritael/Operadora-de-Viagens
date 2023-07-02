import { StyledSection } from "./styles";

import image1 from '../../../assets/images/image1.svg'
import image2 from '../../../assets/images/image2.svg'

export function About(){
    return(
        <StyledSection id="About">

            <div className="text_box">
                <p className="subtitle">Quem Somos</p>
                <h1 className="title">Sobre a JJNG</h1>

                <p className="description">
                    Somos uma operadora de turismo com sede em Osório, especializada em proporcionar experiências inesquecíveis pelo estado do Rio Grande do Sul.
                    <br /><br />
                    Com uma equipe apaixonada por viagens e conhecedora dos destinos locais, estamos prontos para transformar sua aventura em uma jornada única e memorável.
                    <br /><br />
                    Nossos serviços abrangem desde a organização completa da viagem até o suporte durante toda a sua estadia.
                </p>
            </div>

            <figure>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
            </figure>
        </StyledSection>
    )
}