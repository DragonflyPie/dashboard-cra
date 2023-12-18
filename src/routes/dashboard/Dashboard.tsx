import { useState } from "react";
import Search from "../../components/search/Search";
import useFetchData from "../../utils/useFetchData";
import Table from "../../components/table/Table";
import NotFound from "../../components/notFound/NotFound";
import Spinner from "../../components/spinner/Spinner";

function Dashboard() {
  const [filter, setFilter] = useState("");
  const { filteredData, fetchState } = useFetchData(filter);

  const count = filteredData.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const clearFilter = () => {
    setFilter("");
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard__heading">Dashboard</h1>
      <Search count={count} handleChange={handleChange} filter={filter} />
      {fetchState === "fail" ? (
        <div className="error">Something went wrong</div>
      ) : fetchState === "loading" ? (
        <div className="dashboard__spinner-container">
          <Spinner />
        </div>
      ) : count === 0 ? (
        <NotFound handleClick={clearFilter} />
      ) : (
        <Table data={filteredData} />
      )}
    </div>
  );
}

export default Dashboard;
