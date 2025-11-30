// src/components/Button.jsx
import './Button.css';

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="btn-icon"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.86 1 4.98 2.12 4.98 3.5ZM0.22 8.74H4.78V23.5H0.22V8.74ZM7.98 8.74H12.34V10.36H12.4C13.02 9.22 14.54 8 17 8C21.42 8 22 10.98 22 15.02V23.5H17.44V15.96C17.44 14.18 17.4 11.74 14.9 11.74C12.36 11.74 12 13.84 12 15.82V23.5H7.44L7.98 8.74Z"/>
  </svg>
)

function Button({
  children = "LinkedIn",
  onClick,
  variant = "linkedin",
  disabled = false,
  icon = null,
}) {
  const className = ["btn", `btn--${variant}`]
  if (disabled) className.push("btn--disabled")

  // Auto-add LinkedIn icon only if no custom icon was passed
  const finalIcon = icon ?? (variant === "linkedin" ? <LinkedInIcon /> : null)

  return (
    <button
      className={className.join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {finalIcon && <span className="btn-icon-wrap">{finalIcon}</span>}
      <span>{children}</span>
    </button>
  )
}

export default Button;
