import { Heading, Pane, Strong, Text } from "evergreen-ui";
import React from "react";
const ProjectCard = ({ title, desc, footnotes, icon }) => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      width="100%"
    >
      <Pane display="flex" alignItems="center">
        <img src={icon} alt="proj" width="70px" height="70px" />
        <Heading size={500} color="white">
          {title}
        </Heading>
      </Pane>

      <Pane paddingX={16}>
        <Text lineHeight="100%" color="white">
          {desc}
        </Text>
      </Pane>

      <Pane
        padding={16}
        paddingBottom={16}
        display="flex"
        justifyContent="flex-end"
      >
        <Strong size={300} textAlign="right" color="white">
          {footnotes}
        </Strong>
      </Pane>
    </Pane>
  );
};

export default ProjectCard;
