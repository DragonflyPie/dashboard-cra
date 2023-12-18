import axios, { AxiosError } from "axios";
import { cleanUrl } from "./utils";
import { LoaderFunctionArgs } from "react-router-dom";

const url = process.env.REACT_APP_BACKEND_URL;

/* export const loader = async () => {
  const endpoints = [`${url}/tests`, `${url}/sites`];

  const res = await Promise.all(
    endpoints.map((endpoint) => axios.get(endpoint))
  ).then(([{ data: tests }, { data: sites }]) => {
    const trimmedSites = sites.map((site: Site) => {
      return { ...site, url: cleanUrl(site.url) };
    });
    return { tests, sites: trimmedSites } as Data;
  });
  return res;
} */ export const testLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<Test> => {
  const postId = params.testId;
  const data = await axios
    .get<Test>(`${url}/tests/${postId}`)
    .then((res) => res.data);
  return data;
};
