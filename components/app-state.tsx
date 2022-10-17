import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { Address } from "../types/address";

type AppState = {
  address: Address | null;
  setAddress: Dispatch<SetStateAction<AppState["address"]>>;
  showBusiness: boolean;
  setShowBusiness: Dispatch<SetStateAction<AppState["showBusiness"]>>;
  woz: number;
  setWoz: Dispatch<SetStateAction<AppState["woz"]>>;
  ewoz: number;
  setEwoz: Dispatch<SetStateAction<AppState["ewoz"]>>;
};

type Props = {
  children: JSX.Element;
};

const noop = () => {};

const defaultValue = {
  address: null,
  setAddress: noop,
  showBusiness: false,
  setShowBusiness: noop,
  woz: 0,
  setWoz: noop,
  ewoz: 0,
  setEwoz: noop,
};

export const AppContext = createContext<AppState>(defaultValue);
const Provider = AppContext.Provider;

export const AppState: FC<Props> = ({ children }) => {
  const [address, setAddress] = useState<AppState["address"]>(null);
  const [showBusiness, setShowBusiness] =
    useState<AppState["showBusiness"]>(false);
  const [woz, setWoz] = useState<AppState["woz"]>(0);
  const [ewoz, setEwoz] = useState<AppState["ewoz"]>(0);

  return (
    <Provider
      value={{
        address,
        setAddress,
        showBusiness,
        setShowBusiness,
        woz,
        setWoz,
        ewoz,
        setEwoz,
      }}
    >
      {children}
    </Provider>
  );
};
