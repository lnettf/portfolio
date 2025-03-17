import { Container, TextAreaContainer, Label } from "./TextArea.styles";

export const TextArea = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextAreaContainer type="text" {...props} />
    </Container>
  );
};
