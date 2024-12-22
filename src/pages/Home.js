import React from 'react';
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Element } from 'react-scroll';

export const Home = () => {
  return (
    <div>
      <Element name='home'>
        <section>
          <Banner />
        </section>
      </Element>

      <Element name='skills'>
        <section>
          <Skills />
        </section>
      </Element>

      <Element name='aboutMe'>
        <section>
          <Projects />
        </section>
      </Element>
    </div>
  );
};
