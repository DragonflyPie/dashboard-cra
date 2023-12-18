import "./tests.scss";
import { useMemo, useState } from "react";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { sortData } from "../../lib/utils";
interface TableProps {
  data: JoinedTest[];
}

const columns: Column[] = [
  { label: "NAME", accessor: "name" },
  { label: "STATUS", accessor: "status" },
  { label: "TYPE", accessor: "type" },
  { label: "SITE", accessor: "url" },
  { label: "", accessor: "button" },
];
const Table = ({ data }: TableProps) => {
  const [sortBy, setSortBy] = useState<Accessor>("name");
  const [order, setOrder] = useState<Order>("asc");

  const tableData = useMemo(
    () => sortData({ sortBy, order, data }),
    [order, sortBy, data]
  );

  const handleChangeSorting = (accessor: Accessor) => {
    if (accessor === "button") return;
    const sortOrder = accessor === sortBy && order === "asc" ? "desc" : "asc";
    setSortBy(accessor);
    setOrder(sortOrder);
  };

  return (
    <table className="table">
      <TableHead
        columns={columns}
        handleChangeSorting={handleChangeSorting}
        sortBy={sortBy}
        order={order}
      />

      <TableBody columns={columns} data={tableData} />
    </table>
  );
};

export default Table;
