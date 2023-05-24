import React, { ReactNode, createContext, useCallback, useState } from "react";
import { IProjectInformation } from "../@types/IProjectInformation";
import { ICreateProjectInformationInput } from "../@types/ICreateProjectInformationInput";
import { api } from "../lib/axios";
interface ProjectsContextType {
  projects: IProjectInformation[];
  setProjects: React.Dispatch<React.SetStateAction<IProjectInformation[]>>;
  createProject: (project: ICreateProjectInformationInput) => Promise<void>;
  updateProject: (
    id: number,
    project: ICreateProjectInformationInput
  ) => Promise<void>;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsContext = createContext({} as ProjectsContextType);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<IProjectInformation[]>([]);

  const createProject = useCallback(
    async (project: ICreateProjectInformationInput) => {
      const {
        description,
        title,
        image,
        repoLink,
        webSiteLink,
        tags,
        status,
        endDate,
      } = project;

      const response = await api.post("projects", {
        description,
        title,
        image:
          image ||
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&h=400",
        repoLink,
        webSiteLink,
        tags,
        status,
        endDate,
        registrationDate: new Date(),
      });
      setProjects((state) => [...state, response.data]);
    },
    [setProjects]
  );

  const updateProject = useCallback(
    async (id: number, project: ICreateProjectInformationInput) => {
      const {
        description,
        title,
        image,
        repoLink,
        webSiteLink,
        tags,
        status,
        endDate,
      } = project;

      const response = await api.put(`projects/${id}`, {
        description,
        title,
        image:
          image ||
          "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&h=400",
        repoLink,
        webSiteLink,
        tags,
        status,
        endDate,
      });
      setProjects((state) => [...state, response.data]);
    },
    [setProjects]
  );

  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects, createProject, updateProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
