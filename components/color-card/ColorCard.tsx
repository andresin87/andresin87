import { cn } from "@/lib/utils";

export const ColorCard = ({ colorName }: { colorName: string }) => {
  return (
    <div className="bg-main text-onMain">
      <h2 className="headline-1">{colorName}</h2>
    </div>
  );
};
