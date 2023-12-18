import { useState } from "react";
import Search from "../../components/search/Search";
import useFetchData from "../../lib/useFetchData";
import Table from "../../components/table/Table";
import NotFound from "../../components/notFound/NotFound";
import { useLoaderData } from "react-router-dom";

function Dashboard() {
  const [filter, setFilter] = useState("");
  const { getFilteredData, loading, error } = useFetchData();

  console.log("rend");
  const filteredData = getFilteredData(filter);
  const count = filteredData.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const clearFilter = () => {
    setFilter("");
  };

  return (
    <div className="main">
      <h1 className="heading">Dashboard</h1>
      <Search count={count} handleChange={handleChange} filter={filter} />
      {error ? (
        <div className="error">Something went wrong</div>
      ) : loading ? (
        <div className="spinner dashboard__spinner"></div>
      ) : count === 0 ? (
        <NotFound handleClick={clearFilter} />
      ) : (
        <Table data={filteredData} />
      )}
    </div>
  );
}

export default Dashboard;
