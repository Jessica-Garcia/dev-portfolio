import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  //height: 22.5rem;
  object-fit: cover;
  //border: solid red 2px;
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
  justify-items: center;
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
  width: 100px;
  //border: solid green 2px;
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
  text-align: justify;
  height: 14.55rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  //border: solid purple 2px;
  height: 7rem;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 15px;
  transition: 0.5s;
  height: 4.1rem;
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

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.background2};
  padding: 2px 6px;
  border-radius: 6px;
  height: max-content;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
  //border-top: solid 1px ${(props) => props.theme.colors.background2};

  //border: solid red 2px;
`;

export const Status = styled.span`
  color: #d8bfbf;
  font-size: 1.5rem;
  //border: solid 2px yellow;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;

  span {
    background: green;
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
