import React from 'react';
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};
