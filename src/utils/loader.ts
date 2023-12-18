import axios, { AxiosError } from "axios";
import { LoaderFunctionArgs } from "react-router-dom";

const url = process.env.REACT_APP_BACKEND_URL;

export const loader = async ({ params }: LoaderFunctionArgs): Promise<Test> => {
  const postId = params.testId;
  const data = await axios
    .get<Test>(`${url}/tests/${postId}`)
    .then((res) => res.data);
  return data;
};
