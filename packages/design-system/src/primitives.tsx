import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import "./ui.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  leadingIcon,
  trailingIcon,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={["rm-button", "rm-button--" + variant, "rm-button--" + size, className].filter(Boolean).join(" ")}
    >
      {loading ? <span className="rm-spinner" aria-hidden="true" /> : leadingIcon}
      <span>{children}</span>
      {!loading && trailingIcon}
    </button>
  );
}

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  tone?: "default" | "raised" | "glass";
};

export function Surface({ interactive = false, tone = "default", className = "", ...props }: SurfaceProps) {
  return (
    <div
      {...props}
      className={["rm-surface", "rm-surface--" + tone, interactive ? "rm-surface--interactive" : "", className].filter(Boolean).join(" ")}
    />
  );
}

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  width?: string | number;
  height?: string | number;
  radius?: "sm" | "md" | "lg" | "pill";
};

export function Skeleton({ width = "100%", height = "1rem", radius = "md", className = "", style, ...props }: SkeletonProps) {
  return (
    <div
      {...props}
      aria-hidden="true"
      className={["rm-skeleton", "rm-skeleton--" + radius, className].filter(Boolean).join(" ")}
      style={{ width, height, ...style }}
    />
  );
}

export type StatusDotProps = HTMLAttributes<HTMLSpanElement> & {
  status?: "ready" | "working" | "warning" | "offline";
  label: string;
};

export function StatusDot({ status = "ready", label, className = "", ...props }: StatusDotProps) {
  return (
    <span {...props} className={["rm-status", className].filter(Boolean).join(" ")}>
      <span className={"rm-status__dot rm-status__dot--" + status} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" role="img" aria-label="Reachmark Studio">
      <rect x="1" y="1" width="30" height="30" rx="9" stroke="currentColor" strokeOpacity=".34" />
      <path d="M9 24V8h7.1c4 0 6.3 2 6.3 5.2 0 2.4-1.3 4-3.8 4.8L23 24h-4.4l-3.9-5.5h-2V24H9Zm3.7-8.6h3.1c1.9 0 2.9-.7 2.9-2.1s-1-2.1-2.9-2.1h-3.1v4.2Z" fill="currentColor" />
    </svg>
  );
}
