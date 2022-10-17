import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid justify-center items-center h-screen space-y-20">
      <div className="space-y-10">
        <h1 className="text-2xl">Eerlijke WOZ</h1>
        <a
          href="/start"
          className="flex items-center h-12 bg-sky-600 text-white rounded-md px-4 drop-shadow"
        >
          Start de WOZ check
        </a>
      </div>
    </div>
  );
};

export default Home;
