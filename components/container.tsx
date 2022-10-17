import { FC, useContext } from "react";
import { AppContext } from "./app-state";
import Business from "./business";
import Header from "./header";
import Steps from "./steps";

type Props = {
  children: JSX.Element;
};

const Container: FC<Props> = ({ children }) => {
  const { showBusiness } = useContext(AppContext);

  return (
    <div className="bg-sky-200 h-screen">
      <Header />
      <Steps />
      <div className="grid justify-center mt-14 py-10">
        <div className="w-screen max-w-2xl bg-white border-2 border-gray-300 rounded-2xl drop-shadow-xl p-10">
          {children}
        </div>
      </div>
      {showBusiness && <Business />}
    </div>
  );
};

export default Container;
