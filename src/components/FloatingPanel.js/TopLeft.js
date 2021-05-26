import { Pane } from "evergreen-ui";
import React from "react";
import ProfileImg from "../../assets/profile.jpeg";

const TopLeft = () => {
  return (
    <Pane padding={16}>
      <img src={ProfileImg} alt="profile" width="100%" height="100%" />
    </Pane>
  );
};

export default TopLeft;
