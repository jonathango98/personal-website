import { Heading, Pane, Text } from "evergreen-ui";
import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const TopRight = () => {
  const { width } = useWindowDimensions();
  return (
    <Pane
      padding={16}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Heading size={width > 768 ? 900 : 700} color="#eac36b" marginBottom={8}>
        Mechanical Engineering
      </Heading>
      <Text color="white">Specializing in Controls &amp; Robotics</Text>
    </Pane>
  );
};

export default TopRight;
