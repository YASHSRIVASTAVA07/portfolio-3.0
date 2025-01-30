import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Srivastava </span>
            from <span className="purple"> Pune, India.</span>
            <br />Hi, I'm Yash Srivastava, an aspiring software engineer passionate about Python Full Stack Development, Artificial Intelligence, and Data Engineering. Currently pursuing my B.Tech in Computer Science Engineering at SRM Institute of Science and Technology, I've had the opportunity to gain hands-on experience through internships and hackathons with leading organizations like Amazon, Google, and AICTE.
            <br />
            I have a strong foundation in Python, AWS, Azure, and IoT, allowing me to build scalable applications, AI models, and data pipelines. As a Python Full Stack Developer at AICTE, I developed dynamic applications, implemented RESTful APIs, and integrated cloud solutions.
I'm always eager to explore emerging technologies and leverage them to create impactful, data-driven solutions. Whether it's building innovative software or optimizing data workflows, I thrive on solving complex problems and pushing technological boundaries.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching/Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I Don’t Have Dreams, I Have Goals!"{" "}
          </p>
          <footer className="blockquote-footer">Yash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
