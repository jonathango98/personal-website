import { Button, DocumentIcon, Pane, Strong, Text } from "evergreen-ui";
import React from "react";

const BottomLeft = () => {
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
      <Pane>
        <Button
          iconBefore={DocumentIcon}
          height={48}
          appearance="primary"
          intent="success"
        >
          RESUME
        </Button>
      </Pane>
    </Pane>
  );
};

export default BottomLeft;
