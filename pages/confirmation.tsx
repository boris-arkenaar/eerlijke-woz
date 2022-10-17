import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/app-state";
import { useWoz } from "../hooks/use-woz";
import type { NextPage } from "next";
import Container from "../components/container";

const ConfirmationPage: NextPage = () => {
  const router = useRouter();
  const { address, setShowBusiness, setWoz, setEwoz } = useContext(AppContext);
  const { woz, ewoz } = useWoz(address);
  const [ready, setReady] = useState(false);

  const onNextClick = () => {
    if (address?.gebruiksdoel !== "woonfunctie") {
      setShowBusiness(true);
    } else {
      setReady(true);
    }
  };

  const onPreviousClick = () => {
    router.push("/start");
  };

  useEffect(() => {
    if (ready && woz && ewoz) {
      setWoz(woz);
      setEwoz(ewoz);
      router.push(ewoz < woz ? "/savings" : "/no-savings");
    }
  }, [ready, woz, ewoz]);

  return (
    <Container>
      <>
        <h1 className="text-2xl">Welkom bij de WOZ Check 2022!</h1>
        <p className="mb-5">
          Zie binnen 1 minuut of uw WOZ-waarde klopt en hoeveel u kunt besparen.
        </p>
        <ol>
          <li className="flex my-2">
            <span className="flex justify-center bg-sky-700 text-white rounded-full mr-2 w-6 h-6">
              1
            </span>
            Controleer uw woninggegevens.
          </li>
          <li className="flex my-2">
            <span className="flex justify-center bg-sky-700 text-white rounded-full mr-2 w-6 h-6">
              2
            </span>
            Zie hoeveel u kunt besparen.
          </li>
          <li className="flex my-2">
            <span className="flex justify-center bg-sky-700 text-white rounded-full mr-2 w-6 h-6">
              3
            </span>
            Eerlijke WOZ regelt het bezwaar voor u.
          </li>
        </ol>
        <div className="w-full my-4 px-5 py-2 bg-neutral-200 rounded">
          Voldoet aan AVG privacywetgeving
        </div>
        {address && (
          <>
            <label className="block font-bold pb-2">Uw adres</label>
            <div className="w-full p-5 bg-neutral-200 rounded">
              <span>
                {address.openbareruimte} {address.huisnummer}
                {address.huisletter ? `-${address.huisletter}` : ""}
                {address.huisnummertoevoeging}
              </span>
              <br />
              <span>
                {address.postcode}, {address.woonplaats}
              </span>
            </div>
          </>
        )}
        <div className="flex flex-row-reverse justify-between mt-5">
          <button
            className="h-12 bg-sky-600 text-white rounded-md px-4 line-12 drop-shadow"
            onClick={onNextClick}
          >
            Volgende
          </button>
          <button
            className="h-12 bg-white border-2 border-neutral-200 rounded-md px-4 line-12 drop-shadow"
            onClick={onPreviousClick}
          >
            Vorige
          </button>
        </div>
      </>
    </Container>
  );
};

export default ConfirmationPage;
