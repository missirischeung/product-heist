import './Button.css'

function Button({ children, onClick, variant = "primary", disabled = false }) {
  const className = ["btn", `btn--${variant}`]

  if (disabled) className.push("btn--disabled")

  return (
    <button className={className.join(" ")} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
