import { Metric } from "../../small/Metric"
import { StyledSection } from "./styles"

import image3 from '../../../assets/images/image3.svg'
import image4 from '../../../assets/images/image4.svg'
import image5 from '../../../assets/images/image5.svg'
import { SectionTitle } from "../../small/SectionTitle"

export function WhyUs(){
    return(
        <StyledSection>
            <SectionTitle
                span="Deu Match!"
                title="Porque Somos Perfeitos para a sua Viagem"
            />
            <div className="content_container">
                <figure>
                    <div className="left_side">
                            <img src={image3} alt="" />
                    </div>
                    <div className="right_side">
                            <img src={image4} alt="" />
                            <img src={image5} alt="" />
                    </div>
                </figure>
                
                <div className="text_container">
                    <p className="why_us_text">
                        Com anos de atuação no setor de turismo no Rio Grande do Sul, temos um profundo conhecimento dos destinos locais, suas características únicas e suas atrações imperdíveis. Nossa equipe está totalmente imersa na cultura e nas paisagens deslumbrantes da região, permitindo-nos oferecer uma experiência autêntica e enriquecedora.
                    </p>
                    <div className="metric_box">
                        <Metric
                            emphasis="10+"
                            title="Anos"
                            description="Atuando como agência
                            de viagens"
                        />
                        <Metric
                            emphasis="1000+"
                            title="Viagens"
                            description="por todo o Rio Grande do Sul"
                        />
                        <Metric
                            emphasis="Atendimento"
                            title="10/10"
                            description="Somos avaliados positivamente pelos nossos clientes"
                        />
                        <Metric
                            emphasis="Satisfação"
                            title="do Cliente"
                            description="Focamos em entregar a melhor experiência para você"
                        />
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}