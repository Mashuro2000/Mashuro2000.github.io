import { scroller } from 'react-scroll';

export const scrollToSection = (sectionName) => {
  scroller.scrollTo(sectionName, {
    smooth: true,
    duration: 500,
    offset: -130, // Optional: Adjust offset if you have a sticky header
  });
};
