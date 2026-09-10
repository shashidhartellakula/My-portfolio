import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m <b className="purple">Shashidhar Tellakula</b>, a Computer Science and
              Engineering (Cyber Security) student at{" "}
              <b className="purple">CVR College of Engineering</b>.
              <br />
              <br />
              I’m passionate about <b className="purple">Software Development</b> and
              enjoy building practical applications while continuously improving my
              problem-solving and programming skills.
              <br />
              <br />
              I’m comfortable working with{" "}
              <i>
                <b className="purple">
                  Java, JavaScript, Python, React, Node.js, Express.js, PostgreSQL, and Git
                </b>
              </i>
              .
              <br />
              <br />
              I also regularly practice <b className="purple">Data Structures and
              Algorithms</b> and solve programming problems to strengthen my coding and
              problem-solving abilities.
              <br />
              <br />
              I’m currently focused on growing as a{" "}
              <b className="purple">Software Developer</b> and looking for opportunities
              where I can apply my skills, learn from experienced developers, and
              contribute to real-world projects.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;