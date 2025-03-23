import { Pane, Text, Heading } from "evergreen-ui";
import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import Panel from "../FloatingPanel.js/Panel";

const Page1Landing = () => {
  const { width } = useWindowDimensions();
  return (
    <Pane
      width="100vw"
      height={width > 768 ? "100vh" : "auto"}
      paddingY={32}
      backgroundColor="#2b9d8e"
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
        <Text size={500} color="white">
          Hey! My name is
        </Text>
        <Heading
          size={900}
          color="white"
          marginY={8}
          fontSize={width > 768 ? "4em" : "3em"}
          lineHeight="100%"
        >
          Jonathan
          <br />
          Goenadibrata
        </Heading>
        {width > 768 ? null : <Panel />}
      </Pane>
    </Pane>
  );
};

export default Page1Landing;
