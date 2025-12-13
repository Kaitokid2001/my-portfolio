'use client'
import styled from "styled-components";


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px;
    column-gap: 20px;
    row-gap: 60px;

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
    gap: 30px;
  }

    @media only screen and (max-width: 767.98px) {
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    gap: 20px;
  }
`