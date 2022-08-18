import MainLayout from "layouts/MainLayout/MainLayout";
import React from "react";
import {
  Container,
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
  Row,
  Col,
  Button,
  Card, 
  ProgressBar
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Image from '../component/Image';
import help from '../images/helping-people.jpg';
import { BsFillForwardFill } from 'react-icons/bs';
import disaster from '../images/disaster.jpg';
import education from '../images/education.jpg';
import kid from '../images/kids.jpg';
import sick from '../images/sick.jpg';
import Pix from "../component/Pix";
import { IoIosArrowForward } from 'react-icons/io';
import educate from '../images/education-io.jpg';
import health from '../images/health-io.jpg';
import destroy from '../images/disaster-io.jpg';
import family from '../images/family-io.jpg';
import donate from '../images/donate.jpg';
import works from '../images/works-io.png';
import about from '../images/about-io.png';

export default function HomePage() {
  return (
    <MainLayout pageTitle="Fund Fair Ghana">
      {/* Page details*/}
      <Container style={{marginTop: "120px"}}>
        <section id="home">
          {/* Search bar*/}
          <InputGroup className="mb-3 mt-4">
            <InputGroup.Text id="basic-addon1">
              <AiOutlineSearch />
            </InputGroup.Text>
            <Form.Control placeholder="search project" />
            <DropdownButton
              variant="outline-secondary"
              title="Category"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Disaster Relief</Dropdown.Item>
              <Dropdown.Item href="#">Education</Dropdown.Item>
              <Dropdown.Item href="#">Family</Dropdown.Item>
              <Dropdown.Item href="#">Medical & Health</Dropdown.Item>
              <Dropdown.Item href="#">Others</Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          {/* Intro */}
          <Row className="mt-5 bg-light">
            <Col md="7">
              <p className="fs-1 fw-bold">Connecting issues that matter with people who care</p>
              <div className="d-flex justify-content-between p-3">
                <p className="fs-5 text-danger fst-italic"><span className='text-primary'>⁍</span> Disaster Relief</p>
                <p className="fs-5 text-danger fst-italic"><span className='text-primary'>⁍</span> Education</p>
                <p className="fs-5 text-danger fst-italic"><span className='text-primary'>⁍</span> Family</p>
                <p className="fs-5 text-danger fst-italic"><span className='text-primary'>⁍</span> Medical & Health</p>
              </div>
              <div className="d-flex flex-row-reverse p-3">
                <p className="fs-4 text-danger border px-2 border-dark rounded-pill"><span className='text-primary'>⁍</span> More</p>
              </div>
            </Col>
            <Col md="5">
              <Image pic={help} />
            </Col>
          </Row>
        </section>

        {/* Explore - Featured Projects */}
        <section id="explore" className="mt-5">
          <div className="d-flex justify-content-between">
            <p className="fs-2 fw-bold">Featured projects</p>
            <Button variant="outline-info" size="sm"> More <BsFillForwardFill/></Button>
          </div>
          <Row className="p-3">
            <Col md='3' className='d-flex align-items-stretch'>
              <Card style={{ width: '16rem'}} >
                <Card.Img as={Image} variant="top" pic={disaster} /> 
                <Card.Body className="d-flex flex-column bg-light">
                  <Card.Title>Brick by brick</Card.Title>
                  <Card.Text className="fst-italic">
                    My house got destroyed by the hurricane. <br/>
                    <Button variant='outline-primary' className='mt-1 px-2 rounded-pill'>click to read full story</Button> 
                  </Card.Text>
                  <div className='d-flex justify-content-between mt-2'>
                    <p><span className="text-danger">Target</span> <br/> <span className="fst-italic">10,000</span></p>
                    <p><span className="text-success">Raised</span> <br/> <span className="fst-italic">5,000</span></p>
                  </div>
                  <ProgressBar animated now={50} />
                  <div className='text-center mt-4'>
                    <Button variant="success" className="w-75">Donate Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md='3' className='d-flex align-items-stretch'>
              <Card style={{ width: '16rem'}}>
                <Card.Img as={Image} variant="top" pic={education} />
                <Card.Body className="d-flex flex-column bg-light">
                  <Card.Title>Trusted Education</Card.Title>
                  <Card.Text className="fst-italic">
                    There are needy but needy children out there. <br/>
                    <Button variant='outline-primary' className='mt-1 px-2 rounded-pill'>click to read full story</Button> 
                  </Card.Text>
                  <div className='d-flex justify-content-between mt-2'>
                    <p><span className="text-danger">Target</span> <br/> <span className="fst-italic">70,000</span></p>
                    <p><span className="text-success">Raised</span> <br/> <span className="fst-italic">5,000</span></p>
                  </div>
                  <ProgressBar animated now={15} />
                  <div className='text-center mt-4'>
                    <Button variant="success" className="w-75">Donate Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md='3' className='d-flex align-items-stretch'>
              <Card style={{ width: '16rem', height: '100%' }}>
                <Card.Img as={Image} variant="top" pic={kid} />
                <Card.Body className="d-flex flex-column bg-light">
                  <Card.Title>Needy Family</Card.Title>
                  <Card.Text className="fst-italic">
                    We need help to relocate to a different place. <br/>
                    <Button variant='outline-primary' className='mt-1 px-2 rounded-pill'>click to read full story</Button>
                  </Card.Text>
                  <div className='d-flex justify-content-between mt-2'>
                    <p><span className="text-danger">Target</span> <br/> <span className="fst-italic">3,500</span></p>
                    <p><span className="text-success">Raised</span> <br/> <span className="fst-italic">1,800</span></p>
                  </div>
                  <ProgressBar animated now={55} />
                  <div className='text-center mt-4'>
                    <Button variant="success" className="w-75">Donate Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md='3' className='d-flex align-items-stretch'>
              <Card style={{ width: '16rem'}}>
                <Card.Img as={Image} variant="top" pic={sick} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Give him hope</Card.Title>
                  <Card.Text className="fst-italic">
                    We need your support to save his life. <br/>
                    <Button variant='outline-primary' className='mt-1 px-2 rounded-pill'>click to read full story</Button>
                  </Card.Text>
                  <div className='d-flex justify-content-between mt-2'>
                    <p><span className="text-danger">Target</span> <br/> <span className="fst-italic">19,500</span></p>
                    <p><span className="text-success">Raised</span> <br/> <span className="fst-italic">18,000</span></p>
                  </div>
                  <ProgressBar animated now={85} />
                  <div className='text-center mt-4'>
                    <Button variant="success" className="w-75">Donate Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          {/* Explore - Crowdfunding */}
          <p className='fs-4 fw-bold text-center text-muted mt-4'>What are you funding for?</p>
          <hr/>
          <p className="fs-5 fst-italic mt-1 text-center">You can take your time and explore to know how it works before signing up or before you make a donation.</p>
          <Row className="p-3 mt-5">
            <Col md='3' >
              <div className="position-relative">
                <Card style={{ width: '16rem'}} className="bg-light rounded-pill">
                <div className="position-absolute text-center" style={{top: "-50px"}}>
                <Card.Img as={Pix} variant="top" img={educate}/>
                </div>
                <Card.Body className="mt-5">
                  <div className='d-flex justify-content-between mt-5 p-2'>
                    <p className="fw-bold text-info">EDUCATION</p>
                    <a href="#" className="text-warning"><IoIosArrowForward color="red"/></a>
                  </div>
                </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md='3' >
              <div className="position-relative mt-5">
                <Card style={{ width: '16rem'}} className="bg-light rounded-pill">
                <div className="position-absolute text-center" style={{top: "-50px"}}>
                <Card.Img as={Pix} variant="top" img={health} />
                </div>
                <Card.Body className="mt-5">
                  <div className='d-flex justify-content-between mt-5 p-2'>
                    <p className="fw-bold text-info">MENTAL & HEALTH</p>
                    <a href="#" className="text-warning"><IoIosArrowForward color="red"/></a>
                  </div>
                </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md='3' >
              <div className="position-relative">
                <Card style={{ width: '16rem'}} className="bg-light rounded-pill">
                <div className="position-absolute text-center" style={{top: "-50px"}}>
                <Card.Img as={Pix} variant="top" img={destroy} />
                </div>
                <Card.Body className="mt-5">
                  <div className='d-flex justify-content-between mt-5 p-2'>
                    <p className="fw-bold text-info">DISASTER RELIEF</p>
                    <a href="#" className="text-warning"><IoIosArrowForward color="red"/></a>
                  </div>
                </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md='3' >
              <div className="position-relative mt-5">
                <Card style={{ width: '16rem'}} className="bg-light rounded-pill">
                <div className="position-absolute text-center" style={{top: "-50px"}}>
                <Card.Img as={Pix} variant="top" img={family} />
                </div>
                <Card.Body className="mt-5">
                  <div className='d-flex justify-content-between mt-5 p-2'>
                    <p className="fw-bold text-info">FAMILY</p>
                    <a href="#" className="text-warning"><IoIosArrowForward color="red"/></a>
                  </div>
                </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 g-0">
            <Col md="7" className="bg-secondary bg-gradient">
              <div className="p-4">
                <p className="fs-4 fst-italic fw-bold">Feeling generous?</p>
                <p className="fs-5 mt-4 mb-5 p-4"> Help put a smile on the faces of people who need help but do not have people they can turn to. Any amount donated will surely make people smile.</p>
                <Button variant="success" className="p-3"><span className="fs-6">Start funding</span></Button>
              </div>
            </Col>
            <Col md="5">
              <Image pic={donate} />
            </Col>
          </Row>
        </section>

        {/* How it works */}
        <section id="works" className="mt-5">
          <p className='fs-2 fw-bold'>How it works</p>
          <hr/>
          <Row className="g-0 mt-5">
            <Col md="6">
              <Image pic={works}/>
            </Col>
            <Col md="6" className="bg-light">
              <div className="d-flex flex-column">
                <div>
                  <p className="fs-3 fw-bold text-center ms-2">What is funding?</p>
                  <p className="fs-6 fst-italic text-center ms-2">Funding is the act of providing resources to finance a need, program, or project.</p>
                  <div className="d-flex flex-row-reverse p-2">
                    <a href="#" className="text-decoration-none fs-6 text-primary border px-2 border-dark rounded-pill">More</a>
                  </div>
                </div>
                <div>
                  <p className="fs-3 fw-bold text-center ms-2 mt-4">Why choose Fund Fair</p>
                  <p className="fs-6 fst-italic text-center ms-2">Find out more about needy people and help them with whatever you can afford. We have been helping people but we cannot do it all on our own so we need aid from anyone who cares.</p>
                  <div className="d-flex flex-row-reverse p-2">
                    <a href="#" className="text-decoration-none fs-6 text-primary border px-2 border-dark rounded-pill">More</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
         
        {/* About */}
        <section id="about" className="mt-5">
          <p className='fs-2 fw-bold'>About</p>
          <hr/>
          <Row >
            <Col md="8">
              <div className="p-4">
                <p className="fs-4 fst-italic fw-bold">Funding in 60 seconds</p>
                <p className="fs-5 mt-2">Got a minute to spare? Read about the website, you will get a brief view of what you need to know and how everything is done.</p>
              </div>
            </Col>
            <Col md="4">
              <Image pic={about} />
            </Col>
          </Row>

          <Row className="g-0 mt-3">
            <Col md="4">
        
            </Col>
            <Col md="8" className="bg-light">
              <p className="p-2 fs-6 fst-italic">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </MainLayout>
  );
}
