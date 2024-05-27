import { Avatar, ScaleFade, Stack, Text } from "@chakra-ui/react";

export const Comment = ({
  author,
  comment,
}: {
  author: string;
  comment: string;
}) => {
  return (
    <ScaleFade in>
      <Stack
        border="1px solid red"
        borderColor="gray.100"
        borderRadius={10}
        bgColor="gray.50"
        p={2}
        alignItems="flex-start"
      >
        <Text>{comment}</Text>
        <Stack direction={"row"} spacing={4} align={"center"}>
          <Avatar
            size="sm"
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          />
          <Stack
            direction={"column"}
            spacing={0}
            fontSize={"sm"}
            alignItems="flex-start"
          >
            <Text fontWeight={600}>{author}</Text>
            <Text color={"gray.500"}>Feb 08, 2021</Text>
          </Stack>
        </Stack>
      </Stack>
    </ScaleFade>
  );
};
