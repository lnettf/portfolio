import { ROUTES } from "./constants";
import { Container, Item, List, Title } from "./Menu.styles";

export const Menu = () => {
  return (
    <Container>
      <Title>CarlosDev</Title>
      <List>
        {ROUTES.map((route) => (
          <Item key={route.link} to={route.link}>
            {route.title}
          </Item>
        ))}
      </List>
    </Container>
  );
};
