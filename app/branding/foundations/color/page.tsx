"use client";
// import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
// import { ColorCard } from "@/components/color-card";
import { useTokenStore } from "@/components/tokens-provider";
import { cn } from "@/lib/utils";

export default function Home() {
  const {
    colorBackground,
    colorOnBackground,
    colorBackgroundVariant,
    colorOnBackgroundVariant,
    colorBasic,
    colorOnBasic,
    colorBasicContainer,
    colorOnBasicContainer,
    colorMain,
    colorOnMain,
    colorMainContainer,
    colorOnMainContainer,
    colorOutline,
    colorOutlineHigh,
  } = useTokenStore((state) => state);
  return (
    <main
      className={cn(
        "col-span-1 mt-44",
        "xs:col-span-2",
        "sm:col-span-3",
        "md:col-span-6",
        "lg:col-start-3 lg:col-span-8",
        "xl:col-start-3 xl:col-span-10",
        "flex flex-col flex-wrap",
      )}
    >
      <div className="flex flex-row flex-wrap">
        <h1 className="headline-1 w-full">Color</h1>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorBackground.toString(),
            color: colorOnBackground.toString(),
          }}
        >
          <h2 className="headline-2">Background</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOnBackground.toString(),
            color: colorBackground.toString(),
          }}
        >
          <h2 className="headline-2">onBackground</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorBackgroundVariant.toString(),
            color: colorOnBackgroundVariant.toString(),
          }}
        >
          <h2 className="headline-2">colorBackgroundVariant</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOnBackgroundVariant.toString(),
            color: colorBackgroundVariant.toString(),
          }}
        >
          <h2 className="headline-2">colorBackgroundOnVariant</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorBasic.toString(),
            color: colorOnBasic.toString(),
          }}
        >
          <h2 className="headline-2">colorBasic</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOnBasic.toString(),
            color: colorBasic.toString(),
          }}
        >
          <h2 className="headline-2">colorOnBasic</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorBasicContainer.toString(),
            color: colorOnBasicContainer.toString(),
          }}
        >
          <h2 className="headline-2">colorBasicContainer</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOnBasicContainer.toString(),
            color: colorBasicContainer.toString(),
          }}
        >
          <h2 className="headline-2">colorOnBasicContainer</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorMain.toString(),
            color: colorOnMain.toString(),
          }}
        >
          <h2 className="headline-2">colorMain</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOnMain.toString(),
            color: colorMain.toString(),
          }}
        >
          <h2 className="headline-2">colorOnMain</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorMainContainer.toString(),
            color: colorOnMainContainer.toString(),
          }}
        >
          <h2 className="headline-2">colorMainContainer</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOnMainContainer.toString(),
            color: colorMainContainer.toString(),
          }}
        >
          <h2 className="headline-2">colorOnMainContainer</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOutline.toString(),
            color: colorOutlineHigh.toString(),
          }}
        >
          <h2 className="headline-2">colorOutline</h2>
        </div>
        <div
          className="w-1/2 h-32"
          style={{
            backgroundColor: colorOutlineHigh.toString(),
            color: colorOutline.toString(),
          }}
        >
          <h2 className="headline-2">colorOutlineHigh</h2>
        </div>
      </div>
    </main>
  );
}
