import { Pagination } from "@mui/material"
import React, { useState } from "react"
import { useGetBooksQuery } from "../redux/apiSlice"
import { SingleBookCard } from "./SingleBookCard"
import { PageSkeleton } from "./PageSkeleton"

const DataError: React.FC = () => {
    return (
        <PageSkeleton>
                {Array(10).fill(<SingleBookCard
                    title="No books loaded. Retry!"
                    bookshelves={[] as string[]} />)}
        </PageSkeleton>
    )
}

const DataLoading: React.FC = () => {
    return (
        <PageSkeleton>
                {Array(10).fill(<SingleBookCard
                    title="Loading books..."
                    bookshelves={[] as string[]} />)}
        </PageSkeleton>
    )
}

export const HomePage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, error } = useGetBooksQuery(currentPage)

    if (!data) return <DataLoading />
    if (isLoading) return <DataLoading />
    if (error) return <DataError />

    return (
        <PageSkeleton>
            {data.book.map(el =>
                <SingleBookCard
                    key={el.title}
                    id={el.id}
                    title={el.title}
                    bookshelves={el.bookshelves} />)}
            <Pagination count={data.count} page={currentPage} onChange={(e, page) => setCurrentPage(page)} />
        </PageSkeleton>
    )
}