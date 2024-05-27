import {
  Box,
  BoxProps,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmojiDialog } from "./EmojiDialog";

export const CommentForm = ({
  onComment,
  onLock,
  ...rest
}: BoxProps & {
  onComment: (value: string) => void;
  onLock: (locked: boolean) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(``);

  return (
    <>
      <Box {...rest}>
        <FormControl>
          <InputGroup size="md">
            <Input
              pl="3.5rem"
              pr="4.5rem"
              type="email"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <InputLeftElement width="3.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => {
                  setVisible(true);
                  onLock(true);
                }}
              >
                😀
              </Button>
            </InputLeftElement>
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => {
                  setText(``);
                  onComment(text);
                }}
              >
                send
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {/* <Button
        mt={4}
        colorScheme="teal"
        // isLoading={props.isSubmitting}
        type="submit"
      >
        send
      </Button> */}
      </Box>
      <EmojiDialog
        isOpen={visible}
        onClose={() => {
          setVisible(false);
          onLock(false);
        }}
        onConfirm={(emoji) => {
          setVisible(false);
          onLock(false);
          setText((state) => `${state} ${emoji}`);
        }}
      />
    </>
  );
};
