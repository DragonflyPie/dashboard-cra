const STATUS_SORTING_WEIGHTS = {
  ONLINE: 0,
  PAUSED: 1,
  STOPPED: 2,
  DRAFT: 3,
};

export const cleanUrl = (url: string) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
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
  let sorted = [...data];
  const orderMultiplier = order === "asc" ? 1 : -1;

  switch (sortBy) {
    case "button":
      return data;

    case "status":
      sorted.sort((a, b) => {
        return (
          (STATUS_SORTING_WEIGHTS[a[sortBy]] -
            STATUS_SORTING_WEIGHTS[b[sortBy]]) *
          orderMultiplier
        );
      });
      break;

    default:
      sorted.sort((a, b) => {
        return (
          a[sortBy].localeCompare(b[sortBy], "en", {
            numeric: true,
          }) * orderMultiplier
        );
      });
  }

  return sorted;
};

// export const filterData = (str: string, data: Data) => {
//   return data?.tests
//     ?.filter((test) =>
//       test.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
//     )
//     .map((test) => {
//       return {
//         ...test,
//         url:
//           data.sites.find((site) => site.id === test.siteId)?.url ||
//           "not found",
//       };
//     });
// };
