import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { AlbumCard } from "./AlbumCard";
import { albums } from "../data/albums";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} sm={5} lg={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2 id="project-hobbies-interests">Projects, Experience, <br/> and Interests</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link style={{ cursor: 'pointer' }} eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link style={{ cursor: 'pointer' }} eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link style={{ cursor: 'pointer' }} eventKey="third">Interests</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <p id="text-alignment">Throughout my journey as a software engineer, I've had the incredible opportunity to work on a variety of exciting projects—both professionally and during my time at university.
                          Below, you'll find a curated showcase of some of the work I'm most proud to share. Each project reflects my passion for problem-solving, innovation, and crafting efficient solutions.</p>
                        <div>
                          <Row>
                            {projects.map((project, index) => {
                              return (
                                <ProjectCard key={index} {...project} />
                              );
                            })}
                          </Row>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p id="text-alignment">
                            My engineering journey began with a Bachelor's degree from QUT, where I built a solid foundation in computer and software systems. This education, combined with my professional experience at Wabtec, has equipped me with a deep understanding of full-stack development, particularly within the .NET environment and WPF, allowing me to create efficient and impactful applications.<br/><br/>
                            Shifting from a successful career as a top-performing sales consultant to software engineering, I've carried forward a customer-focused mindset. This ensures that the software I help develop is not only technically robust but also tailored to meet user needs. By blending my expertise in sales and engineering, I am driven to innovate and create technology that delivers meaningful impact. Below you will see the work experience I have gained over the past few years.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p id="text-alignment">As a music I love to talk and discuss music opinions. Here I've compiled some of my favourite albums of all time. I'm very much into Hip-Hop and always loved how artists are able to tell such captivating stories through their songs. I've also found it very cool how producers are able to sample different songs and create a whole new atmosphere to their song whilst also paying respect to the past. These albums below have always stuck with me because they do exatly that at such a high level.</p>
                        <div className="album-wrapper">
                          <div className="gallery">

                            {albums.map(({title, description, yearReleased, imageUrl, artist}, index) => (
                              <div className="album-image">
                                <AlbumCard
                                  key={index}
                                  title={title}
                                  description={description}
                                  yearReleased={yearReleased}
                                  imageUrl={imageUrl}
                                  artist={artist}
                                />
                              </div>

                            ))}
                          </div>
                        </div>
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
