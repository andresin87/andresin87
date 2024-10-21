import Link from "next/link";

import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

export const BrandIcon = ({}: {}) => {
  return (
    <Button variant="ghost" asChild className="hover:bg-transparent px-2 -mx-2">
      <Link href="/">
        <div
          className={cn(
            "group text-xl font-black whitespace-nowrap",
            "lg:text-2xl lg:top-9 lg:left-10",
          )}
        >
          <span className="">Ʌ</span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:110ms] group-hover:[transition-delay:10ms]">
            n
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:100ms] group-hover:[transition-delay:20ms]">
            d
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:90ms] group-hover:[transition-delay:30ms]">
            r
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:80ms] group-hover:[transition-delay:40ms]">
            ē
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:70ms] group-hover:[transition-delay:50ms]">
            s
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:60ms] group-hover:[transition-delay:60ms]">
            {" "}
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:50ms] group-hover:[transition-delay:70ms]">
            L
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:40ms] group-hover:[transition-delay:80ms]">
            u
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:30ms] group-hover:[transition-delay:90ms]">
            c
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:20ms] group-hover:[transition-delay:100ms]">
            a
          </span>
          <span className="opacity-0 -ml-0.5 group-hover:ml-0 group-hover:opacity-100 transition-all [transition-duration:300ms] [transition-delay:10ms] group-hover:[transition-delay:110ms]">
            s
          </span>
        </div>
      </Link>
    </Button>
  );
};
