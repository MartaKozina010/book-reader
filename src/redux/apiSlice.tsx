import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface GetBooksResponse {
    count: number;
    results: {
        id: number,
        title: string,
        bookshelves: string[],
        resources: {
            uri: string,
            type: string
        }[]
    }[]
}

interface GetBooksTransformed {
    count: number,
    book: {
        id: number,
        title: string,
        bookshelves: string[],
        url?: string
    }[]
}

const URL = "https://gnikdroy.pythonanywhere.com/api/"

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    endpoints: (builder) => ({
        getBooks: builder.query<GetBooksTransformed, number>({
            query: (page) => `book/?page=${page}`,
            transformResponse: (response: GetBooksResponse) => {
                return {
                    count: response.count,
                    book: response.results.map(res => ({
                        id: res.id,
                        title: res.title,
                        bookshelves: res.bookshelves,
                        url: res.resources.find(el => el.type.includes("text/plain"))?.uri
                    }))
                }
            }
        })
    })
})

export const { useGetBooksQuery } = booksApi;