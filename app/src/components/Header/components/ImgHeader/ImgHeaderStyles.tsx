"use client"
import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
    width: 44%;
    display: flex;
    
`

export const WrapperStyle = styled.div`
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    background-color: #0077B6;
`

export const StyledImage = styled(Image)`
    width: 470px;
    height: 685px;
    height: auto;
    border-radius: 16px;
    border: 2px solid #fff;
    transform: rotate3d(1, 1, 1, 10deg);
    &:hover {
    transform: rotate(0deg);
  }
`;