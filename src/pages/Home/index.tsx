import { Achievements } from "../../components/Achievements";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";
import { Technologies } from "../../components/Technologies";
import { Timeline } from "../../components/TimeLine";

export const Home = () => {
  return (
    <>
      <Hero />
      <Timeline />
      <Technologies />
      <Projects />
    </>
  );
};
