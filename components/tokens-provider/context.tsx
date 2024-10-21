"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type TokenStore, createTokenStore } from "./store";

export type TokenStoreApi = ReturnType<typeof createTokenStore>;

export const TokenStoreContext = createContext<TokenStoreApi | undefined>(
  undefined,
);

export interface TokenStoreProviderProps {
  children: ReactNode;
}

export const TokenStoreProvider = ({ children }: TokenStoreProviderProps) => {
  const storeRef = useRef<TokenStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createTokenStore();
  }

  return (
    <TokenStoreContext.Provider value={storeRef.current}>
      {children}
    </TokenStoreContext.Provider>
  );
};

export const useTokenStore = <T,>(selector: (store: TokenStore) => T): T => {
  const tokenStoreContext = useContext(TokenStoreContext);

  if (!tokenStoreContext) {
    throw new Error(`useTokenStore must be used within TokenStoreProvider`);
  }

  return useStore(tokenStoreContext, selector);
};
