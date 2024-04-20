import React from 'react';

import '../styles/home.css'

import { Col, Container, Row } from "reactstrap";
import Subtitle from "../shared/Subtitle";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png"

const Home = () => {
    return ( 
       <>

       {/* Hero section start */}
       <section>
        <Container>
            <Row>
                <Col lg="6" >
                    <div className="hero-content">
                        <div className="hero-subtitle d-flex align-items-center">
                            <Subtitle subtitle={"Know Before You Go"} />
                            <img src={worldImg} alt="World" />
                        </div>
                        <h1>Travelling opens the door ro creating <span className="highlight">memories</span></h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatum aperiam autem, nulla sunt reprehenderit laboriosam beatae consequuntur, sint accusantium necessitatibus tenetur, voluptates reiciendis consectetur repudiandae nisi. Ullam, inventore incidunt.
                        </p>
                    </div>
                </Col>
                <Col lg="2">
                    <div className="hero-img-box">
                        <img src={heroImg} alt="Hero" />
                    </div>
                </Col>
                <Col lg="2">
                    <div className="hero-img-box mt-4">
                        <video src={heroVideo} controls />
                    </div>
                </Col>
                <Col lg="2">
                    <div className="hero-img-box mt-5">
                        <img src={heroImg2} alt="Hero 2nd" />
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
       {/* Hero section end */}



       </>
     );
}
 
export default Home;