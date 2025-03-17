import { Container, InputContainer, Label } from "./Input.styles";

export const Input = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer type="text" {...props} />
    </Container>
  );
};
