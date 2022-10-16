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
        <table className="w-full">
          <tbody>
            <tr>
              <td>Huidige WOZ-waarde</td>
              <td>{woz * 1000}</td>
            </tr>
            <tr>
              <td>Eerlijke WOZ-waarde</td>
              <td>{ewoz * 1000}</td>
            </tr>
          </tbody>
        </table>
      </>
    </Container>
  );
};

export default NoSavingsPage;
