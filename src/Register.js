import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
  Redirect,
  onChange
  } from 'react-router-dom'
import ReactDOM  from 'react-dom';
// import {Button} from 'react-materialize';
import { Grid, Row, Col,  Carousel } from 'react-bootstrap';
import './Register.css';
import imagen1 from './images/icon-people.png'

// https://www.npmjs.com/package/react-responsive-carousel

const CarouselYape=()=>{
  return(
  <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="http://174.138.48.60:3000/img/icons/icon-people.png"/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/images/happy-person.png"/>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/images/group-people.png"/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 )}



const Register = ({model}) => {
  return (
    <CarouselYape model={model}/>
  );
}
  
{/* <Grid className="text-center">
<div className="item">
  <img src="data/images/icon-people.png" className="img-respoonsive mily"/>
  <b><h4 className="less-margin">Paga a tu amigos</h4></b>
  <p className="less-margin"> Paga a quien quieras desde donde quieras , sin usar efectivo</p>
</div>
<Form>

      <Row className="botonMily">
      <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
        {
          this.state.active ?
            <NavLink to={"/phone-validation"} className="block button-content bg-yellow text-white">REGISTRARME</NavLink>
            :
            <NavLink to={"/phone-validation"} className="button-content bg-gray-light text-white">REGISTRARME</NavLink>
        }
      </Col>
    </Row>
    <section className="container-fluid downMily">
    <span>¿Ya tienes cuenta?</span>
    {
          this.state.active ?
            <NavLink to={"/login"} className="block milygreen">Inicia Ssesión</NavLink>
            :
            <NavLink to={"/login"} className="input-content bg-gray-light text-white">Inicia Sesión</NavLink>
        }
    </section>      
  </Form>
</Grid>
  
        );
    }
  } */}

    export default Register;

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls

{/* <Carousel>
<div>
    <img src="data/images/icon-people.png" />
    <p className="legend">Legend 1</p>
</div>
<div>
    <img src="data/images/group-people.png" />
    <p className="legend">Legend 2</p>
</div>
<div>
    <img src="data/images/happy-person.png" />
    <p className="legend">Legend 3</p>
</div>
<div>
    <img src="assets/4.jpeg" />
    <p className="legend">Legend 4</p>
</div>

</Carousel> */}

{/* //<Carousel className="carousel-slide">
//   <Carousel.Item>
//     <img className="img- img-responsive" alt="900x500" src={"/img/group-people.png"}/>
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <div className="text-center">
//   <Carousel.Item>
    
//     <img className="img-carousel img-responsive" alt="900x500" src={"/img/happy-person.png"}/>
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   </div>
//   <Carousel.Item>
//     <img className="img-carousel img-responsive" alt="900x500" src={"/img/icon-people.png"}/>
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel> */}
