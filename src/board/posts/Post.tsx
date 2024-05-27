import {
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { CommentBox } from "../comments/CommentBox";
import { CommentCursor } from "./CommentCursor";
import { useTrackMousePosition } from "../utils/useTrackMousePosition";
import { posts } from "./posts";

export const Post = ({
  author,
  content,
  date,
  title,
}: (typeof posts)[number]) => {
  const [isCommentBoxVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const boxBgColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useTrackMousePosition({
    enabled: isHovering,
    setMousePosition,
  });

  return (
    <>
      <Box position="relative" ref={ref} maxW={"445px"}>
        <Box
          w={"full"}
          onClick={() => setVisible((state) => !state)}
          bg={boxBgColor}
          boxShadow={"2xl"}
          rounded={"md"}
          cursor="none"
          p={6}
          overflow={"hidden"}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Stack>
            <Heading color={headingColor} fontSize={"2xl"} fontFamily={"body"}>
              {title}
            </Heading>
            <Text color={"gray.500"}>{content}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar
              src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{author}</Text>
              <Text color={"gray.500"}>{date}</Text>
            </Stack>
          </Stack>
        </Box>
        <CommentBox
          onClickOutside={(event) => {
            if (
              event.target instanceof HTMLElement &&
              !ref.current?.contains(event.target)
            ) {
              setVisible(false);
            }
          }}
          visible={isCommentBoxVisible}
          position="absolute"
          right={0}
          top={0}
          transform="translate(110%, 2%)"
        />
      </Box>
      <CommentCursor
        x={mousePosition.x}
        y={mousePosition.y}
        visible={isHovering}
      />
    </>
  );
};
