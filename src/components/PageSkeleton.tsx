import styled from "styled-components"
import { WidthLimiter } from "./WidthLimiter"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";

const MainBox = styled(WidthLimiter)`
    background-color: #d3d3d38c;
    min-height: 100vh;
    border-radius: 15px 15px;
`

const ContentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    padding: 2%;
`

const HeaderBox = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    box-sizing: border-box;
    padding: 2%;
    background-color: #484848;
    border-radius: 15px 15px 0 0;
`

const StyledH1 = styled.h1`
    font-size: 40px;
`

const StyledP = styled.p`
    color: #f08080;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`

const FlexBox = styled.div`
    display: flex;
`

interface ChildrenProps {
    children?: React.ReactNode
}

export const PageSkeleton: React.FC<ChildrenProps> = ({ children }) => {
    
    return (
        <MainBox>
            <HeaderBox>
                <div>
                    <FlexBox>
                        <StyledLink to="/book-reader">
                            <StyledH1>iKundle</StyledH1>
                        </StyledLink>
                        <StyledLink to="/book-reader/favorites">
                            <FavoriteRoundedIcon sx={{ color: "lightcoral" }} />
                        </StyledLink>
                    </FlexBox>
                    <StyledP>powered by amejzon</StyledP>
                </div>
            <SearchInput/>
            </HeaderBox>
            <ContentBox>
            {children}
            </ContentBox>
        </MainBox>
    )
}