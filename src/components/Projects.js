import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sentiment_analyser_img from "../assets/img/twitters.png";
import volcano_web_app_img from "../assets/img/Volcano.png";
import music_recommendation_image from "../assets/img/music.png";
import luminosity_sensor_image from "../assets/img/luminosity_sensor.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "Twitter Sentiment Analyser",
      description: "This app analyzes user-searched topics to provide overall sentiment insights and displays the data through graphs. It also checks tweet spelling accuracy to enhance analysis reliability, helping users understand public sentiment on various topics.",
      imgUrl: sentiment_analyser_img,
    },
    {
      title: "Music Recommendation Web App",
      description: "This mashup service is designed to help users find information about their favorite artists as well as help them find artists similar their search query. The user can search for an artist and the web application will provide them with upcoming events the artists has as well as their most popular music videos. It will do the same thing with artists like the one searched.",
      imgUrl: music_recommendation_image,
    },
    {
      title: "Luminosity Sensor",
      description: "This prototype functions as a luminosity sensor, measuring brightness in lux and displaying it on an LCD screen. It adjusts an LED's brightness based on light levels. Two switches control data recording and LED functionality, with interrupt-based debouncing to ensure precision. A timer module provides serial output of luminosity data and timestamps.",
      imgUrl: luminosity_sensor_image,
    },
    {
      title: "Volcano Data Web App",
      description: "This app provides detailed information on 1,343 volcanoes using data from the Smithsonian Global Volcanism Program. Users can search by country, view volcano locations on a map, and access metrics like elevation and last eruption. Registered users can log in to see additional data, including population density near each volcano",
      imgUrl: volcano_web_app_img,
    },
  ];

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

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2 id="project-hobbies-interests">Projects, Hobbies, and Interests</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Hobbies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Interests</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <p>Throughout my journey as a software engineer, I've had the incredible opportunity to work on a variety of exciting projects—both professionally and during my time at university.
                          Below, you'll find a curated showcase of some of the work I'm most proud to share. Each project reflects my passion for problem-solving, innovation, and crafting efficient solutions.</p>
                        <div id="center">
                          <Row >
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>As a music I love to talk and discuss music opinions. Here I've compiled some of my favourite albums of all time. I'm very much into Hip-Hop and always loved how artists are able to tell such captivating stories through their songs. I've also found it very cool how producers are able to sample different songs and create a whole new atmosphere to their song whilst also paying respect to the past. These albums below have always stuck with me because they do exatly that at such a high level.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
