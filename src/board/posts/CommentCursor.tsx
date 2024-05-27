import { EditIcon } from "@chakra-ui/icons";
import { Fade, Stack } from "@chakra-ui/react";
import { memo } from "react";

export const CommentCursor = memo(
  ({ x, y, visible }: { x: number; y: number; visible: boolean }) => {
    return (
      <Fade in={visible}>
        <Stack
          position="fixed"
          pointerEvents="none"
          p={3}
          left={`${x}px`}
          top={`${y}px`}
          borderRadius="50%"
          border="2px solid white"
          transform="translate(-50%, -50%)"
          bgColor="#2d2f31"
          alignItems="center"
          justifyContent="center"
        //   transition="top 0.03s ease, left 0.03s ease"
        >
          <EditIcon color="white" />
        </Stack>
      </Fade>
    );
  }
);
