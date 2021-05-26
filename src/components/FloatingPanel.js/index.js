import { Pane } from "evergreen-ui";
import React from "react";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";
import Panel from "./Panel";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

const FloatingPanel = () => {
  return (
    <Pane
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="50vw"
      height="100vh"
      position="fixed"
      right={0}
    >
      <Panel />
    </Pane>
  );
};

export default FloatingPanel;
