import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageSkeleton } from "./PageSkeleton";

const BookContainer = styled.div`
    text-align: justify;
    padding: 2%;
`

export const ReadBook: React.FC = () => {
    const { id } = useParams()
    const [getBook, setGetBook] = useState("Loading book...")

    useEffect(() => {
        fetch(`https://www.gutenberg.org/files/${id}/${id}-0.txt`) //or async/await
            .then(res => res.text())
            .then(data => setGetBook(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <PageSkeleton>
            <BookContainer>{getBook}</BookContainer>
        </PageSkeleton>
    )
}