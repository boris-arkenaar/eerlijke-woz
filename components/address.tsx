import { ChangeEvent, FC, useState } from "react";
import { Address, useAddressLookup } from "./use-address-lookup";

const Address: FC = () => {
  const [value, setValue] = useState("");
  const { addresses, isLoading, isError } = useAddressLookup(value);

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onAddressClick = (address: Address) => () => {
    console.log("address", address);
  };

  const onNextClick = () => {
    console.log("next");
  };

  return (
    <div className="">
      <h1 className="text-2xl">Welkom bij de WOZ Check 2022!</h1>
      <p className="mb-5">Voer uw woonadres in om te beginnen</p>
      <label className="block font-bold pb-2">Woonadres</label>
      <div className="flex gap-3 p-3 bg-gray-200 rounded-lg drop-shadow">
        <div className="w-full h-12 relative">
          <input
            type="text"
            className="w-full h-12 rounded-md px-4"
            onChange={onValueChange}
            value={value}
          />
          {addresses && (
            <div className="absolute top-14 h-48 overflow-auto bg-white border-2 border-gray-200 rounded drop-shadow-l w-full">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="w-full h-12 flex items-center px-5 cursor-pointer hover:bg-sky-100"
                  onClick={onAddressClick(address)}
                >
                  <span className="line-12 pr-2">
                    {address.openbareruimte} {address.huisnummer}
                    {address.huisletter ? `-${address.huisletter}` : ""}
                    {address.huisnummertoevoeging},
                  </span>{" "}
                  <span className="text-sm text-neutral-500">
                    {address.postcode}, {address.woonplaats}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="h-12 bg-sky-600 text-white rounded-md px-4 line-12 drop-shadow"
          onClick={onNextClick}
        >
          Volgende
        </button>
      </div>
    </div>
  );
};

export default Address;
