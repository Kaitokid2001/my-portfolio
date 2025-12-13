"use client"
import styled from "styled-components"

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 900px) {
    margin-top: 100px;
  }
`

export const Title = styled.h1`
    color: #575F66;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.67;
    text-align: start;
`