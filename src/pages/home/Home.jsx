import { Menu } from "../../shared/components/menu/Menu";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Hero } from "./components/hero/Hero";
import { Skills } from "./components/skills/Skills";

export const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <AboutMe />
    </>
  );
};
