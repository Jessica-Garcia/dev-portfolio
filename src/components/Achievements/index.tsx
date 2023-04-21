import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxTitle, BoxText } from "./styles";
import { achievements } from "../../constants/constants";

export const Achievements = () => {
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle>Conquistas</SectionTitle>
      <Boxes>
        {achievements.map((achievement) => {
          return (
            <Box key={achievement.id}>
              <BoxTitle>{achievement.title}</BoxTitle>
              <BoxText>{achievement.text}</BoxText>
            </Box>
          );
        })}
      </Boxes>
    </Section>
  );
};
