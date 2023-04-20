import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./styles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

export const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>Sobre mim</SectionTitle>
      <SectionText>
        Mantenho-me sempre buscando conhecimento sobre a área tecnológica, para
        que dessa forma eu possa contribuir com o crescimento e inovação dos
        negócios.
      </SectionText>
      <CarouselContainer>
        <>
          {TimeLineData.map((item, index) => {
            return (
              <CarouselMobileScrollNode key={index}>
                <CarouselItem>
                  <CarouselItemTitle>{item.year}</CarouselItemTitle>
                  <CarouselItemText> {item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            );
          })}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton key={index}>
              <CarouselButtonDot />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};
