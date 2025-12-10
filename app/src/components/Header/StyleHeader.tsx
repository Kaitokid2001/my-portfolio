'use client'
import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background-color: black;
`

export const TitleHeading = styled.h1`
  font-size: 5em;
  color: #fff;
  text-transform: uppercase; 
  font-weight: 700;      
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
  max-width: var(--max-width);
  text-align: center;
  text-rendering:
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
`

export const Title = styled.p`
  color: #fff; 
  text-transform: capitalize; 
`