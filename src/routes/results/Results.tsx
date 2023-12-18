import { useLoaderData, useNavigate } from "react-router-dom";
import { BackIcon } from "../../components/icons/BackIcon";

interface ResultsProps {
  heading: string;
}

const Results = ({ heading }: ResultsProps) => {
  const navigate = useNavigate();

  const data = useLoaderData() as Test;

  return (
    <div className="results">
      <h1 className="heading results__heading">{heading}</h1>
      <h2 className="results__name">{data.name}</h2>
      <a className="results__back" onClick={() => navigate(-1)}>
        <BackIcon />
        <p>Back</p>
      </a>
    </div>
  );
};

export default Results;
