import clsx from "clsx";
const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "py-[28px] px-[40px] text-sm font-bold rounded-2xl",
        {
          "bg-primary text-white": variant === "primary",
          "bg-funkyYellow text-primary": variant === "secondary",
          "bg-transparent border border-primary text-primary":
            variant === "third",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
