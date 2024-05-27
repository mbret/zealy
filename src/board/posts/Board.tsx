import { Stack } from "@chakra-ui/react";
import { Post } from "./Post";
import { posts } from "./posts";

export const Board = () => {
  return (
    <Stack gap={4} width="50%">
      {posts.map((item, index) => (
        <Post {...item} key={index} />
      ))}
    </Stack>
  );
};
