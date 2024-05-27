import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
} from "@chakra-ui/react";

export const EmojiDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (value: string) => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Emojis</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap={4} direction="row">
            <Button
              variant="ghost"
              onClick={() => {
                onConfirm(`😀`);
              }}
            >
              😀
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                onConfirm(`😁`);
              }}
            >
              😁
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                onConfirm(`😅`);
              }}
            >
              😅
            </Button>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
