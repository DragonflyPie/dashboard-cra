import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = process.env.REACT_APP_BACKEND_URL;

const useFetchSite = (id: number) => {
  const [info, setInfo] = useState<Test>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const fetchSiteData = async () => {
      setLoading(true);
      axios
        .get<Test>(`/${url}/${id}`)
        .then((response) => {
          setInfo(response.data);
        })

        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchSiteData();
  }, []);

  const name = info?.name;

  return { name, loading, error };
};

export default useFetchSite;
