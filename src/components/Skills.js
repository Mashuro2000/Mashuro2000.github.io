import Pie from "./Percentage_Pie";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My skill set spans a diverse range of technologies and tools, reflecting my ability to adapt and excel in dynamic environments. From designing and developing efficient software solutions to collaborating on innovative projects, I bring a strong foundation in programming languages, frameworks, and problem-solving. Below, you'll find a breakdown of the technical expertise and tools I've mastered, showcasing the capabilities I bring to every project. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <Pie percentage={70} color="purple" />
                                <h5>.NET Framework</h5>
                            </div>
                            <div className="item">
                                <Pie percentage={70} color="purple" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <Pie percentage={70} color="purple" />
                                <h5>React Framework</h5>
                            </div>
                            <div className="item">
                                <Pie percentage={70} color="purple" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <Pie percentage={70} color="purple" />
                                <h5>Embedded Systems</h5>
                            </div>
                            <div className="item">
                                <Pie percentage={70} color="purple" />
                                <h5>Node.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
