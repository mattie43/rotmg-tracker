import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type TInputProps = React.ComponentProps<"input"> & {
  startIcon?: React.ReactNode;
  disableClearable?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ className, type, startIcon, disableClearable, ...props }, ref) => {
    const [search, setSearch] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      props.onChange?.(e);
    };

    const handleClear = () => {
      setSearch("");
      props.onChange?.({ target: { value: "" } } as any);
    };

    return (
      <div className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm gap-2 focus-within:ring-1">
        {startIcon && <div className="flex first:w-4">{startIcon}</div>}
        <input
          type={type}
          className={cn(
            "bg-transparent focus:border-none focus:outline-none flex-1",
            className
          )}
          ref={ref}
          {...props}
          onChange={handleChange}
        />
        {search.length > 0 && !disableClearable && (
          <X
            className="p-1 hover:bg-secondary rounded-full cursor-pointer active:opacity-90"
            onClick={handleClear}
          />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
