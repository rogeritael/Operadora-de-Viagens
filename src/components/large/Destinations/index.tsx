import { DestinationCard } from "../../medium/DestinationCard";
import { SectionTitle } from "../../small/SectionTitle";
import { StyledSection } from "./styles";

import { useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

import florybal from '../../../assets/images/terramagica.jfif';
import trem from '../../../assets/images/maria_fumaca.jpg';
import restaurante from '../../../assets/images/restaurante.jpg';
import ametista from '../../../assets/images/ametista.jpg';

export function Destinations(){
    const carousel = useRef<any>();
    const [carouselWidth, setCarouselWidth] = useState(0)

    useEffect(() => {
        setCarouselWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
    }, [carouselWidth])

    return(
        <StyledSection id="Destinations">
            <SectionTitle
                span="Escolha o seu destino"
                title="Destinos Populares"
            />

            <motion.div ref={carousel} className="card_carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div className="card_rail" drag="x" dragConstraints={{ right: 0, left: - carouselWidth}}>
                    <DestinationCard
                        title='Restaurante Giratório'
                        subtitle="Veranópolis/RS"
                        figure_path={restaurante}
                        bullets={['Transporte', 'Almoço no restaurante giratório', 'Tour pela cidade de Veranópolis', 'Guia local']}
                    />
                    <DestinationCard
                        title='Maria Fumaça'
                        subtitle="Bento Gonçalves/RS"
                        figure_path={trem}
                        bullets={['Almoço típico Italiano', 'Visita à vinícola']}
                    />
                    <DestinationCard
                        title='Tour em Ametista do Sul'
                        subtitle="Ametista do Sul/RS"
                        figure_path={ametista}
                        bullets={['3 pernites no Hotel', 'Cafés da manhã', 'Almoço no restaurante subterrâneo', 'Tour pela cidade de Ametista do Sul']}
                    />
                    <DestinationCard
                        title='Terra Mágica Florybal'
                        subtitle="Canela/RS"
                        figure_path={florybal}
                        bullets={['Transporte', 'Ingresso para o parque Terra Mágica Florybal', 'Visita a fábrica de chocolate Florybal', 'Visita à rua coberta em Gramado/RS']}
                    />
                </motion.div>
            </motion.div>
        </StyledSection>
    )
}