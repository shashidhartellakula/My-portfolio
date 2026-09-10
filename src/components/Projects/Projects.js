import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecoshop from "../../Assets/Projects/ecoshop.png";
import csids from "../../Assets/Projects/csids.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csids}
              isBlog={false}
              title="CSIDS - Command Sequence Intrusion Detection System"
              description="A Linux user behavior-based intrusion detection system that analyzes Bash command sequences to identify suspicious activity. It includes behavioral profiling, risk scoring, anomaly detection, real-time command monitoring, PDF report generation, and email alerts."
              techStack="Python, Linux, Bash, Machine Learning"
              ghLink="https://github.com/shashidhartellakula/csids"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoshop}
              isBlog={false}
              title="EcoShop - E-commerce Website"
              description="A PHP-based e-commerce web application featuring user authentication, product catalog, shopping cart, checkout and order management, along with an admin panel for managing products and orders."
              techStack="PHP, MySQL, HTML, CSS, JavaScript"
              ghLink="https://github.com/shashidhartellakula/Ecommerce_Ecoshop"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;