import React from 'react'
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
// import Footer from 
// import Footer from "./Footer";
import Footer from './Footer';
const Home = () => {
  return (
    <>
    <div>
      <p className='welcome-text'>
        Welcome to Dev Wonderland!
      </p>
      <div className='welcome-gif'>
        <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmF4ZzE3dnJqcGtjYWNjM3FlNzVqeXdldGdpcGZqenhqYTVnMG91MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pUOtybrPsOXhKx5SKJ/giphy.gif' alt="img" />
        {/* <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZibDEyNzkzZDVpbmxzemMxMDB1YjNvZnRkbDEzanQyNDF5aXR0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K77lWFobBeX5xcLsdp/giphy.gif" alt="img"/> */}
      </div>

    </div>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span style={{ color: 'purple' }}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b style={{ color: 'purple' }}> C++, Javascript and SQL. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{ color: 'purple' }}>Web Technologies and Products </b> and
                also in areas related to{" "}
                <b style={{ color: 'purple' }}>
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: 'purple' }}>Node.js</b> and
              <i>
                <b style={{ color: 'purple' }}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: 'purple' }}> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://i.ibb.co/VWXKjDP/image.png"  style={{borderRadius:'6rem'}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        </Container>
        </Container>

        <div>        <Footer/>

          </div>
        </>
        
    
  )
}

export default Home;