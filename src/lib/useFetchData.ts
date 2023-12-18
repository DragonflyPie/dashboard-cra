import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { cleanUrl } from "./utils";

const url = process.env.REACT_APP_BACKEND_URL;

const initialData = {
  tests: [],
  sites: [],
};

const useFetchData = () => {
  const [data, setData] = useState<Data>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const endpoints = [`${url}/tests`, `${url}/sites`];

    const fetchData = async () => {
      setLoading(true);
      Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(([{ data: tests }, { data: sites }]) => {
          const trimmedSites = sites.map((site: Site) => {
            return { ...site, url: cleanUrl(site.url) };
          });
          setData({ tests, sites: trimmedSites });
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, []);

  const getFilteredData = (str: string) => {
    return data?.tests
      ?.filter((test) =>
        test.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
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

  return { data, getFilteredData, loading, error };
};

export default useFetchData;
