import { useEffect } from "react";
import useSWR from "swr";
import { useDebounce } from "usehooks-ts";
import { Address } from "../types/address";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export const useAddressLookup = (value: string) => {
  const debouncedValue = useDebounce(value, 500);
  const [postalCode, houseNumber] = debouncedValue.split(" ");

  const { data, error } = useSWR<Address[]>(
    postalCode && houseNumber
      ? `https://api.bestaatditadres.nl/lookup.json?postcode=${postalCode}&huisnummer=${houseNumber}`
      : "",
    fetcher
  );

  useEffect(() => {}, [debouncedValue]);

  return {
    addresses: data,
    isLoading: !error && !data,
    isError: error,
  };
};
