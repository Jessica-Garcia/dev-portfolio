import { useCallback, useContext, useEffect, useState } from "react";
import {
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
  PassPagesButton,
  PaginationButton,
  MainContainer,
  Options,
  SelectView,
} from "./styles";
import {
  ButtonBack,
  ButtonFront,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaGithub,
  FaPencilAlt,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import { dateFormatter } from "../../utils/formatter";
import { DeleteModal } from "../DeleteModal";
import { IProjectInformation } from "../../@types/IProjectInformation";
import { api } from "../../lib/axios";
import { Link, useNavigate } from "react-router-dom";
import { SearchForm } from "../SearchForm";

export const Projects = () => {
  /*  const { projects, setProjects } = useContext(ProjectsContext);

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
  }, [fetchProjects]); */
  return (
    <MainContainer id="projects">
      <SectionDivider />
      <div>
        <SectionTitle>Projetos</SectionTitle>
        <ButtonBack>
          <ButtonFront>
            <AiOutlinePlusCircle title="Adicionar" />
            Novo Projeto
          </ButtonFront>
        </ButtonBack>
      </div>

      <span>
        <SearchForm />
      </span>

      {/* <section>
        <article>
          <div>
            <TitleContent>title</TitleContent>
            <TdContainer>
              <ImgContainer>
                <Img />
              </ImgContainer>
              <InfoContainer>
                <CardInfo>description</CardInfo>
                <TagList>
                  <Tag></Tag>
                </TagList>
                <StatusContainer>
                  <Status>
                    <span></span> <strong>status</strong>
                  </Status>

                  <EndDate>data</EndDate>
                </StatusContainer>
                <UtilityList>
                  <Link>
                    <ExternalLinks>
                      <FaGithub />
                      GitHub
                    </ExternalLinks>
                  </Link>
                  <Link>
                    <ExternalLinks>
                      <TbWorld />
                      Website
                    </ExternalLinks>
                  </Link>
                  <ExternalLinks>
                    <FaPencilAlt />
                    Editar
                  </ExternalLinks>

                  <DeleteModal />
                </UtilityList>
              </InfoContainer>
            </TdContainer>
          </div>
        </article>
      </section> */}
    </MainContainer>
  );
};
