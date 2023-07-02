import { StyledSection } from "./styles";

interface AppLimiterProps {
    children: React.ReactNode
}

export function AppLimiter({ children }: AppLimiterProps){
    return(
        <StyledSection>
            { children }
        </StyledSection>
    )
}