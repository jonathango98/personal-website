import { Pane } from "evergreen-ui";
import React from "react";
import useHover from "../../helpers/useHover";

const SocialIcon = ({ icon, alt, url, size }) => {
  const [refHover, isHover] = useHover();

  return (
    <Pane
      opacity={isHover ? 0.5 : 1}
      transitionDuration="100ms"
      marginY={4}
      onClick={() => {
        window.open(url, "_blank");
      }}
      cursor="pointer"
      ref={refHover}
    >
      <img src={icon} width={size} height={size} alt={alt} />
    </Pane>
  );
};

export default SocialIcon;
