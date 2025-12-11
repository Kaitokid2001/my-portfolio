"use client"
import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const SvgTitle = styled.svg`
    background-color: #0f0f29ff;
`

const TitleHeadingTyping = keyframes`
    to {
    stroke-dashoffset: 0;
  }
`

export const TitleHeading = styled.text`
    font-size: 9rem;
    fill: none;
    stroke: white;
    stroke-width: 3px;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: ${TitleHeadingTyping} 2s linear forwards;
`

const titleTyping = keyframes`
    from{
        width: 0ch;
    }to{
        width: 21ch;
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

