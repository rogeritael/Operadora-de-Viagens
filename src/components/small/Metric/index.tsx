import { StyledDiv } from "./styles";

interface MetricProps {
    emphasis: string,
    title: string,
    description: string
}

export function Metric({ emphasis, title, description }: MetricProps){
    return(
        <StyledDiv>
            <span>{emphasis}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </StyledDiv>
    )
}