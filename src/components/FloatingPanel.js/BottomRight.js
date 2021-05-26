import { Button, Pane, Strong, Text } from "evergreen-ui";
import React from "react";
import InstagramIcon from "../../assets/instagram-blue.png";
import LinkedinIcon from "../../assets/linkedin-blue.png";
import EmailIcon from "../../assets/email-blue.png";
import SocialIcon from "./SocialIcon";

const BottomRight = () => {
  const size = "40px";
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
      <SocialIcon
        icon={LinkedinIcon}
        size={size}
        alt="linkedin"
        url="https://www.linkedin.com/in/jonathangoenadibrata"
      />
      <SocialIcon
        icon={EmailIcon}
        size={size}
        alt="email"
        url="mailto:jonathangoenadibrata@gmail.com"
      />
      <SocialIcon
        icon={InstagramIcon}
        size={size}
        alt="instagram"
        url="https://www.instagram.com/jonathango98"
      />
    </Pane>
  );
};

export default BottomRight;
