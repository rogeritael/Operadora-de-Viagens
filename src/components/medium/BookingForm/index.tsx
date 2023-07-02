import { StyledSection } from "./styles";
import { useState } from 'react';

import home from '../../../assets/icons/booking/home.png';
import user from '../../../assets/icons/booking/user.svg';
import calendar from '../../../assets/icons/booking/calendar.svg';

export function BookingForm(){
    const [date, setDate] = useState('');
    const [peopleQuantity, setPeopleQuantity] = useState('1 - 5 pessoas');
    const [destination, setDestination] = useState('Gramado - RS');

    function generateMessage(){
        if(window.screen.width > 640 ){
            window.location.href = `https://wa.me/999999999?text=${encodeURIComponent(`Estou planejando uma viagem para a cidade de ${destination} e estou interessado em utilizar os serviços de transporte da sua empresa. Gostaria de confirmar a disponibilidade${date === '' ? '': `para a data de ${date},`} para viajar com um grupo de ${peopleQuantity} pessoas`)}`
        } else {
            window.location.href = 'https://api.whatsapp.com/send?phone=%2B5551992159166&data=ARCW2aN_EJGrRRl85lMXpnq_40CMxKDBvqXMmPp5gpI1k2npVZgSP-uLvgrlfLBagLyh2EY-zs62TLLUsJeJ6D-UOW9R5KL9AWbcT84o5QoRGnULzNaELAEuT_Rk2zQdkvSMi8WI2d1YAbaA8v0Ic2dVHw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3U6zgT59XKWrnKYMgrVaenEiqS_xVNiH6gxMQUyoNfyU1I8ReE2TH-Xyc'
        }
    }

    return(
        <StyledSection>
            
            <div className="option_container">
                <div className="option_box">
                    <img src={home} alt="" />
                    <div className="controller">
                        <p>Para onde você quer ir?</p>
                        <select onChange={(e) => setDestination(e.target.value)} name="" id="">
                            <option className="opt" value="Gramado - RS">Gramado - RS</option>
                            <option value="Torres - RS">Torres - RS</option>
                            <option value="Balneário Camburiíu - SC">Machadinho - RS</option>
                            <option value="Balneário Camburiíu - SC">Feliz - RS</option>
                            <option value="Balneário Camburiíu - SC">Ametista do Sul - RS</option>
                            <option value="Balneário Camburiíu - SC">Balneário Camburiú - SC</option>
                            <option value="Balneário Camburiíu - SC">Outro</option>
                        </select>
                    </div>
                </div>

                <div className="option_box">
                    <img src={calendar} alt="" />
                    <div className="controller">
                        <p>Quando?</p>
                        <input type="date" onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>

                <div className="option_box">
                    <img src={user} alt="" />
                    <div className="controller">
                        <p>Numero de Pessoas</p>
                        <select onChange={(e) => setPeopleQuantity(e.target.value)} name="" id="">
                            <option value="pessoas">1 - 5 pessoas</option>
                            <option value="1 a 5 pessoas">6 - 10 pessoas</option>
                            <option value="11 a 5 pessoas">11 - 20 pessoas</option>
                            <option value="21 a 30 pessoas">21 - 30 pessoas</option>
                            <option value="mais de 30 pessoas">Mais de 30 pessoas</option>
                        </select>
                    </div>
                </div>
            </div>

            <button onClick={() => generateMessage()} className="booking_button">Fazer Reserva</button>
        </StyledSection>
    )
}