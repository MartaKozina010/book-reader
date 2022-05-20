import { Paper } from "@mui/material"
import styled from "styled-components"
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { useState } from "react";
import ClickAwayListener from '@mui/base/ClickAwayListener'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleFavorite } from "../redux/favoritesSlice";
import React from "react";
import { Link } from "react-router-dom";

const StyledPaper = styled(Paper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 1vw;
    margin: .5vw;
    width: 100%;
    height: 80px;

    &:hover{
    background-color: #fff7f7;
    }
`

const Title = styled.p`
    font-size: 18px;
    color: lightcoral;
    padding-left: 10px;
`

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const ReadBox = styled.div`
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

const StyledLink = styled(Link)`
    text-decoration: none;
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bookshelves = styled.ul`
    color: grey;
    font-size: 14px;
    display: flex;
    box-sizing: border-box;
    padding-left: 25px;
`

const Booktype = styled.li`
    padding-right: 30px;
    text-decoration: none;
`

interface Props {
    id?: number,
    title: string,
    bookshelves?: string[]
}

export const SingleBookCard: React.FC<Props> = (props) => {
    const [showBookshelves, setShowBookshelves] = useState(false)
    const dispatch = useAppDispatch();
    const favoriteBooks = useAppSelector(state => state.favorites.favoriteBooks)

    const toggleFavorites = (title: string) => {
        dispatch(toggleFavorite(title))
    }

    return (
        <ClickAwayListener onClickAway={() => setShowBookshelves(false)}>
            <StyledPaper>
                {showBookshelves ?
                    <Bookshelves>
                        {props.bookshelves?.length === 0 ? <Booktype>OOOPS, out of known categories</Booktype> : props.bookshelves?.map(el => <Booktype key={el}>{el}</Booktype>)}
                    </Bookshelves> :
                    <>
                        <TitleBox>
                            <MenuBookRoundedIcon
                                sx={{ color: "lightcoral" }} />
                            <Title onClick={() => setShowBookshelves(true)}>{props.title}</Title>
                        </TitleBox>
                        <ButtonBox>
                            {favoriteBooks.includes(props.title) ?
                                <FavoriteRoundedIcon onDoubleClick={() => toggleFavorites(props.title)} /> :
                                <FavoriteBorderRoundedIcon onDoubleClick={() => toggleFavorites(props.title)} />}
                            <StyledLink to={`book/${props.id}`}><ReadBox>READ</ReadBox></StyledLink>
                        </ButtonBox>
                    </>}
            </StyledPaper>
        </ClickAwayListener>
    )
}
