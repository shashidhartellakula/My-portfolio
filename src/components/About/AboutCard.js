import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Shashidhar Tellakula</span> from{" "}
            <span className="purple">Hyderabad, India</span>.
            <br />
            <br />
            I’m currently a{" "}
            <span className="purple">
              BTech 4th year Computer Science and Engineering (Cyber Security)
              student
            </span>{" "}
            at{" "}
            <span className="purple">CVR College of Engineering</span>.
            <br />
            <br />
            I’m passionate about{" "}
            <span className="purple">Software Development</span> and enjoy
            building practical applications using technologies such as{" "}
            <span className="purple">
              Java, JavaScript, React, Node.js, Express, PostgreSQL, and Git
            </span>
            .
            <br />
            <br />
            I also enjoy solving{" "}
            <span className="purple">Data Structures and Algorithms</span>{" "}
            problems and continuously improving my problem-solving and
            programming skills.
            <br />
            <br />
            I’m currently looking for{" "}
            <span className="purple">internship and software development
            opportunities</span>{" "}
            where I can learn, contribute, and grow as a developer.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA and programming problems 🧩
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies and building projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new ideas and improving my technical skills 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build, learn, improve, and make an impact."
          </p>

          <footer className="blockquote-footer">
            Shashidhar Tellakula
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;