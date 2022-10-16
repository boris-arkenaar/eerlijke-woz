import { FC, useContext } from "react";
import { AppContext } from "./app-state";

const Confirmation: FC = () => {
  const { address } = useContext(AppContext);

  return (
    <div className="">
      <h1 className="text-2xl">Welkom bij de WOZ Check 2022!</h1>
      <p className="mb-5">
        Zie binnen 1 minuut of uw WOZ-waarde klopt en hoeveel u kunt besparen.
      </p>
      {address && (
        <div className="w-full h-12 flex items-center px-5 cursor-pointer hover:bg-sky-100">
          <span className="line-12 pr-2">
            {address.openbareruimte} {address.huisnummer}
            {address.huisletter ? `-${address.huisletter}` : ""}
            {address.huisnummertoevoeging},
          </span>{" "}
          <span className="text-sm text-neutral-500">
            {address.postcode}, {address.woonplaats}
          </span>
        </div>
      )}
    </div>
  );
};

export default Confirmation;
