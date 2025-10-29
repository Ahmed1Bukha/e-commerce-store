import React, { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  ariaLabel?: string;
}

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  ariaLabel,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const classes = [
    "button",
    `variant-${variant}`,
    `size-${size}`,
    fullWidth ? "full-width" : "",
    isDisabled ? "is-disabled" : "",
    loading ? "is-loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      onClick={isDisabled ? undefined : onClick}
      type={type}
      aria-label={ariaLabel || text}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {leftIcon && <span className="icon left">{leftIcon}</span>}
      <span className="label">{loading ? "Loading..." : text}</span>
      {rightIcon && <span className="icon right">{rightIcon}</span>}

      <style jsx>{`
        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid transparent;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 160ms ease, color 160ms ease,
            border-color 160ms ease, box-shadow 160ms ease, transform 60ms ease;
          user-select: none;
          white-space: nowrap;
        }

        .button.full-width {
          width: 100%;
        }

        /* Sizes */
        .button.size-sm {
          padding: 6px 12px;
          font-size: 12px;
          line-height: 18px;
        }

        .button.size-md {
          padding: 10px 16px;
          font-size: 14px;
          line-height: 20px;
        }

        .button.size-lg {
          padding: 14px 20px;
          font-size: 16px;
          line-height: 24px;
        }

        .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .label {
          display: inline-block;
        }

        /* Variants */
        .button.variant-primary {
          background: #111827; /* gray-900 */
          color: #ffffff;
          border-color: #111827;
        }
        .button.variant-primary:hover:not(.is-disabled) {
          background: #0b1220; /* darker */
          border-color: #0b1220;
        }
        .button.variant-primary:active:not(.is-disabled) {
          transform: translateY(1px);
        }

        .button.variant-secondary {
          background: #f3f4f6; /* gray-100 */
          color: #111827;
          border-color: #e5e7eb; /* gray-200 */
        }
        .button.variant-secondary:hover:not(.is-disabled) {
          background: #e5e7eb; /* gray-200 */
          border-color: #d1d5db; /* gray-300 */
        }
        .button.variant-secondary:active:not(.is-disabled) {
          transform: translateY(1px);
        }

        .button.variant-outline {
          background: transparent;
          color: #111827;
          border-color: #111827;
        }
        .button.variant-outline:hover:not(.is-disabled) {
          background: rgba(17, 24, 39, 0.06);
        }
        .button.variant-outline:active:not(.is-disabled) {
          transform: translateY(1px);
        }

        .button.variant-ghost {
          background: transparent;
          color: #111827;
          border-color: transparent;
        }
        .button.variant-ghost:hover:not(.is-disabled) {
          background: rgba(17, 24, 39, 0.06);
        }
        .button.variant-ghost:active:not(.is-disabled) {
          transform: translateY(1px);
        }

        /* Disabled/Loading */
        .button.is-disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }
      `}</style>
    </button>
  );
};

export default Button;
