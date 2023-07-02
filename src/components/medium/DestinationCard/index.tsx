import { StyledArticle } from "./styles";

interface DestinationCardProps {
    figure_path: string,
    title: string,
    subtitle: string,
    bullets: string[]
}

export function DestinationCard({figure_path, title, subtitle, bullets}: DestinationCardProps){
    return(
        <StyledArticle>
            <figure>
                <img src={figure_path} alt="" />
            </figure>
            <h1>{title}</h1>
            <p>{subtitle}</p>

            <ul>
                {bullets.map((item) => (
                    <li>- {item}</li>
                ))}
            </ul>
        </StyledArticle>
    )
}