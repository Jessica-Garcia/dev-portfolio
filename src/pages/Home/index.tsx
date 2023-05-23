import { useCallback, useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";
import { Technologies } from "../../components/Technologies";
import { Timeline } from "../../components/TimeLine";
import { IProjectInformation } from "../../@types/IProjectInformation";
import { api } from "../../lib/axios";
import { ITimelineInformations } from "../../@types/ITimelineInformations";

export const Home = () => {
  const [projects, setProjects] = useState<IProjectInformation[]>([]);
  const [timeList, setTimeList] = useState<ITimelineInformations[]>([]);

  const getProjects = useCallback(async () => {
    const response = await api.get<IProjectInformation[]>("projects");
    response.data && setProjects(response.data);
  }, []);

  const getTimeline = useCallback(async () => {
    const response = await api.get<ITimelineInformations[]>("timeline");
    response.data && setTimeList(response.data);
  }, []);

  useEffect(() => {
    getProjects();
    getTimeline();
  }, [getProjects, getTimeline]);

  return (
    <>
      <Hero />
      <Timeline timeList={timeList} getTimeline={getTimeline} />
      <Technologies />
      <Projects projects={projects} getProjects={getProjects} />
    </>
  );
};
