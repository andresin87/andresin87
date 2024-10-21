import { createContext, useContext, ReactNode, useState } from "react";

const OptionsContext = createContext({
  hasOverlay: false,
  setHasOverlay: (hasOverlay: boolean) => {},
});

export function useOptionsContext() {
  return useContext(OptionsContext);
}

export const OptionsProvider = ({
  children,
  hasOverlay,
  setHasOverlay,
  ...props
}: {
  children: ReactNode;
  hasOverlay: boolean;
  setHasOverlay: (hasOverlay: boolean) => void;
}) => {

  return (
    <OptionsContext.Provider value={{ hasOverlay, setHasOverlay, ...props }}>
      {children}
    </OptionsContext.Provider>
  );
};
