import { useEffect } from "react";

export const useTrackMousePosition = ({
  enabled,
  setMousePosition,
}: {
  enabled: boolean;
  setMousePosition: (position: { x: number; y: number }) => void;
}) => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (enabled) {
      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        // timeout prevent brutal cursor disappearance
        // @todo optimize
        // @todo add delay as config
        setTimeout(() => {
          document.removeEventListener("mousemove", handleMouseMove);
        }, 500);
      };
    }
  }, [setMousePosition, enabled]);
};
