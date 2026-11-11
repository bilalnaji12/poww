import type { SVGProps } from "react";

export function PawLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...props}>
      <ellipse cx="14" cy="27" rx="7" ry="9" transform="rotate(-20 14 27)" />
      <ellipse cx="25" cy="14" rx="7" ry="9.5" transform="rotate(-6 25 14)" />
      <ellipse cx="40" cy="14" rx="7" ry="9.5" transform="rotate(6 40 14)" />
      <ellipse cx="51" cy="27" rx="7" ry="9" transform="rotate(20 51 27)" />
      <path d="M32 30c-8 0-17 10-17 18 0 6 5 9 10 8 3-.5 5-2 7-2s4 1.5 7 2c5 1 10-2 10-8 0-8-9-18-17-18z" />
    </svg>
  );
}
