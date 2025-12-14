"use client"
import styled from "styled-components"
import { Button } from "../../Components/Button/StylesButton";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 900px) {
    margin-top: 100px;
  }
`

export const InputFullName = styled.input`
  width: 100%;
  height: 70px;
  padding: 18px 22px;
  background: #0f172a; /* navy đậm */
  color: #ffff;
  border: 1.5px solid #3b82f6;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.25s ease;
  &::placeholder {
    color: #94a3b8;
    font-size: 1rem;
    letter-spacing: 0.2px;
    font-weight: 400;
    opacity: 0.85;
  }

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
  }
`

export const InputFullEmail = styled.input`
  width: 100%;
  height: 70px;
  padding: 18px 22px;
  background: #0f172a; /* navy đậm */
  color: #ffff;
  border: 1.5px solid #3b82f6;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.25s ease;
  margin-top: 20px;
  &::placeholder {
    color: #94a3b8;
    font-size: 1rem;
    letter-spacing: 0.2px;
    font-weight: 400;
    opacity: 0.85;
  }

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
  }
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 220px;
  padding: 20px 22px;
  background: #0f172a;
  color: #fff;
  border: 1.5px solid #3b82f6;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  margin-top: 20px;
  resize: none;
  outline: none;
  transition: all 0.25s ease;

  &::placeholder {
    color: #94a3b8;
    font-weight: 400;
  }

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
  }
`


export const ButtonSubmit = styled(Button)`
  min-width: 260px;
  border-radius: 10px;

  gap: 7px;

  &:hover{
    opacity: 1;
    color: #000;
    background-color: #fff;
    border: 1px solid #fff;
    }
`