'use client'
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    padding: 200px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 1170px) {
        padding: 300px 0 100px;
    }
`

const ScrollBarOpacity = keyframes`
    0%{
        opacity: 0;
    }30%{
        opacity: 1;
    }60%{
        opacity: 1;
    }100%{
        opacity: 0;
        top: 90%;
    }
`

export const ScrollBar = styled.div`
    height: 50px;
    width: 30px;
    border: 2px solid #fff;
    margin-top: 200px;
    border-radius: 50px;
    cursor: pointer;
    position: relative;

    &::before, &::after{
        content: '';
        position: absolute;
        top: 20%;
        left: 50%;
        border: 2px solid #fff;
        height: 10px;
        width: 10px;
        transform: translate(-50%, -100%) rotate(45deg);
        border-top: transparent;
        border-left: transparent;
        animation: ${ScrollBarOpacity} 1s ease-in-out infinite;
    }
    &::after{
        top: 30%;
        animation-delay: 0.3s;
    }
`