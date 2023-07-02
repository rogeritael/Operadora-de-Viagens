import { StyledSection } from "./styles";

import { AiOutlineClose } from 'react-icons/ai'

interface ModalMenu {
    isModalOpen: boolean,
    setIsModalOpen: (param: boolean) => void
}

export function ModalMenu({ isModalOpen, setIsModalOpen }: ModalMenu){

    function closeModal(){
        setIsModalOpen(false)
    }

    return(
        <StyledSection isModalOpen={isModalOpen}>
            <span onClick={() => closeModal()}></span>
            <ul>
                <li><p><AiOutlineClose onClick={() => closeModal()} className="close_icon" /></p></li>
                <li onClick={() => closeModal()}><a href="#Home">Home</a></li>
                <li onClick={() => closeModal()}><a href="#About">Sobre Nós</a></li>
                <li onClick={() => closeModal()}><a href="#Destinations">Destinos</a></li>
                <li onClick={() => closeModal()}>
                    <a href="https://api.whatsapp.com/send?phone=%2B5551992159166&data=ARCW2aN_EJGrRRl85lMXpnq_40CMxKDBvqXMmPp5gpI1k2npVZgSP-uLvgrlfLBagLyh2EY-zs62TLLUsJeJ6D-UOW9R5KL9AWbcT84o5QoRGnULzNaELAEuT_Rk2zQdkvSMi8WI2d1YAbaA8v0Ic2dVHw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3U6zgT59XKWrnKYMgrVaenEiqS_xVNiH6gxMQUyoNfyU1I8ReE2TH-Xyc">Fazer Reserva</a>
                </li>
            </ul>
            
        </StyledSection>
    )
}