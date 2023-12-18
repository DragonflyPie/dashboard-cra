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
    <div className="table__heading">
      {columns.map(({ label, accessor }) => {
        if (accessor === "button") {
          return <div key={accessor} />;
        }

        return (
          <div
            key={accessor}
            onClick={() => handleChangeSorting(accessor)}
            className=""
          >
            <div className="table__heading-group">
              {label}
              {sortBy === accessor && (
                <div className={iconClass}>
                  <SortChevron />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TableHead;
