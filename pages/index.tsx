import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="grid justify-center items-center h-screen space-y-20">
      <div className="space-y-20">
        <h1>Eerlijke WOZ</h1>
        <a href="/start">Start de WOZ check</a>
      </div>
    </div>
  );
};

export default Home;
