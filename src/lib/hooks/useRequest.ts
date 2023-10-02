import { useEffect, useState } from "react";

export const useRequest = <T = undefined, D = unknown, E = unknown>(
  request: (props: T) => Promise<D>,
  props: T
) => {
  const [data, setData] = useState<D | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<E | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    request(props)
      .then((data) => {
        setError(undefined);
        setData(data);
      })
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [request, props]);

  return { data, isLoading, error };
};
