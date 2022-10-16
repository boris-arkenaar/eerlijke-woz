import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { AppContext } from "./app-state";

const Business: FC = () => {
  const router = useRouter();
  const { address } = useContext(AppContext);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur">
      <div className="grid justify-center space-20 mt-20 py-20">
        <div className="w-screen max-w-2xl bg-white border-2 border-gray-300 rounded-2xl drop-shadow-xl p-10">
          Adres heeft een zakelijke of gemende bestemming
        </div>
      </div>
    </div>
  );
};

export default Business;
