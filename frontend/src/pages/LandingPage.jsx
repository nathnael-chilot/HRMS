import React from "react";
import Header from "../comopnents/landingPage/Header";
import Footer from "../comopnents/landingPage/Footer";
import Main from "../comopnents/landingPage/Main";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className="mt-[70px]">
        <Main />
      </main>
    </div>
  );
};

export default LandingPage;
