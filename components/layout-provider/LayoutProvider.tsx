"use client";

import { useState, Suspense } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps as ThemeProps } from "next-themes/dist/types";

import { cn } from "@/lib/utils";

import { OptionsProvider } from "@/context/options";
import { NavMenu } from "@/components/nav-menu";
import { ControlMenu } from "@/components/control-menu";
import { Overlay } from "@/components/overlay";
import { TopBar } from "@/components/top-bar";

export interface ThemeProviderProps extends ThemeProps {}

export function LayoutProvider({ children, ...props }: ThemeProviderProps) {
  const [hasOverlay, setHasOverlay] = useState(false);
  return (
    <NextThemesProvider {...props}>
      <OptionsProvider hasOverlay={hasOverlay} setHasOverlay={setHasOverlay}>
        <div className={cn(["fixed top-0"])}>
          <div
            className={cn(
              "w-dvw overflow-x-hidden grid grid-cols-1 gap-4 px-4 relative py-2",
              "xs:grid-cols-2",
              "sm:grid-cols-3 sm:px-5 sm:py-3",
              "md:grid-cols-6",
              "lg:grid-cols-10 lg:px-10 lg:py-10",
              "xl:grid-cols-12",
            )}
          >
            <TopBar />
          </div>
        </div>
        <div
          className={cn(
            "absolute w-dvw overflow-x-hidden grid grid-cols-1 gap-4 px-4 top-0 mt-[52px] pt-12",
            "xs:grid-cols-2 xs:mt-16 xs:pt-24",
            "sm:grid-cols-3 sm:px-5 sm:mt-[60px] lg:pt-32",
            "md:grid-cols-6",
            "lg:grid-cols-10 lg:px-10 lg:mt-[116px] lg:pt-56",
            "xl:grid-cols-12",
          )}
        >
          <NavMenu />
          <div
            className={cn(
              "absolute mt-56 h-px w-full",
              "xs:col-span-1",
              "sm:col-span-2",
              "md:col-span-6",
              "lg:col-span-10",
              "xl:col-span-12",
            )}
          >
            <div
              data-element="row"
              className={cn(
                "h-px w-full bg-outline transition-opacity duration-1000",
                hasOverlay ? "opacity-100" : "opacity-0",
              )}
            />
          </div>
          {children}
        </div>
        <ControlMenu />
        <Overlay isActive={hasOverlay} />
      </OptionsProvider>
    </NextThemesProvider>
  );
}
