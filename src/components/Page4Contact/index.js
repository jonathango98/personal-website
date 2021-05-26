import {
  Pane,
  Text,
  Heading,
  TextInputField,
  TextInput,
  Button,
  Textarea,
} from "evergreen-ui";
import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const Page4Contact = () => {
  const { width } = useWindowDimensions();
  return (
    <Pane
      width="100vw"
      height="100vh"
      backgroundColor="#274653"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Pane
        width={width > 768 ? "50%" : "100%"}
        padding={width > 768 ? 128 : 16}
        display="flex"
        flexDirection="column"
      >
        <Heading size={900} color="white" marginY={8}>
          Contact Me
        </Heading>
        <Text color="white" marginTop={8}>
          Name
        </Text>
        <TextInput width="100%" marginTop={8} placeholder="John Doe" />
        <Text color="white" marginTop={8}>
          Email
        </Text>
        <TextInput
          width="100%"
          marginTop={8}
          placeholder="johndoe@example.com"
        />
        <Text color="white" marginTop={8}>
          Message
        </Text>
        <Textarea
          width="100%"
          marginTop={8}
          placeholder="Hi! Let's have a chat"
        />
        <Pane marginTop={16}>
          <Button appearance="primary" intent="success">
            SEND
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Page4Contact;
