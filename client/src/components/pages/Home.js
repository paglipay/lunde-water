import React from "react";
import { Jumbotron, Button, Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';


function Home() {
    return (
        <div>
            <style type="text/css">
                {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    .container {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .jumbotron {      
      margin-bottom: 0px;
    }
    `}
            </style>
            <Jumbotron style={{ backgroundImage: `url('https://source.unsplash.com/1600x300/?design')`, backgroundSize: 'cover', height: 500 }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.75)', padding: '100px', margin: '-25px 0px' }}>
                    <h1>Welcome to Lunde Water</h1>

                    <br /><br />
                    <p>
                        <Button variant="flat" size="xxl">Learn more</Button>
                    </p>
                </div>
            </Jumbotron>
            <section className="section section-icons grey lighten-4 center" style={{ backgroundColor: '#f4f4f4', height: '100px' }}>

            </section>
            <section className="section section-icons white lighten-4 center" style={{ height: '100px' }}>

            </section>
            <section className="section section-icons grey lighten-4 center" style={{ backgroundColor: '#f4f4f4', height: '100px' }}>

            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h1>Featured Project</h1>
                            <p>Cisco Configuration Parser - Skilled Software Developer with experience in Network / Systems Engineering. Experienced Programmer Analyst / Network Engineer with a demonstrated history of working in the higher education industry. Proficient in Full-Stack development particularly in the MERN stack. </p>
                            <Button variant="flat">Learn more</Button>
                        </Col>
                        <Col lg={4}>
                            <h1>Home Page</h1>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
              varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
              Etiam ut feugiat ex. Cras non risus mi.

          </Col >
                        <Col lg={4}>
                            <h1>Home Page</h1>
                            <p>
                                Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
                                imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
                                ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
                                elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
                                consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
                                malesuada fames ac ante ipsum primis in faucibus.
            </p>
                        </Col>
                    </Row>

                </Container>
            </section>

        </div>
    );
}

export default Home;
