import { useState } from "react"
import styled from "styled-components"
import { SingleBookCard } from "./SingleBookCard"

const StyledBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
`

const StyledInput = styled.input`
    height: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 1%;
    border: none;
`

const StyledButton = styled.button`
    background-color: #f08080;
    color: white;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    margin-left: 10px;

    &:hover {
    background-color: #f08080b4;
    }
`

const SearchResult = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

interface ResponseType {
    title: string
}

export const SearchInput: React.FC = () => {
    const [input, setInput] = useState("");
    const [fetchedTitles, setFetchedTitle] = useState([] as ResponseType[])

    const inputHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
        setInput(event.target.value)
    }

    const searchResult = (search: string) => {
        fetch(`https://gnikdroy.pythonanywhere.com/api/book/?search=${search}`)
            .then(res => res.json())
            .then(data => setFetchedTitle(data.results))
            .catch(err => console.log(err))
    }

    return (
        <>
            <StyledBox>
                <StyledInput value={input} onChange={inputHandler} placeholder="search book" />
                <StyledButton onClick={() => searchResult(input)}>search</StyledButton>
                <StyledButton onClick={() => setFetchedTitle([])}>clear</StyledButton>
            </StyledBox>
            {fetchedTitles.length ? <SearchResult>
                {fetchedTitles.map(el => <SingleBookCard key={el.title} title={el.title} />)}
            </SearchResult> : null}
        </>
    )
}