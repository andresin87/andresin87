import Link from "next/link";

import { cn } from "@/lib/utils/cn";

import { Button } from "@/components/ui/button";
import { BrandIcon } from "@/components/brand-icon";

export const TopBar = () => {
  return (
    <>
      <BrandIcon />
      <nav className={cn("hidden md:block md:col-span-2 lg:col-span-6")}>
        <Button asChild variant="link" className="font-black text-base">
          <Link href="/blog">Blog</Link>
        </Button>
        <Button asChild variant="link" className="font-black text-base">
          <Link href="/portfolio">Portfolio</Link>
        </Button>
        <Button asChild variant="link" className="font-black text-base">
          <Link href="/brand">Brand</Link>
        </Button>
      </nav>
    </>
  );
};
