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
        <Heading size={900} color="white" marginY={8}>
          About Me
        </Heading>
        <Text size={500} color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Pane>
    </Pane>
  );
};

export default Page2About;
