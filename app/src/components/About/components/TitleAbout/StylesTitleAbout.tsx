"use client"
import styled from "styled-components"
import { Button } from "../../../Components/Button/StylesButton";

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
    margin-top: 100px;
  }
`

export const Title = styled.h1`
    color: #575F66;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.67;
    text-align: start;
    @media only screen and (max-width: 900px) {
    text-align: -webkit-center;
  }
`

export const ButtonResume = styled(Button)`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`