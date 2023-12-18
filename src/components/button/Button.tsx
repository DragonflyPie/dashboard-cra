interface ButtonProps {
  handleClick: () => void;
  label: string;
}

const Button = ({ handleClick, label }: ButtonProps) => {
  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
