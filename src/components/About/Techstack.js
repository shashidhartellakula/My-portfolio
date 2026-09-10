import React from "react";
import { Col, Row } from "react-bootstrap";

import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Techstack() {
  return (
    <>
      {/* Programming Languages */}
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          color: "white",
        }}
      >
        Programming <strong className="purple">Languages</strong>
      </h2>

      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Java} alt="Java" />
          <div className="tech-icons-text">Java</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="JavaScript" />
          <div className="tech-icons-text">JavaScript</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="Python" />
          <div className="tech-icons-text">Python</div>
        </Col>
      </Row>

      {/* Web & Backend */}
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          color: "white",
        }}
      >
        Web & <strong className="purple">Backend</strong>
      </h2>

      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="React" />
          <div className="tech-icons-text">React</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Node} alt="Node.js" />
          <div className="tech-icons-text">Node.js</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Express
          </div>
          <div className="tech-icons-text">Express.js</div>
        </Col>
      </Row>

      {/* Database & Tools */}
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          color: "white",
        }}
      >
        Database & <strong className="purple">Tools</strong>
      </h2>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={SQL} alt="PostgreSQL" />
          <div className="tech-icons-text">PostgreSQL</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Git} alt="Git" />
          <div className="tech-icons-text">Git</div>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;