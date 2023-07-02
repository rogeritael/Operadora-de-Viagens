import { SectionTitle } from "../../small/SectionTitle";
import { StyledSection } from "./styled";

import whatsapp_icon from '../../../assets/icons/whatsapp_icon.svg';


export function Contact(){
    return(
        <StyledSection>
            
            <div className="contact_box">
                <div className="text_box">
                    <SectionTitle
                        span="Contato"
                        title="Agende a Sua Próxima Viagem"
                        align="left"
                    />
                    <p>
                        Entre em contato com a gente pelo whatsapp e venha viajar com a JJNB
                    </p>
                </div>
                <a href="https://api.whatsapp.com/send?phone=%2B5551992159166&data=ARCW2aN_EJGrRRl85lMXpnq_40CMxKDBvqXMmPp5gpI1k2npVZgSP-uLvgrlfLBagLyh2EY-zs62TLLUsJeJ6D-UOW9R5KL9AWbcT84o5QoRGnULzNaELAEuT_Rk2zQdkvSMi8WI2d1YAbaA8v0Ic2dVHw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3U6zgT59XKWrnKYMgrVaenEiqS_xVNiH6gxMQUyoNfyU1I8ReE2TH-Xyc">
                <button>
                    Agendar
                    <img src={whatsapp_icon} alt="" />    
                </button>
                </a>
            </div>
            
        </StyledSection>
    )
}