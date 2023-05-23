import React, { ReactNode, createContext, useState } from "react";
import { IProjectInformation } from "../@types/IProjectInformation";

interface ProjectsContextType {
  projects: IProjectInformation[];
  setProjects: React.Dispatch<React.SetStateAction<IProjectInformation[]>>;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsContext = createContext({} as ProjectsContextType);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<IProjectInformation[]>([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
