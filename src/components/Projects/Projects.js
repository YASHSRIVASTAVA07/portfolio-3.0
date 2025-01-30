import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Formula 1 Race Winner Prediction"
              description="This project uses machine learning to predict the winner of Formula 1 races based on historical data. The project includes an API, a web interface, and a machine learning model."
              ghLink="https://github.com/YASHSRIVASTAVA07/F1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Face Detector"
              description="Face detection is a computer vision technology that identifies and locates human faces in images or videos. It is a key component in various applications, including facial recognition, security systems, augmented reality, and human-computer interaction."
              ghLink="https://github.com/YASHSRIVASTAVA07/face-detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CONTACT-MANAGER-1.0"
              description="A Contact Manager is a software application or system that helps users store, organize, and manage contact information efficiently. It is commonly used in businesses, customer relationship management (CRM) systems, and personal contact management."
              ghLink="https://github.com/YASHSRIVASTAVA07/CONTACT-MANAGER-1.0"            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
