import { Wrapper, InputFullName, InputFullEmail, StyledTextarea, ButtonSubmit} from "./StylesInput";

function Input() {
  return (
        <Wrapper>
          <InputFullName placeholder="Name"/>
          <InputFullEmail placeholder="@gmail.com"/>
          <StyledTextarea placeholder="Your Message"/>
          <ButtonSubmit>Send Message</ButtonSubmit>
        </Wrapper>
  )
}

export default Input;