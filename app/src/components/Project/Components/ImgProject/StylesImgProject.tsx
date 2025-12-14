"use client"
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImage = styled(Image)`
    width: 550px;
    height: 350px;
    border-radius: 16px;
    border: 7px solid #000;
    @media only screen and (max-width: 768px) {
        width: 350px;
        height: auto;
    } 
`