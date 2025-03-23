import { Pane, Text, Heading } from "evergreen-ui";
import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const Page2About = () => {
  const { width } = useWindowDimensions();
  return (
    <Pane
      width="100vw"
      height="100vh"
      backgroundColor="#f4a262"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Pane
        width={width > 768 ? "50%" : "100%"}
        paddingY={width > 768 ? 128 : 16}
        paddingLeft={width > 768 ? 128 : 16}
        paddingRight={16}
      >
        <Heading size={900} color="white" marginY={8} fontSize="3em">
          About Me
        </Heading>
        <Text size={500} color="white">
          I'm a curious and thoughtful engineer with a passion for robotics and automation.
          I’ve worked as a Robotics Engineer, where I gained hands-on experience building
          and refining real-world systems, and I’m currently pursuing my Master’s in
          Mechanical Engineering at UC Berkeley. I love exploring how things 
          work—whether through programming, mechanical design, or prototyping.
          I thrive in collaborative environments and value learning just as much as leading. 
          I'm always looking for new ways to grow, connect ideas, and create meaningful impact
          through technology.
        </Text>
      </Pane>
    </Pane>
  );
};

export default Page2About;
