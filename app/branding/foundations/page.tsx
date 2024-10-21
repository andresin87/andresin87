import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { cn } from "@/lib/utils";

export default async function BrandBook() {
  return (
    <main
      className={cn(
        "col-span-1 mt-44",
        "xs:col-span-2",
        "sm:col-span-3",
        "md:col-span-6",
        "lg:col-start-3 lg:col-span-8",
        "xl:col-start-3 xl:col-span-10",
      )}
    >
      <h1 className="headline-1">Branding</h1>
      <div
        className={cn(
          "grid grid-cols-1 gap-4",
          "xs:grid-cols-2",
          "sm:grid-cols-3",
          "md:grid-cols-6",
          "lg:grid-cols-8",
          "xl:grid-cols-10",
        )}
      >
        <Link
          className="col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-4 xl:col-span-5"
          href="/branding/typography"
        >
          <h2 className="headline-2">Typography</h2>
        </Link>
        <Link
          className="col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-4 xl:col-span-5"
          href="/branding/color"
        >
          <h3 className="headline-2">Color</h3>
        </Link>
      </div>
    </main>
  );
}
