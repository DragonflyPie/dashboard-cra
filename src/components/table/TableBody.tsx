import { capitalize, formatType } from "../../utils/formatters";
import DashboardLink from "../link/Link";

interface TableBodyProps {
  data: JoinedTest[];
}

const TableBody = ({ data }: TableBodyProps) => {
  return (
    <div className="table__body">
      {data.map((test) => {
        return (
          <div className="table__row">
            <div className="table__cell table__cell--name">{test.name}</div>
            <div className="table__cell">{formatType(test.type)}</div>
            <div
              className="table__cell table__cell--status"
              data-status={test.status}
            >
              {capitalize(test.status)}
            </div>
            <div className="table__cell">{test.url}</div>
            <div className="table__button">
              <DashboardLink active={test.status !== "DRAFT"} id={test.id} />
            </div>
            <div className="table__coloring" data-site={test.siteId}></div>
          </div>
        );
      })}
    </div>
  );
};

export default TableBody;
