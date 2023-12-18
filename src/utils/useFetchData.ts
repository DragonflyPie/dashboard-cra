import axios from "axios";
import { useEffect, useState } from "react";
import { cleanUrl } from "./formatters";

const url = process.env.REACT_APP_BACKEND_URL;

const initialData = {
  tests: [],
  sites: [],
};

type FetchState = "idle" | "loading" | "success" | "fail";

const filterData = (data: Data, filter: string) => {
  return data?.tests
    ?.filter((test) =>
      test.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
    .map((test) => {
      return {
        ...test,
        url:
          data.sites.find((site) => site.id === test.siteId)?.url ||
          "not found",
      };
    });
};

const capitalizeString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
};

const useFetchData = (filter: string) => {
  const [data, setData] = useState<Data>(initialData);
  const [fetchState, setFetchState] = useState<FetchState>("idle");

  useEffect(() => {
    const endpoints = [`${url}/tests`, `${url}/sites`];

    const fetchData = async () => {
      setFetchState("loading");
      Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(([{ data: tests }, { data: sites }]) => {
          const trimmedSites = sites.map((site: Site) => {
            return { ...site, url: cleanUrl(site.url) };
          });

          setData({ tests, sites: trimmedSites });
          setFetchState("success");
        })
        .catch(() => setFetchState("fail"));
    };

    fetchData();
  }, []);

  const filteredData = filterData(data, filter);

  return { filteredData, fetchState };
};

export default useFetchData;
