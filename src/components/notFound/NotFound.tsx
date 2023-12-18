import { MouseEvent } from "react";
import Button from "../button/Button";

interface NotFoundProps {
  handleClick: () => void;
}

const NotFound = ({ handleClick }: NotFoundProps) => {
  return (
    <div className="not-found">
      <p>Your search did not match any results.</p>
      <Button active={true} handleClick={handleClick} />
    </div>
  );
};

export default NotFound;
