import { Box, BoxProps, Fade, ScaleFade, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

const useOnClickOutside = ({
  onClickOutside,
  ref,
}: {
  onClickOutside: (event: PointerEvent) => void;
  ref: React.RefObject<HTMLElement>;
}) => {
  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside(event);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [onClickOutside, ref]);
};

export const CommentBox = ({
  visible,
  onClickOutside,
  ...rest
}: BoxProps & {
  visible: boolean;
  onClickOutside: (event: PointerEvent) => void;
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isCommentFormLocked, setIsCommentFormLocked] = useState(false);
  const [comments, setComments] = useState([
    {
      author: "maxime",
      comment: "first comment",
    },
  ]);

  useOnClickOutside({
    ref,
    onClickOutside: (event) => {
      if (!isCommentFormLocked) {
        onClickOutside(event);
      }
    },
  });

  return (
    <Box
      ref={ref}
      width={300}
      pointerEvents={visible ? undefined : "none"}
      {...rest}
    >
      <ScaleFade initialScale={0.8} in={visible}>
        <Box
          maxW={"445px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={3}
          overflow={"hidden"}
        >
          {/* @todo add height change transition */}
          <Stack>
            {comments.map((item, index) => (
              <Comment
                key={index}
                author={item.author}
                comment={item.comment}
              />
            ))}
            <CommentForm
              onLock={(value) => setIsCommentFormLocked(value)}
              onComment={(value) => {
                setComments((state) => [
                  ...state,
                  {
                    author: "maxime",
                    comment: value,
                  },
                ]);
              }}
            />
          </Stack>
        </Box>
      </ScaleFade>
    </Box>
  );
};
