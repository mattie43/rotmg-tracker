"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  onValueChange: (value: string) => void;
  disableBg?: boolean;
  variant?: "default" | "outline" | "underline";
};

type TTabProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

const variants = {
  default: "bg-primary",
  outline: "border border-primary",
  underline: "border-b-2 border-primary",
};

export const Tabs = ({
  children,
  className,
  value,
  onValueChange,
  disableBg = false,
  variant = "default",
  ...props
}: TTabsProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [position, setPosition] = useState({ left: 0, width: 0 });
  const refs = useRef<any>([]);

  useEffect(() => {
    refs.current.forEach((ref: any) => {
      if (ref.value === currentValue) {
        setPosition({
          left: ref.node.offsetLeft,
          width: ref.node.offsetWidth,
        });
      }
    });
  }, []);

  const handleClick = (value: string, index: number) => {
    setCurrentValue(value);
    onValueChange(value);
    const r = refs.current[index];
    r &&
      setPosition({
        left: r.node.offsetLeft,
        width: r.node.offsetWidth,
      });
  };

  return (
    <div
      className={cn(
        `
          flex gap-2 p-1 rounded-md relative transition-all duration-300
          ${disableBg ? "" : "bg-secondary"}
        `,
        className
      )}
      {...props}
    >
      <div
        className={`
          absolute h-8 rounded-md transition-all duration-300
          ${variants[variant]}
        `}
        style={{
          left: position.left,
          width: position.width,
        }}
      />
      {React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, {
          onClick: () => handleClick(child.props.value, index),
          ref: (ref: any) =>
            (refs.current[index] = {
              node: ref,
              index,
              value: child.props.value,
            }),
        });
      })}
    </div>
  );
};

export const Tab = forwardRef(
  ({ children, onClick, className, ...props }: TTabProps, ref: any) => {
    return (
      <div
        ref={ref}
        className={cn(
          "cursor-pointer py-1 px-6 transition-all duration-300 relative",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);
