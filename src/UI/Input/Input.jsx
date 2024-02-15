import clsx from "clsx";
const Input = ({ variant, placeholder, className }) => {
  return (
    <input
      placeholder={placeholder}
      className={clsx(
        "",
        {
          "py-[30px] px-[25px] rounded-2xl w-[350px] bg-[#fff]":
            variant === "primary",
          "bg-transparent rounded-[36px] h-[65px] w-[375px]":
            variant === "secondary",
        },
        className
      )}
    ></input>
  );
};

export default Input;
