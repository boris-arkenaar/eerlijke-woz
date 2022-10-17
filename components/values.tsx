import { FC } from "react";

type Props = {
  woz: number;
  ewoz: number;
};

const Values: FC<Props> = ({ woz, ewoz }) => {
  return (
    <div className="w-full bg-neutral-200 rounded p-2">
      <div className="flex justify-between p-2">
        <span>Huidige WOZ-waarde</span>
        <span>€ {(woz * 1000).toLocaleString("nl")}</span>
      </div>
      <div className="flex justify-between p-2">
        <span>Eerlijke WOZ-waarde</span>
        <span>€ {(ewoz * 1000).toLocaleString("nl")}</span>
      </div>
    </div>
  );
};

export default Values;
