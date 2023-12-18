const STATUS_SORTING_WEIGHTS = {
  ONLINE: 0,
  PAUSED: 1,
  STOPPED: 2,
  DRAFT: 3,
};

export const sortData = ({
  sortBy,
  order,
  data,
}: {
  sortBy: Accessor;
  order: "asc" | "desc";
  data: JoinedTest[];
}) => {
  const orderMultiplier = order === "asc" ? 1 : -1;

  switch (sortBy) {
    case "status":
      return [...data].sort((a, b) => {
        return (
          (STATUS_SORTING_WEIGHTS[a[sortBy]] -
            STATUS_SORTING_WEIGHTS[b[sortBy]]) *
          orderMultiplier
        );
      });

    case "type":
    case "name":
    case "url":
      return [...data].sort((a, b) => {
        return (
          a[sortBy].localeCompare(b[sortBy], "en", {
            numeric: true,
          }) * orderMultiplier
        );
      });

    default:
      return data;
  }
};
