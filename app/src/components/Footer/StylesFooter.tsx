'use client'
import styled from "styled-components";


export const Wrapper = styled.section`
  width: 1170px;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 10px 0 150px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 0;
  } 
`

export const Title = styled.p`
  color: #575F66;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
  text-transform: capitalize;
`

export const Desc = styled.h1`
  color: #2E80CE;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.67;
  text-transform: capitalize;
  margin-bottom: 100px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
  } 
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: auto 450px;
    column-gap: 80px;

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    } 
`

export const Icon = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 30px;
`

export const TitleIcon = styled.p`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.67;
  text-transform: capitalize;

  @media only screen and (max-width: 768px) {
      margin-top: 50px;
    } 
`