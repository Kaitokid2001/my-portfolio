"use client"
import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SvgTitle = styled.svg`
    width: 800px;
    background-color: #17173d;

    @media only screen and (max-width: 1170px) {
        width: 350px;
    } 
`

const TitleHeadingTyping = keyframes`
    to {
    stroke-dashoffset: 0;
  }
`

export const TitleHeading = styled.text`
    font-size: 10rem;
    fill: none;
    stroke: white;
    stroke-width: 3px;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: ${TitleHeadingTyping} 2s linear forwards;

    @media only screen and (max-width: 1170px) {
        font-size: 10rem;
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

    @media only screen and (max-width: 1170px) {
        font-size: 1rem;
    }
`

