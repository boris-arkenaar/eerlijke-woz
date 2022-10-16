import type { NextPage } from "next";
import { useContext } from "react";
import { AppContext } from "../components/app-state";
import Container from "../components/container";

const SavingsPage: NextPage = () => {
  const { woz, ewoz } = useContext(AppContext);

  return (
    <Container>
      <>
        <h1>U betaalt te veel belasting door een te hoge WOZ-waarde</h1>
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

export default SavingsPage;
