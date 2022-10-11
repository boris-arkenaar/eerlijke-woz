import { FC } from "react";
import Header from "./header";
import Steps from "./steps";

type Props = {
  children: JSX.Element;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="bg-sky-500 h-screen">
      <Header />
      <Steps />
      <div className="grid justify-center space-y-20 mt-20 py-20">
        <div className="bg-white border-2 border-gray-300 rounded-2xl drop-shadow-1xl p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
