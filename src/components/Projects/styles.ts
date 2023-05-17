import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 32px 0 0;
  margin: 0 auto;
  max-width: 1040px;
  //border: solid red 2px;

  div {
    display: flex;
    justify-content: space-between;
  }
  /* 
  section {
    article {
      border: solid red 2px;
      margin: 2rem 1rem 2rem 0rem;
      width: 48rem;
      img {
        width: 100%;

        max-width: 45rem;
        height: 25rem;
        background-size: cover;
      }
    }
  }
 */
  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

/* export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`;

export const ImgContainer = styled.div`
  width: 90%;
  border-radius: 6px;
  //max-height: 26.4rem;
  //border: solid ${(props) => props.theme.colors.background2} 2px;

  overflow: hidden;
`;

export const Hr = styled.hr`
  width: 90%;
  height: 1px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const TdContainer = styled.span`
  display: flex;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  //align-items: center;
  margin-bottom: 2rem;
  border-radius: 8px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  //min-width: 40rem;
  margin: 1.6rem;
  display: flex;

  //border: solid green 2px;
  overflow: hidden;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.h3`
  display: flex;

  z-index: 20;

  font-weight: 700;

  //border: solid red 2px;
  padding: 1rem 0;
  font-size: 2rem;
  color: #e4e6e7;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const SelectView = styled.select`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 0;
  padding: 0 1rem;
  width: 14rem;
  background: #323238;

  box-shadow: 0 1px 5px #00dbc4;
  color: #e1e1e6;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  //border: solid white 4px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
  //height: 200px;
  align-self: center;
  margin-top: 3rem;
  position: relative;
  bottom: 1.5rem;
  //border: solid blue 5px;
`;

interface IsSelected {
  isSelected: boolean;
}

export const PaginationButton = styled.button<IsSelected>`
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  ${(props) =>
    props.isSelected && {
      background: "#945dd6",
    }}
  color: #d4c0c0;
  font-size: 1.6rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  &:hover {
    background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
    transition: background 0.3s;
    ${(props) =>
      props.isSelected && {
        background: "#13adc7",
      }}
  }
`;

export const PassPagesButton = styled.button`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  color: white;
  font-size: 2rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  &:hover {
    background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
    transition: background 0.3s;
  }

  &:active {
    font-size: 24px;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 1rem;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.main};
  //text-align: center;
  //border: salmon solid 2px;
  //height: 14.55rem;
  margin: 1rem;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.div`
  list-style-type: none;
  //border: solid purple 2px;
  height: 3rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0;
  gap: 1.5rem;
`;

export const ExternalLinks = styled.button`
  color: #d4c0c0;
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 15px;
  transition: 0.5s;
  height: 3.1rem;
  width: 9.6rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
  //height: 12rem;
  overflow: hidden;
`;

interface TagsProps {
  variant: number;
}

export const Tag = styled.li<TagsProps>`
  color: #fff;
  text-shadow: 5px 5px 5px black;
  font-size: 1.5rem;
  background: ${(props) => props.theme.tagColor[props.variant]};
  padding: 2px 6px;
  border-radius: 6px;
  height: max-content;
`;

interface StatusProps {
  variant: "Concluído" | "Em progresso" | "Pausado" | "Futuro";
}

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  //padding: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem;
  width: 90%;
  align-self: center;
`;

export const Status = styled.span<StatusProps>`
  color: #d8bfbf;
  font-size: 1.5rem;
  //border: solid 2px yellow;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;

  span {
    background: ${(props) =>
      props.variant === "Concluído"
        ? props.theme.colors["green-300"]
        : (props) =>
            props.variant === "Pausado"
              ? props.theme.colors["red-500"]
              : (props) =>
                  props.variant === "Em progresso"
                    ? props.theme.colors.yellow
                    : props.theme.colors["blue-600"]};
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
  }
`;

export const EndDate = styled.span`
  color: #d8bfbf;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;
 */
