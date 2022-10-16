import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Address } from "./use-address-lookup";

type Data = {
  woz: Number;
  ewoz: Number;
};

export const useWoz = (address: Address | null) => {
  const [woz, setWoz] = useState(0);
  const [ewoz, setEwoz] = useState(0);
  const [data, setData] = useState<Data | null>(null);
  const debouncedValue = useDebounce(woz, 500);
  const error = false;

  useEffect(() => {
    if (address?.gebruiksdoel === "woonfunctie") {
      setWoz(Math.floor(Math.random() * 50 + 400));
      setEwoz(Math.floor(Math.random() * 50 + 400));
    }
  }, []);

  useEffect(() => {
    setData({
      woz,
      ewoz,
    });
  }, [debouncedValue]);

  return {
    woz: data?.woz,
    ewoz: data?.ewoz,
    isLoading: !error && !data,
    isError: error,
  };
};