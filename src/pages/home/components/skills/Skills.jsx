import { Item } from "./components/Item";
import { SkillsList } from "./constants";
import { Container, List } from "./Skills.styles";

export function Skills() {
  return (
    <Container>
      <h1>Mis Habilidades</h1>
      <List>
        {SkillsList.map((skill) => {
          return (
            <Item
              title={skill.title}
              description={skill.description}
              image={skill.image}
            />
          );
        })}
      </List>
    </Container>
  );
}
