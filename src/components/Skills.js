import Carousel from 'react-multi-carousel';
import { PercentageBar } from './PercentageBar';
import React from 'react';
import ReactDOM from 'react-dom'; // ReactDOM for rendering
import 'react-multi-carousel/lib/styles.css';
import 'react-circular-progressbar/dist/styles.css';
import net_image from '../assets/img/net.png';
import embedded_image from '../assets/img/microchip.png';
import atom from '../assets/img/atom.png';
import tailwind from '../assets/img/tailwind.png';
import aws from '../assets/img/AWS.png';
import typescript from '../assets/img/TypeScript.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { skill: '.NET Framework', percentage: 100, image: net_image},
    { skill: 'Embedded Systems', percentage: 90, image: embedded_image},
    { skill: 'React Framework', percentage: 80, image: atom},
    { skill: 'Tailwind CSS', percentage: 70, image: tailwind},
    { skill: 'AWS', percentage: 60, image: aws},
    { skill: 'TypeScript', percentage: 80, image: typescript},
  ]

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My skill set spans a diverse range of technologies and tools, reflecting my ability to adapt and excel in dynamic environments. From designing and developing efficient software solutions to collaborating on innovative projects, I bring a strong foundation in programming languages, frameworks, and problem-solving. Below, you'll find a breakdown of the technical expertise and tools I've mastered, showcasing the capabilities I bring to every project. </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                {skills.map(({ skill, percentage, image}, index) => (
                  <PercentageBar
                    key={index}
                    skill={skill}
                    percentage={percentage}
                    image={image}
                  />
                ))}

              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Skills />, document.getElementById('root'));