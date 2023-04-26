import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 30rem;
  overflow: hidden;
`;
export const ProjectsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  width: 90%;
  height: 1px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const SliderContainer = styled.section`
  display: flex;
  //grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 1rem;
  //justify-items: center;
  //justify-content: center;
  /* column-gap: 2rem;
  row-gap: 3rem; */
  //border: solid blue 2px;
  margin-bottom: 5rem;
  border-radius: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    //display: flex;
    //flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  /* width: 200px;
  max-width: 250px; */
  //width: 100px;
  display: flex;
  flex-direction: column;

  border: solid green 2px;
  overflow: hidden;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 1rem;
`;

export const Notice = styled.span`
  align-self: flex-end;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 2px;
  //border: solid red 2px;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 2rem 5rem;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  //border: salmon solid 2px;
  height: 14.55rem;
  margin-bottom: 1.5rem;
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
  justify-content: space-around;
  align-items: center;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.button`
  color: #d4c0c0;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 15px;
  transition: 0.5s;
  height: 4.1rem;
  width: 12.6rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
  //border: solid red 2px;
  height: 12rem;
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
  //border-top: solid 1px ${(props) => props.theme.colors.background2};

  //border: solid red 2px;
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
