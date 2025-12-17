"use client";

import { useState } from "react";
import {
  Wrapper,
  Body,
  InputFullName,
  InputFullEmail,
  StyledTextarea,
  ButtonSubmit,
} from "./StylesInput";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter name";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter email";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email";
      }
    }

    if (!message.trim()) {
      newErrors.message = "Please enter the content";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    // Thành công
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <Wrapper>
      <Body>
        <InputFullName
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          $error={!!errors.name}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </Body>

      <Body>
        <InputFullEmail
          placeholder="@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          $error={!!errors.email}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </Body>

      <Body>
        <StyledTextarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          $error={!!errors.message}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </Body>

      <ButtonSubmit onClick={handleSubmit}>
        Send Message
      </ButtonSubmit>
    </Wrapper>
  );
}

export default Input;