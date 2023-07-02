import { StyledH1 } from "./styles"

interface SectionTitleProps {
    span: string,
    title: string,
    align?: 'center' | 'left'
}

export function SectionTitle({ span, title, align }: SectionTitleProps){
    return(
        <StyledH1 align={align}>
            <span>{span}</span>
            {title}
        </StyledH1>
    )
}