import React, { ReactNode, createContext, useCallback, useState } from "react";
import { api } from "../lib/axios";
import { IProjectInformation } from "../@types/IProjectInformation";
import { ICreateProjectInformationInput } from "../@types/ICreateProjectInformationInput";

interface ProjectsContextType {
  projects: IProjectInformation[];
  setProjects: React.Dispatch<React.SetStateAction<IProjectInformation[]>>;
  createProject: (data: ICreateProjectInformationInput) => Promise<void>;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsContext = createContext({} as ProjectsContextType);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<IProjectInformation[]>([]);

  const createProject = useCallback(
    async (data: ICreateProjectInformationInput) => {
      const {
        description,
        title,
        image,
        repoLink,
        webSiteLink,
        tags,
        status,
        endDate,
      } = data;

      const response = await api.post("projects", {
        description,
        title,
        image:
          image ||
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&h=400",
        repoLink: repoLink || "",
        webSiteLink: webSiteLink || "",
        tags,
        status,
        endDate,
        registrationDate: new Date(),
      });
      console.log(data);
      setProjects((state) => [...state, response.data]);
    },
    []
  );

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        createProject,
        setProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
