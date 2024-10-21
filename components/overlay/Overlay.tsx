import { config } from "./config";
import { cn } from "@/lib/utils/cn";

export const Overlay = ({ isActive }: { isActive: boolean }) => (
  <div
    data-active={isActive}
    data-element="overlay"
    className="fixed w-dvw h-dvh pointer-events-none top-0"
  >
    <div
      data-elements="overlay-rows"
      className={cn(
        "flex flex-col w-full h-full fixed top-0 py-4 sm:py-5 lg:py-10 no-wrap justify-between",
      )}
    >
      <div
        data-element="row"
        className={cn(
          "h-px bg-outline transition-all duration-1000 [transition-delay:275ms]",
          isActive ? "w-full ml-0" : "w-0 ml-[100%]",
        )}
      />
      <div
        data-element="row"
        className={cn(
          "h-px bg-outline transition-[width] duration-1000 [transition-delay:275ms]",
          isActive ? "w-full" : "w-0",
        )}
      />
    </div>
    <div
      data-element="overlay-columns"
      className="w-full h-full fixed top-0 flex no-wrap flex-row gap-4 px-4 sm:px-5 lg:px-10"
    >
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            data-element="column"
            data-column={index + 1}
            className={cn(
              "hidden flex-row justify-between grow",
              config[index + 1].join(" "),
            )}
          >
            <div
              data-element="line"
              className={cn(
                "w-px bg-outline transition-[height left] duration-1000",
                isActive ? "h-dvh" : "h-0",
                [
                  "[transition-delay:0ms]",
                  "[transition-delay:25ms]",
                  "[transition-delay:50ms]",
                  "[transition-delay:75ms]",
                  "[transition-delay:100ms]",
                  "[transition-delay:125ms]",
                  "[transition-delay:150ms]",
                  "[transition-delay:175ms]",
                  "[transition-delay:200ms]",
                  "[transition-delay:225ms]",
                  "[transition-delay:250ms]",
                  "[transition-delay:275ms]",
                ].find((value, valueIndex) => index === valueIndex),
              )}
            />
            <div
              data-element="line"
              className={cn(
                "w-px bg-outline transition-[height] duration-1000",
                isActive ? "h-dvh" : "h-0",
                [
                  "[transition-delay:0ms]",
                  "[transition-delay:25ms]",
                  "[transition-delay:50ms]",
                  "[transition-delay:75ms]",
                  "[transition-delay:100ms]",
                  "[transition-delay:125ms]",
                  "[transition-delay:150ms]",
                  "[transition-delay:175ms]",
                  "[transition-delay:200ms]",
                  "[transition-delay:225ms]",
                  "[transition-delay:250ms]",
                  "[transition-delay:275ms]",
                ].find((value, valueIndex) => index === valueIndex),
              )}
            />
          </div>
        ))}
    </div>
    <div
      data-element="column"
      data-column={0}
      className={cn(
        "flex flex-row justify-between grow",
        "xs:hidden",
        "sm:hidden",
        "md:hidden",
        "lg:hidden",
        "hidden",
        "[transition-delay:0ms]",
        "[transition-delay:25ms]",
        "[transition-delay:50ms]",
        "[transition-delay:75ms]",
        "[transition-delay:100ms]",
        "[transition-delay:125ms]",
        "[transition-delay:150ms]",
        "[transition-delay:175ms]",
        "[transition-delay:200ms]",
        "[transition-delay:225ms]",
        "[transition-delay:250ms]",
        "[transition-delay:275ms]",
      )}
    >
      <div data-element="line" className="h-dvh w-px bg-indigo-950" />
      <div data-element="line" className="h-dvh w-px bg-indigo-950" />
    </div>
  </div>
);
