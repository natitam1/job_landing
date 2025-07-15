import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Job from "./Job/Job";
import TopCompany from "./TopCompany/TopCompany";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Category />
      <Job />
      <TopCompany />
    </div>
  );
};

export default Home;
