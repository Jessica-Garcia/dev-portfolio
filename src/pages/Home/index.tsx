import { Achievements } from "../../components/Achievements";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/ProjectsCopy";
import { Technologies } from "../../components/Technologies";
import { Timeline } from "../../components/TimeLine";

export const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Achievements />
    </>
  );
};
