import { BookButton } from '../../small/BookButton';
import { StyledHeader } from './styles';

import menu from '../../../assets/icons/mobile_menu_dark.svg';

interface HeaderProps {
    setIsModalOpen: (para: boolean) => void
}

export function Header({ setIsModalOpen }: HeaderProps){
    return(
        <StyledHeader>
            <a href="/"><p className='logo'>JJ<span>N</span>G</p></a>
            <nav>
                <a href='#Home'>Home</a>
                <a href='#About'>Sobre Nós</a>
                <a href='#Destinations'>Destinos</a>
                <BookButton />
                <img src={menu} onClick={() => setIsModalOpen(true)} className='mobile_menu' alt="menu mobile" />
            </nav>
        </StyledHeader>
    )
}