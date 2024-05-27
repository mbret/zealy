import { Stack, Text } from "@chakra-ui/react";

export const Comment = ({
  author,
  comment,
}: {
  author: string;
  comment: string;
}) => {
  return (
    <Stack border="1px solid red">
      <Text>{author}</Text>
      <Text>{comment}</Text>
    </Stack>
  );
};
