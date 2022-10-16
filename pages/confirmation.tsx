import type { NextPage } from "next";
import Confirmation from "../components/confirmation";
import Container from "../components/container";

const ConfirmationPage: NextPage = () => {
  return (
    <Container>
      <Confirmation />
    </Container>
  );
};

export default ConfirmationPage;
