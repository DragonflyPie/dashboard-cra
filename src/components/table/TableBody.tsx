import { capitalize, formatType } from "../../utils/formatters";
import DashboardLink from "../link/Link";

interface TableBodyProps {
  data: JoinedTest[];
  columns: Column[];
}

const TableBody = ({ data, columns }: TableBodyProps) => {
  const renderCell = (accessor: Accessor, test: JoinedTest) => {
    switch (accessor) {
      case "button":
        return (
          <td key={accessor} className="table__td">
            <DashboardLink active={test.status !== "DRAFT"} id={test.id} />
          </td>
        );
      case "name":
        return (
          <td key={accessor} className="table__td semibold">
            {test.name}
          </td>
        );
      case "url":
        return (
          <td key={accessor} className="table__td">
            {test.url}
          </td>
        );
      case "status":
        return (
          <td
            key={accessor}
            className="table__td semibold"
            data-status={test.status}
          >
            {capitalize(test.status)}
          </td>
        );

      case "type":
        return (
          <td key={accessor} className="table__td ">
            {formatType(test.type)}
          </td>
        );
    }
  };
  return (
    <tbody>
      {data.map((test) => {
        return (
          <tr key={test.id} className="table__tr" data-site={test.siteId}>
            {columns.map(({ accessor }) => {
              return renderCell(accessor, test);
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
