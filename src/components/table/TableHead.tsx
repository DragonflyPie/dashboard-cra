import classNames from "classnames";
import { SortChevron } from "../icons/SortChevron";

interface TableHeadProps {
  columns: Column[];
  handleChangeSorting: (accessor: Accessor) => void;
  order: Order;
  sortBy: Accessor;
}

const TableHead = ({
  columns,
  handleChangeSorting,
  sortBy,
  order,
}: TableHeadProps) => {
  const iconClass = classNames("table__icon", {
    "table__icon--desc": order === "desc",
  });

  return (
    <thead className="table__thead">
      <tr>
        {columns.map(({ label, accessor }) => {
          if (accessor === "button") {
            return <th key={accessor} />;
          }

          return (
            <th
              key={accessor}
              onClick={() => handleChangeSorting(accessor)}
              className="table__th"
            >
              <div className="table__thead-group">
                {label}
                {sortBy === accessor && (
                  <div className={iconClass}>
                    <SortChevron />
                  </div>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
