import { Pane } from "evergreen-ui";
import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

const Panel = ({ type }) => {
  const { width } = useWindowDimensions();
  return (
    <Pane
      display="grid"
      gridTemplateColumns="50% auto"
      gridTemplateRows="50% auto"
      width={width > 768 ? "40vw" : "90vw"}
      height={width > 768 ? "40vw" : "90vw"}
      maxHeight="90vh"
    >
      <Pane backgroundColor="#f4a262">
        <TopLeft />
      </Pane>
      <Pane backgroundColor="#e86f52">
        <TopRight />
      </Pane>
      <Pane backgroundColor="#2b9d8e">
        <BottomLeft />
      </Pane>
      <Pane backgroundColor="#274653">
        <BottomRight />
      </Pane>
    </Pane>
  );
};

export default Panel;
