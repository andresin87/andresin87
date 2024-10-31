import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const NavMenu = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "hidden mt-52 h-fit",
        "lg:flex lg:col-span-2 lg:-mx-4 lg:pr-8 lg:p-2 lg:flex-col lg:gap-0.5",
        className,
      )}
    >
      <Button
        asChild
        variant="ghost"
        className="text-base justify-start font-black px-2"
      >
        <a href="/" className="text-onMain callout">
          Main
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="text-base justify-start font-black px-2"
      >
        <a href="/portfolio" className="text-onMain callout">
          Portfolio
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="text-base justify-start font-black px-2"
      >
        <a href="/blog" className="text-onMain callout">
          Blog
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="text-base justify-start font-black px-2"
      >
        <a href="/branding" className="text-onMain callout">
          Branding
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="text-base justify-start font-black px-2"
      >
        <a href="/about" className="text-onMain callout">
          About
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="text-base justify-start font-black px-2"
      >
        <a href="/contact" className="text-onMain callout">
          Contact
        </a>
      </Button>
    </nav>
  );
};
