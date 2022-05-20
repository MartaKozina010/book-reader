import { useAppSelector } from "../redux/hooks"
import { SingleBookCard } from "./SingleBookCard"
import { PageSkeleton } from "./PageSkeleton"
import styled from "styled-components"

const BookList = styled.div`
    width: 95%;
`

export const FavoriteBooks: React.FC = () => {
    const favoriteBooks = useAppSelector(state => state.favorites.favoriteBooks)

    return (
        <PageSkeleton>
            <BookList>
                {favoriteBooks.map(el => <SingleBookCard title={el}/>)}
            </BookList>
        </PageSkeleton>
    )
}