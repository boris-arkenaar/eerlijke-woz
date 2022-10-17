import type { NextPage } from "next";
import { useContext } from "react";
import { AppContext } from "../components/app-state";
import Container from "../components/container";
import Values from "../components/values";

const NoSavingsPage: NextPage = () => {
  const { woz, ewoz } = useContext(AppContext);

  return (
    <Container>
      <>
        <h1 className="text-2xl">
          Uw WOZ-waarde is waarschijnlijk niet te hoog
        </h1>
        <h2 className="text-xl mt-4">WOZ-waarde</h2>
        <Values woz={woz} ewoz={ewoz} />
      </>
    </Container>
  );
};

export default NoSavingsPage;
