import { ITimelineInformations } from "../../@types/ITimelineInformations";
import {
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { dateFormatter } from "../../utils/formatter";
import { Slide, Slider, SliderProps } from "../Slider";
import { Container, TimelineSection } from "./styles";
interface TimelineProps {
  timeList: ITimelineInformations[];
  getTimeline: () => Promise<void>;
}
export const Timeline = ({ timeList, getTimeline }: TimelineProps) => {
  const settings: SliderProps = {
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: 4.3,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  };

  return (
    <TimelineSection id="about">
      <SectionDivider />
      <SectionTitle>Sobre mim</SectionTitle>
      <SectionText>
        Mantenho o aprendizado contínuo sobre a área tecnológica, para que dessa
        forma eu possa contribuir com o crescimento e inovação dos negócios.
      </SectionText>

      <Slider settings={settings}>
        {timeList.map((time) => {
          return (
            <Slide key={time.id}>
              <Container>
                <span>
                  <h4>
                    {`${dateFormatter
                      .format(new Date(time.date))
                      .slice(3, 5)}/${dateFormatter
                      .format(new Date(time.date))
                      .slice(6)}`}
                  </h4>
                  <p> {`-${time.description}`}</p>
                </span>
              </Container>
            </Slide>
          );
        })}
      </Slider>
    </TimelineSection>
  );
};
