import cn from "classnames";

interface ButtonProps {
  active: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ active, handleClick }: ButtonProps) => {
  const btnClass = cn("button", {
    "button--inactive": !active,
  });

  return (
    <button onClick={handleClick} className={btnClass}>
      {active ? "Results" : "Finalize"}
    </button>
  );
};

export default Button;
