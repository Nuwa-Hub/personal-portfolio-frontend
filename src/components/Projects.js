import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import nftmarketplace1 from "../assets/projects/nfmarketplace1.png";
import nftmarketplace2 from "../assets/projects/nftmarketplace2.png";
import projectmanagement2 from "../assets/projects/projectmanagement2.jpg";
import projectmanagement1 from "../assets/projects/projectmanagement1.jpg";
import projectmanagement3 from "../assets/projects/projectmanagement3.jpg";
import flybuy1 from "../assets/projects/flybuy1.jpg";
import flybuy2 from "../assets/projects/flybuy2.png";
import objdetect1 from "../assets/projects/objdetect1.png";
import objdetect2 from "../assets/projects/objdetect2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NFT Marketplace",
      description: "Blockchain-based project, NFT marketplace that allows users to list and transfer NFTs and sell NFTs at a fixed price or in a timed auction. Also, we include an admin panel with a dashboard to monitor sales activities, monitor users and listings,",
      imgUrl: nftmarketplace2,
    },
    {
      title: "NFT Marketplace",
      description: "",
      imgUrl: nftmarketplace1,
    },
    {
      title: "Project Management System",
      description: "Project management system that has collection of approaches and tools that help staff members plan, organize, and schedule everything that is necessary for a project to be successful",
      imgUrl: projectmanagement1,
    },
    {
      title: "Project Management System",
      description: "",
      imgUrl: projectmanagement3,
    },
    {
      title: "Project Management System",
      description: "Every employee allows to direct message with their relevant project managers through this system help of the chat application based on firebase aswell",
      imgUrl: projectmanagement2,
    },
    {
      title: "FlyBuy",
      description: "A marketplace for people to buy grocery items online",
      imgUrl: flybuy1,
    },
    {
      title: "FlyBuy",
      description: "A marketplace for people to buy grocery items online",
      imgUrl: flybuy2,
    },
    {
      title: "Vehicle collision detection system",
      description: "Software to predict the trajectory of the vehicle in the next 2 seconds and alert if a collision may occur",
      imgUrl: objdetect1,
    },
    {
      title: "Vehicle collision detection system",
      description: "Software to predict the trajectory of the vehicle in the next 2 seconds and alert if a collision may occur",
      imgUrl: objdetect2,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Activities</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
