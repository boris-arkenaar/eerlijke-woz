import { FC } from "react";

const Steps: FC = () => {
  return (
    <div className="fixed left-20 top-40 justify-center items-center space-y-20">
      <div className="space-y-20">
        <ul>
          <li className="flex items-center my-2">
            <span className="w-4 h-4 border-2 border-gray-500 rounded-full mr-2"></span>
            Adresgegevens
          </li>
          <li className="flex items-center my-2">
            <span className="w-4 h-4 border-2 border-gray-500 rounded-full mr-2"></span>
            Tenmerken woning
          </li>
          <li className="flex items-center my-2">
            <span className="w-4 h-4 border-2 border-gray-500 rounded-full mr-2"></span>
            WOZ-waarde 2022
          </li>
          <li className="flex items-center my-2">
            <span className="w-4 h-4 border-2 border-gray-500 rounded-full mr-2"></span>
            Uitslag WOZ Check
          </li>
          <li className="flex items-center my-2">
            <span className="w-4 h-4 border-2 border-gray-500 rounded-full mr-2"></span>
            Bezwaar maken
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Steps;
