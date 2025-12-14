"use client"
import styled from "styled-components"
import { Button } from "../../../Components/Button/StylesButton";

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 900px) {
    margin-top: 20px;
  }
`

export const Body = styled.div`
    display : flex;
    gap: 30px;
`

export const ButtonDemo = styled(Button)`
    min-width: 160px;
    line-height: 60px;
    color: #2E80CE;
    border-radius: 10px;
    border: 1px solid #2E80CE;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 7px;

    &:hover{
        opacity: 1;
        color: #000;
        background-color: #fff;
        border: 1px solid #fff;
    }

    @media only screen and (max-width: 900px) {
        line-height: 25px;
  }
`

export const ButtonView = styled(Button)`
    min-width: 160px;
    line-height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    gap: 7px;

    &:hover{
        opacity: 1;
        color: #000;
        background-color: #fff;
        border: 1px solid #fff;
    }

    @media only screen and (max-width: 900px) {
        line-height: 25px;
  }
`