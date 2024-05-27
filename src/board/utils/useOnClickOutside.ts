import { useEffect } from "react";

export const useOnClickOutside = ({
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
