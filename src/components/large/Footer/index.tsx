import { StyledFooter } from "./styles";

import whatsapp from '../../../assets/icons/whatsapp.svg'
import instagram from '../../../assets/icons/instagram.svg'
import facebook from '../../../assets/icons/facebook.svg'

export function Footer(){
    return(
        <StyledFooter>
            <div className="top_footer">
                <div className="jjng">
                    <h3>JJNG</h3>
                    <p>
                        Operadora de viagens em Osório - <br/> Rio Grande do Sul
                    </p>
                </div>
                <div className="location">
                    <h3>Localização</h3>
                    <p>
                        Largo dos Estudantes, junto com a CVC <br/>
                        Centro de Osório/RS
                    </p>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>(51) 9 9742-2769</p>
                    <p>agenciajjng@gmail.com</p>
                    <div className="social">
                        <a href="https://www.instagram.com/jjng.turismo/">
                            <img src={instagram} alt="ícone do Instagram" />
                        </a>
                        <a href="https://www.facebook.com/JJNGTURISMO">
                            <img src={facebook} alt="ícone do Facebook" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=%2B5551992159166&data=ARCW2aN_EJGrRRl85lMXpnq_40CMxKDBvqXMmPp5gpI1k2npVZgSP-uLvgrlfLBagLyh2EY-zs62TLLUsJeJ6D-UOW9R5KL9AWbcT84o5QoRGnULzNaELAEuT_Rk2zQdkvSMi8WI2d1YAbaA8v0Ic2dVHw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3U6zgT59XKWrnKYMgrVaenEiqS_xVNiH6gxMQUyoNfyU1I8ReE2TH-Xyc">
                            <img src={whatsapp} alt="ícone do Whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                JJNG - Todos os direitos reservados
            </div>
            
        </StyledFooter>
    )
}