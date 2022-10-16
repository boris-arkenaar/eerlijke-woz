import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { Address } from "./use-address-lookup";

type AppState = {
  address: Address | null;
  setAddress: Dispatch<SetStateAction<AppState["address"]>>;
};

type Props = {
  children: JSX.Element;
};

const noop = () => {};

const defaultValue = {
  address: null,
  setAddress: noop,
};

export const AppContext = createContext<AppState>(defaultValue);
const Provider = AppContext.Provider;

export const AppState: FC<Props> = ({ children }) => {
  const [address, setAddress] = useState<AppState["address"]>(null);
  return (
    <Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </Provider>
  );
};
