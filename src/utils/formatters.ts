export const cleanUrl = (url: string) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatType = (str: TestType) => {
  switch (str) {
    case "CLASSIC":
      return "Classic";
    case "MVT":
      return "MVT";
    case "SERVER_SIDE":
      return "Server-side";
  }
};
