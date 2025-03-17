import { Container, Description, Title } from "./Item.styles";

export const Item = ({ title, description, image }) => {
  console.log({ title, description, image });
  return (
    <Container>
      <img src={image} alt="" width="80px" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
