import React, { useCallback, useContext, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Status,
  StatusContainer,
  EndDate,
  ProjectsTitleContainer,
  ImgContainer,
  TdContainer,
  InfoContainer,
  Pagination,
  PaginationContainer,
  PassPagesButton,
  PaginationButton,
  MainContainer,
  Options,
  SelectView,
} from "./styles";
import {
  ButtonBack,
  ButtonFront,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowRight,
  FaGithub,
  FaPencilAlt,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import { dateFormatter } from "../../utils/formatter";
import { DeleteModal } from "../DeleteModal";
import { IProjectInformation } from "../../@types/IProjectInformation";
import { api } from "../../lib/axios";
import "keen-slider/keen-slider.min.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchForm } from "../SearchForm";
import { ICreateProjectInformationInput } from "../../@types/ICreateProjectInformationInput";

export const Projects = () => {
  const { projects, setProjects } = useContext(ProjectsContext);
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const [recordLimitPerPage, setRecordLimitPerPage] = useState<number>(2);
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const fetchProjects = useCallback(async () => {
    const response = await api.get<IProjectInformation[]>("projects", {
      params: {
        _sort: "registrationDate",
        _order: "desc",
        tags_like: query,
        _limit: recordLimitPerPage,
        _page: currentPage,
      },
    });

    if (currentPage !== 1 && !response.data.length) {
      setCurrentPage((state) => state - 1);
      return;
    }
    const allProjects = Number(response.headers["x-total-count"]);
    const pagesQuantity = Math.ceil(allProjects / recordLimitPerPage);
    setTotalProjects(allProjects);
    setTotalPages(pagesQuantity);

    const arrayPages = [];
    for (let page = 1; page <= pagesQuantity; page++) {
      arrayPages.push(page);
    }
    setPages(arrayPages);

    response.data && setProjects(response.data);
  }, [currentPage, query, recordLimitPerPage, setProjects]);

  const handleDeleteProject = async (id: number) => {
    await api.delete<IProjectInformation>(`projects/${id}`);
    const newProjectList = projects?.filter((project) => {
      return project.id !== id;
    });
    setProjects(newProjectList);
    fetchProjects();
  };

  const pageNumberLimit = 1;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleNextPageButton = () => {
    setCurrentPage((state) => state + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePreviousPageButton = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const resetPage = (query?: string) => {
    setCurrentPage(1);
    setQuery(query!);
  };

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);
  return (
    <MainContainer id="projects">
      <SectionDivider />
      <br />
      <ProjectsTitleContainer>
        <SectionTitle>Projetos</SectionTitle>
        <ButtonBack>
          <ButtonFront
            onClick={() => {
              navigate(`/information/insert`);
            }}
          >
            <AiOutlinePlusCircle title="Adicionar" />
            Novo Projeto
          </ButtonFront>
        </ButtonBack>
      </ProjectsTitleContainer>

      <Options>
        <SelectView
          onChange={(e) => {
            setRecordLimitPerPage(Number(e.target.value));
          }}
        >
          <option value="2">Exibir 2 Projetos</option>
          <option value="4">Exibir 4 Projetos</option>
          <option value="6">Exibir 6 Projetos</option>
          <option value="10">Exibir 10 Projetos</option>
        </SelectView>
        {projects && totalPages > 1 && (
          <Pagination>
            {currentPage > 1 && (
              <PassPagesButton onClick={handlePreviousPageButton}>
                <FaArrowAltCircleLeft />
              </PassPagesButton>
            )}
            {pages.map((page) => {
              if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
                return (
                  <PaginationButton
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    isSelected={page === currentPage}
                  >
                    {page}
                  </PaginationButton>
                );
              } else {
                return null;
              }
            })}

            {currentPage < totalPages && (
              <PassPagesButton onClick={handleNextPageButton}>
                <FaArrowAltCircleRight />
              </PassPagesButton>
            )}
          </Pagination>
        )}
        <SearchForm onGetProjects={resetPage} />
      </Options>
      <br />
      <section>
        <article>
          {projects.map(
            ({
              id,
              description,
              title,
              image,
              repoLink,
              webSiteLink,
              tags,
              status,
              endDate,
            }) => {
              return (
                <>
                  <div key={id}>
                    <TitleContent>{title}</TitleContent>
                    <TdContainer>
                      <ImgContainer>
                        <Img src={image} />
                      </ImgContainer>
                      <InfoContainer>
                        <CardInfo>{description}</CardInfo>
                        <TagList>
                          {tags &&
                            tags.split(" ").map((tag, i) => {
                              return (
                                <Tag variant={i} key={i}>
                                  {tag}
                                </Tag>
                              );
                            })}
                        </TagList>
                        <StatusContainer>
                          <Status variant={status}>
                            <span></span> <strong>{status}</strong>
                          </Status>
                          {status === "Concluído" && endDate && (
                            <EndDate>
                              {dateFormatter.format(new Date(endDate))}
                            </EndDate>
                          )}
                        </StatusContainer>
                        <UtilityList>
                          <Link to={repoLink}>
                            <ExternalLinks>
                              <FaGithub />
                              GitHub
                            </ExternalLinks>
                          </Link>
                          <Link to={webSiteLink}>
                            <ExternalLinks>
                              <TbWorld />
                              Website
                            </ExternalLinks>
                          </Link>
                          <ExternalLinks>
                            <FaPencilAlt />
                            Editar
                          </ExternalLinks>

                          <DeleteModal
                            projectId={id}
                            deleteProject={handleDeleteProject}
                          />
                        </UtilityList>
                      </InfoContainer>
                    </TdContainer>
                  </div>
                </>
              );
            }
          )}
        </article>
      </section>
    </MainContainer>
  );
};
