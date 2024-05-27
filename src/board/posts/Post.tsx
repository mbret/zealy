import {
  Avatar,
  Box,
  Fade,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { CommentBox } from "../comments/CommentBox";
import { CommentCursor } from "./CommentCursor";

const posts = [
  {
    title: `Boost your conversion rate`,
    content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
  et ea rebum.`,
    author: `Maxime Bret`,
    date: `Feb 08, 2021`,
  },
];

export const Post = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const boxBgColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log({ x: event.clientX, y: event.clientY });
    };

    if (isHovering) {
      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        // timeout prevent brutal cursor disappearance
        // @todo optimize
        setTimeout(() => {
          document.removeEventListener("mousemove", handleMouseMove);
        }, 500);
      };
    }
  }, [isHovering]);

  return (
    <>
      <Box position="relative" ref={ref}>
        {posts.map((item, index) => (
          <Box
            key={index}
            maxW={"445px"}
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
              <Heading
                color={headingColor}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {item.title}
              </Heading>
              <Text color={"gray.500"}>{item.content}</Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{item.author}</Text>
                <Text color={"gray.500"}>{item.date}</Text>
              </Stack>
            </Stack>
          </Box>
        ))}
        <CommentBox
          onClickOutside={(event) => {
            if (
              event.target instanceof HTMLElement &&
              !ref.current?.contains(event.target)
            ) {
              setVisible(false);
            }
          }}
          visible={visible}
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
