import { Button, Pane, Strong, Text } from "evergreen-ui";
import React from "react";

const BottomRight = () => {
  const size = "50px";
  return (
    <Pane
      padding={16}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Pane
        width={size}
        height={size}
        borderRadius={4}
        backgroundColor="white"
      ></Pane>
      <Pane
        width={size}
        height={size}
        borderRadius={4}
        marginY={8}
        backgroundColor="white"
      ></Pane>
      <Pane
        width={size}
        height={size}
        borderRadius={4}
        backgroundColor="white"
      ></Pane>
    </Pane>
  );
};

export default BottomRight;
