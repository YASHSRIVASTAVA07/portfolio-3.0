import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
            Hi, I'm Yash Srivastava, a passionate and driven software engineer specializing in Python Full Stack Development, Artificial Intelligence, and Data Engineering. I'm currently pursuing my B.Tech in Computer Science Engineering at SRM Institute of Science and Technology.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python,Javascript,SQL,React.js,django and many more </b>
              </i>
              <br />
              <br />
              With hands-on experience gained through internships and hackathons with top organizations like Amazon, Google, and AICTE, I have developed a strong skill set in Python, AWS, Azure, and IoT. My expertise lies in building scalable applications, AI models, and data pipelines, and I thrive on solving complex problems with innovative solutions.
              <i>
                <b className="purple"></b>
                {" "}
                <b className="purple">
                I’m always excited to learn, collaborate, and contribute to cutting-edge technological advancements. Let’s connect and build something impactful!
                </b>
              </i>
              <br />
              <br />
              
               <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/YASHSRIVASTAVA07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Yash_UwU"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yash-srivastava-01ba53264/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yash_srivastava.2004/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
