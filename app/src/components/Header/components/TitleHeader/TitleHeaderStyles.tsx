"use client"
import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const SvgTitle = styled.svg`
    background: #fff;
    width: 100%;

    text{
        font-size: 5rem
        color:#fff;
    }
`

const TitleHeadingTyping = keyframes`
    from{

    }to{

    }
`

export const TitleHeading = styled.text`
    font-size: 5rem;
`

const titleTyping = keyframes`
    from{
        width: 0ch;
    }to{
        width: 22ch;
    }
`

export const Title = styled.p`
    margin-top: 60px;
    color: #fff;
    font-size: 1.4rem;
    text-transform: capitalize; 
    width: 22ch;
    text-wrap: nowrap;
    overflow: hidden;
    animation: ${titleTyping} 4s steps(50) 1;
`

