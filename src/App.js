import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import video from './videoSong.mp4';
import Scrollspy from 'react-scrollspy';
import { Container, Col, Row,  Card, CardBody } from 'reactstrap';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView,  faAddressBook,  faPeopleArrows, faBoxes,  faDatabase,  faAddressCard,    faCalendarCheck, faServer, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.Scroll=this.handleScroll.bind(this);
    this.state ={src:"./mobilescreen.jpg",
    autoPlay_value:false, class_name:'featurecard_left' , class2:"featurecard_right", drama:false};
    this.srcs={im1:"./Hero-Image.png",
    im2:'public\mobilescreen.jpg',
    im3:"https://www.pikpng.com/pngl/m/517-5172466_iphone-mobile-screen-iphone-png-clipart.png"}
  }


  listenScrollEvent = e => {
    if(window.scrollY>1100 && this.state.drama==false)
    {
      this.setState({class2: 'featurecard_rightt'})
      this.setState({class_name: 'featurecard_leftt'})
      this.setState({drama:true});
    }       
  }

 

  sayHello(item) {
    let src=this.srcs[item]
    this.setState({src:src})
  }

  handleScroll(){
    alert("hello");
    document.getElementsByClassName("featurecard_left").className="featurecard_leftt";

  }
  
  //"https://inthemoment.io/assets/today-89e0148cd8117a2c77b50949f556c1b8.jpg"
  //https://images-na.ssl-images-amazon.com/images/I/71p1yaY8YdL._SX679_.jpg
  //https://www.pikpng.com/pngl/m/517-5172466_iphone-mobile-screen-iphone-png-clipart.png
  //https://tenoapp.com/html/images/website/features/Teno_App_Home_Screen_White.png
  //https://www.pidge.in/wp-content/uploads/2020/05/Hero-Image.png
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render()
  {
    
  return (   
         
    <div >
      <div>
      
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand href="/">EdDox</NavbarBrand>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
        <Scrollspy items={ ['Home', 'About', 'Feature','Demo','Help'] } currentClassName="is-current"></Scrollspy>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#About" onclick>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Feature">Feature</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Demo">Demo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Help">Help</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Hi Guys</NavbarText>
          </div>
      </Navbar>
      </div>
      <div>
      <Container>        
        <Row >
          <Col md="4" xs="12" className="Homepage-left">            
            <img src="https://inthemoment.io/assets/today-89e0148cd8117a2c77b50949f556c1b8.jpg" className="HomePageImage" alt ="mobile app home screen"></img>
          </Col >
          
          <Col md="8" xs="12" className="HomePage-Right">
            <h1>A Bridge between School and  Student</h1>
            <br/>
            <button className="appbutton">Get the App</button>
          </Col>
        </Row>
        <div>
        <section id="About"></section>
        <Row className="About">
          <img src="https://mediaserver.goepson.com/ImConvServlet/imconv/ab6b956e0863668f3adcca5683a4c6816908e6b2/original?use=productpictures&assetDescr=001-1400X570" className="aboutimage" alt="about"/>
          <Col md='6'>
          <p>We believe everyone deserves to have a website or online store.<br/>Innovation and simplicity makes us happy: <br/>our goal is to remove any technical</p>
          
          </Col>
          <Col md='6'>
          <p>We believe everyone deserves to have a website or online store.<br/>Innovation and simplicity makes us happy: <br/>our goal is to remove any technical</p>
          
          </Col>
          
        </Row>
        </div>
        <div>
        <section id="Feature"></section>
      <Row>
        
        <Col md="4" sm="12" xs="12">
          <Card  className={this.state.class_name}>
            <CardBody>
              <h3> Analytics <FontAwesomeIcon icon=  {faDatabase}/></h3><br/>
              <p>Academic/non academic evenets consolidation at one place for reference</p>              
            </CardBody>
          </Card>
          <Card className={this.state.class_name}>
            <CardBody>
            <h3>Attendance  <FontAwesomeIcon icon=  {faAddressCard}/></h3><br/>
            <p>
Maintenance of attendenance which is easy and convenient to upload as well as readily accessible by the users on their device
</p>
            </CardBody>
          </Card>
          <Card onClick={()=>this.sayHello(2)} className={this.state.class_name} >
          <CardBody>
            <h3>Files Upload  <FontAwesomeIcon icon=  {faBoxes}/></h3><br/>
              <p>Multiple document formats can be uploaded on the shared loaction with the students that will reduce the paper costing and eventually push for a greener future</p>
            </CardBody>
            
          </Card>
          <Card className={this.state.class_name}>
            <CardBody>
            <h3>Time-Table  <FontAwesomeIcon icon=  {faCalendarCheck}/></h3><br/>
              <p>Conveneint way to upload time-table and access them readily on the go</p>
            </CardBody>
          </Card>
          
        </Col>
        
        <Col md="4" xs="12">
          
        <img src={this.state.src} id="MobileImage" alt ="mobile app home screen"></img>
        </Col>
        <Col md="4">
          <Card onClick={()=>this.sayHello('im1')} className={this.state.class2}>
          <CardBody>
            <h3>Notice <FontAwesomeIcon icon=  {faServer}/></h3><br/>
              <p>Teachers at all positions can roll out circulars for the designated audience</p>
            </CardBody>
          </Card>
          <Card onClick={()=>this.sayHello(0)} className={this.state.class2}>
            <CardBody>
            <h3>Parent Interaction  <FontAwesomeIcon icon=  {faPeopleArrows}/></h3><br/>
              <p>Setting-up of hassle free parent teacher meetings eliminating the need for human interaction</p>
            </CardBody>
          </Card>
          <Card onClick={()=>this.sayHello(1)} className={this.state.class2}>
            <CardBody>
            <h3>Meeting  <FontAwesomeIcon icon=  {faStreetView}/></h3><br/>
              <p>Considering the prospect of single account usage across multiple devices that can be used by student's guardians</p>
            </CardBody>
          </Card>
          <Card onClick={()=>this.sayHello(2)} className={this.state.class2}>
            <CardBody>
            <h3>Specific Remarks  <FontAwesomeIcon icon=  {faAddressBook}/></h3><br/>
              <p>Teacher can share special remarks for the students which can be tracked by parents in the form of push notifications</p>
            </CardBody>
          </Card>
          
        </Col>
      </Row>
      </div>

      <div>
      <section id="Demo"></section>
      <Row>
        <Col>
        <video ref="video" src ={video} controls  className="videoplay"></video>
        
        </Col>
      </Row>
      </div>

      <Row className="downloadsection">
       <Col md= "5">
      <h2>Download for free</h2><br/>
      </Col>
      <Col md="7">
      <img  src = "https://www.pinclipart.com/picdir/big/42-420669_home-android-logo-white-no-background-clipart.png" className="androidimage" alt="Android"></img>
      <p></p>
      </Col>
     </Row>
     <div>
     <section id="Help"></section>
     <Row className="Helpsection">
       <Col >
      <h3>Contact Us</h3><br/>
      <p><FontAwesomeIcon icon=  {faPhone}/> : +919999999999</p>
      <p><FontAwesomeIcon icon=  {faEnvelope}/> :  ABC@xyz.com</p>
      <br/>
<img src="https://i7.pngguru.com/preview/16/46/415/made-in-kings-heath-instagram-facebook-female-photography-instagram-png-logo.jpg" className="Insta" alt="Instagram"></img>
<img src="https://foremostlist.com/wp-content/uploads/2020/01/FacebookMobile.png" className="Insta"></img>
      </Col>
     </Row>
     </div>
     </Container>
    </div>
    </div>

  );
  }
}


export default App;
