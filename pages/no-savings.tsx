import type { NextPage } from "next";
import { useContext } from "react";
import { AppContext } from "../components/app-state";
import Container from "../components/container";

const NoSavingsPage: NextPage = () => {
  const { woz, ewoz } = useContext(AppContext);

  return (
    <Container>
      <>
        <h1>Uw WOZ-waarde is waarschijnlijk niet te hoog</h1>
        <h2>WOZ-waarde</h2>
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
      </>
    </Container>
  );
};

export default NoSavingsPage;
