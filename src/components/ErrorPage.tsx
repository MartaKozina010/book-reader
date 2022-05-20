import styled from "styled-components"
import { PageSkeleton } from "./PageSkeleton"

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorFoto = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`

export const Error: React.FC = () => {
    return (
        <PageSkeleton>
            <ContentBox>
                Sorry, page doesn't exist
                <ErrorFoto src="/errorgif.gif" />
            </ContentBox>
        </PageSkeleton>
    )
} 