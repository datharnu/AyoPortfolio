import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}
export default function ArrowRightIcon({
  width = "30",
  height = "30",
  ...props
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-square-check-icon lucide-square-check"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
