import { Link } from "react-router-dom";
import Button from "../button/Button";
import DashboardLink from "../link/DashboardLink";

interface TableBodyProps {
  data: JoinedTest[];
  columns: Column[];
}

const TableBody = ({ data, columns }: TableBodyProps) => {
  return (
    <tbody>
      {data.map((test) => {
        return (
          <tr key={test.id}>
            {columns.map(({ accessor }) => {
              const tData =
                accessor === "button" ? (
                  // <Button
                  //   active={test.status !== "DRAFT"}
                  //   handleClick={() => {}}
                  // />
                  <DashboardLink
                    active={test.status !== "DRAFT"}
                    id={test.id}
                  />
                ) : test[accessor as keyof Test] ? (
                  test[accessor as keyof Test]
                ) : (
                  ""
                );
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
