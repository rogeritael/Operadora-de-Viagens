import { StyledSection } from "./styles";
import girl from '../../../assets/travel_girl.svg';

export function Cover(){
    return(
        <StyledSection id="Home">
            <h1 className="callToAction">
                Descubra o Rio Grande do Sul com a Melhor <span>Operadora de Turismo</span> em Osório
            </h1>
            <div className="circle_box">
                <div className="circle"></div>
            </div>
            <img className="girl_model" src={girl} alt="mulher com mala de viagem" />
        </StyledSection>
    )
}