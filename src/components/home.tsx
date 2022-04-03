import { Link } from 'react-router-dom';
import { Navbar, Container, Carousel, Nav } from 'react-bootstrap';
import logo from '../assets/images/tag.png';
import image10 from '../assets/images/img10.jpg';
import image12 from '../assets/images/img12.jpg';
import image11 from '../assets/images/img11.jpg';


export default function Home() {

    return (
        <>
            <Navbar variant="light" expand="lg" id="top-navbar">
                <Container fluid>
                    <img src={logo} alt="..." height='70px' width='90px'></img>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                            <Link to={'/signin'} className="btn btn-primary">Sign in!</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='text-center'>
                <h3><Link to={'/productlist'} className="btn btn-warning">Start Shopping!</Link></h3>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image10}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p>Welcome</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image11}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <p>Great Deals!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image12}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <p>low Prices</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

        </>
    )
}
