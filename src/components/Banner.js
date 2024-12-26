import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Full-Stack Developer", "Web Developer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="welcome-text">
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Martin.`}</h1>
                <h1><span className="txt-rotate" dataPeriod="50" data-rotate='[ "Software Engineer", "Web Designer", "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p id="text-alignment">Hi, welcome to my personal website! I made this using the React Framework, and used Tailwind CSS for the styling. A bit more about me though, I am a software engineer with a passion for front-end design and artificial intelligence. I studied Computer and Software Systems at QUT, where I honed my technical skills and developed a love for crafting intuitive, user-friendly applications. 
                     Beyond code, I find inspiration in hip-hop music, and when I'm not in front of a computer, you can often find me rock climbing. Both coding and climbing keep me engaged, focused, and always striving for the next challenge!</p>
                  <a id="link" href="https://www.linkedin.com/in/martin-mashuro/" target="_blank">
                    <button target="_blank">Let's Connect <ArrowRightCircle size={25} /></button>
                  </a>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={8} md={6} xl={5}>
            <TrackVisibility>
              {() =>
                <div className="portrait-image">
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
