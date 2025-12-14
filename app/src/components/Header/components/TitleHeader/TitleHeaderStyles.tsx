"use client"
import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SvgTitle = styled.svg`
    background-color: #17173d;
`

const TitleHeadingTyping = keyframes`
    to {
    stroke-dashoffset: 0;
  }
`

export const TitleHeading = styled.text`
    font-size: 4rem;
    fill: none;
    stroke: white;
    stroke-width: 3px;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: ${TitleHeadingTyping} 2s linear forwards;

    @media only screen and (max-width: 1170px) {
        font-size: 6rem;
    } 
`

const titleTyping = keyframes`
    from{
        width: 0ch;
    }to{
        width: 21ch;
    }
`

export const Title = styled.p`
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    text-transform: capitalize; 
    width: 22ch;
    text-wrap: nowrap;
    overflow: hidden;
    animation: ${titleTyping} 2s steps(20) 1;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

