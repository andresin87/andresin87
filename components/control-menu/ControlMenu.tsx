import { IconBorderAll, IconBorderNone } from "@tabler/icons-react";
import { useOptionsContext } from "@/context/options";
import { ControlButton } from "./ControlButton";

export const ControlMenu = () => {
  const { hasOverlay, setHasOverlay } = useOptionsContext();
  return (
    <aside className="fixed bottom-4 sm:bottom-5 lg:bottom-10 left-4 sm:left-5 lg:left-10">
      <ControlButton
        onClick={() => {
          setHasOverlay(!hasOverlay);
        }}
      >
        {hasOverlay ? <IconBorderAll /> : <IconBorderNone />}
      </ControlButton>
    </aside>
  );
};
