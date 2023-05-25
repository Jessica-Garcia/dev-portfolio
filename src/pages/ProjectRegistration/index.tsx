import { NewProjectFormInputs } from "../../validations/ZodValidations";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ProjectInformationForm } from "../../components/ProjectInformationForm";
import { api } from "../../lib/axios";
import { v4 as uuidv4 } from "uuid";

export const ProjectRegistration = () => {
  const { reset } = useForm<NewProjectFormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();
  const create = `/information/insert`;

  const handleCreateProject = useCallback(
    async (data: NewProjectFormInputs) => {
      try {
        const newProject = {
          description: data.description,
          title: data.title,
          image:
            data.image ||
            "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&h=400",
          repoLink: data.repoLink,
          webSiteLink: data.webSiteLink,
          tags: data.tags,
          status: data.status,
          endDate: data.endDate,
        };

        await api.post("projects", {
          id: uuidv4(),
          registrationDate: new Date(),
          ...newProject,
        });

        reset();
        navigate("/#projects");
      } catch (error) {
        console.log(error);
      }
    },
    [reset, navigate]
  );

  const handleUpdateProject = useCallback(
    async (data: NewProjectFormInputs) => {
      try {
        const updatedProject = {
          description: data.description,
          title: data.title,
          image:
            data.image ||
            "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&h=400",
          repoLink: data.repoLink,
          webSiteLink: data.webSiteLink,
          tags: data.tags,
          status: data.status,
          endDate: data.endDate,
        };

        await api.put(`projects/${id}`, { ...updatedProject });

        reset();
        navigate("/#projects");
      } catch (error) {
        console.log(error);
      }
    },
    [reset, navigate, id]
  );

  return (
    <>
      {window.location.pathname === create ? (
        <ProjectInformationForm onSaveProject={handleCreateProject} />
      ) : (
        <ProjectInformationForm onSaveProject={handleUpdateProject} />
      )}
    </>
  );
};
