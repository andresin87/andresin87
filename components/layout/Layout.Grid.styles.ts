import { cva, type VariantProps } from "class-variance-authority";

import { grid } from "@/components/layout/styles";

export const layoutGridStyles = cva([...grid, "h-dvh top-0 fixed pointer-events-none z-50"]);

export type LayoutGridStyleProps = VariantProps<typeof layoutGridStyles>;
