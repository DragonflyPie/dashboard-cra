import { useLoaderData, useNavigate } from "react-router-dom";

const Finalize = () => {
  const navigate = useNavigate();

  const data = useLoaderData() as Test;

  return (
    <div className="">
      <h1 className="heading">Finalize</h1>
      <p>{data.name}</p>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};

export default Finalize;
