import { Container, Title } from "./HighlightCounterStyles";

export const HighlightCounter = ({ counter, helperText }) => {
  return (
    <Container>
      <Title>{counter}+</Title>
      <p>{helperText}</p>
    </Container>
  );
};
