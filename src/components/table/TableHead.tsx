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
  const iconClass = classNames("thead__icon", {
    "thead__icon--desc": order === "desc",
  });
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          return (
            <th
              className="thead table__thead"
              key={accessor}
              onClick={() => handleChangeSorting(accessor)}
            >
              <div className="thead__wrapper">
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
