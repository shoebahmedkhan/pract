    import React from 'react';
    import {Jumbotron,Navbar,Nav,Form,FormControl,Button ,Image} from 'react-bootstrap';
    import '../MainBodyHeader/MainHeader.css';
    export const MainHeader = () => {
        return (
            <div>
            <Jumbotron style={{backgroundColor:"black"}}>
           
            <Navbar  className="main-header">
        <Navbar.Brand href="#home" style={{fontWeight:"bold"}}>  
      <Image className="img" src="Assests/pickupbizlogo.png"  />
    PickupBiz</Navbar.Brand>
        <Nav className="mr-auto" style={{fontWeight:"bold"}}>
        <Nav.Link href="#home" style={{fontWeight:"bold"}}>Home</Nav.Link>
        <Nav.Link href="#features" style={{fontWeight:"bold"}}>Features</Nav.Link>
        <Nav.Link href="#pricing" style={{fontWeight:"bold"}}>Pricing</Nav.Link>
        </Nav>
        <Form inline style={{fontWeight:"bold"}}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2"  style={{fontWeight:"bold"}}/>
        <Button variant="outline-info" style={{fontWeight:"bold"}}>Search</Button>
        </Form>
    </Navbar>
            </Jumbotron>    
            </div>
        );
    };
