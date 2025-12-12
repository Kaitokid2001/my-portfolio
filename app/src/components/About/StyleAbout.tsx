'use client'
import styled from "styled-components";

export const Container = styled.div`
  width: 1170px;
  max-width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  text-align: center;
`
export const Title = styled.h1`
  color: #575F66;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: capitalize;
`

export const Desc = styled.p`
  color: #2E80CE;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.67;
  text-transform: capitalize;
  margin-bottom: 60px;
`

export const Body = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
`

