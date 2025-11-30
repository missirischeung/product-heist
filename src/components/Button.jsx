import './Button.css'

function Button({ 
  children = "LinkedIn", 
  onClick, 
  variant = "linkedin", 
  disabled = false 
}) {

  const className = ["btn", `btn--${variant}`]
  if (disabled) className.push("btn--disabled")

  return (
    <button 
      className={className.join(" ")} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
