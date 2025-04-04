import styles from "./Button.module.css";

function Button({
  disabled = false,
  style,
  action,
  className = "",
  children,
  flipOnGameStart = false,
  ...props
}) {
  return (
    <button
      style={style}
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
