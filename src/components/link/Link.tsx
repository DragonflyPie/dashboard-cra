import cn from "classnames";
import { Link } from "react-router-dom";

interface ButtonProps {
  active: boolean;
  id: number;
}

const DashboardLink = ({ active, id }: ButtonProps) => {
  const linkClass = cn("button", {
    "button--inactive": !active,
  });

  const url = active ? "results" : "finalize";

  return (
    <Link to={`/${url}/${id}`} className={linkClass}>
      {active ? "Results" : "Finalize"}
    </Link>
  );
};

export default DashboardLink;
