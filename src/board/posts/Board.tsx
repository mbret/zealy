import { Stack } from "@chakra-ui/react";
import { Post } from "./Post";

export const Board = () => {
  return (
    <Stack gap={4} width="50%">
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
};
