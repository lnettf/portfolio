import {
  Container,
  Content,
  ContentLayout,
  HighlightContainer,
  Image,
  SubTitle,
  Title,
} from "./AboutMe.styles";
import { HighlightCounter } from "./components/highlightcounter/Highlightcounter";

export const AboutMe = () => {
  return (
    <Container>
      <Title>Sobre Mí</Title>
      <ContentLayout>
        <Image src="https://fakeimg.pl/600/" alt="" />
        <Content>
          <SubTitle>¿Quién soy?</SubTitle>
          <p>
            Soy un desarrollador full-stack con 8 años de experiencia en la
            industria. Empecé mi carrera como desarrollador frontend y luego
            expandí mis habilidades hacia el backend y DevOps.
          </p>
          <p>
            Me apasiona crear soluciones tecnológicas que resuelvan problemas
            reales y mejoren la vida de las personas. He trabajado en diversos
            sectores, desde fintech hasta e-commerce, siempre buscando aprender
            y crecer profesionalmente.
          </p>
          <HighlightContainer>
            <HighlightCounter counter={4} helperText="Años de experiencia" />
            <HighlightCounter counter={50} helperText="Proyectos completados" />
            <HighlightCounter counter={20} helperText="Clientes satisfechos" />
          </HighlightContainer>
          <p>
            Cuando no estoy programando, disfruto de la fotografía, el
            senderismo y tocar la guitarra. Creo firmemente en el aprendizaje
            continuo y en compartir conocimientos con la comunidad.
          </p>
        </Content>
      </ContentLayout>
    </Container>
  );
};
