  import React from 'react'
  import {Col,Button,Form, Row} from 'react-bootstrap';
  import "bootstrap/dist/css/bootstrap.min.css";
  export default function DetailForm() {
      return (
          <div>
            <h1 style={{fontWeight:'bold',backgroundColor:'black',color:'white'}}>STUDENT APLICATION FORM</h1>
      <Form>
        
  

      <Form.Group >
        <Row>
          <Col>
        <Form.Label style={{fontWeight:'bold'}}>First Name</Form.Label>
        <Form.Control type="Text" placeholder="" style={{borderWidth:'5px'}} />
        </Col>

    <Col>
        <Form.Label style={{fontWeight:'bold'}}>Middle Name</Form.Label>
        <Form.Control type="Text" placeholder="" style={{borderWidth:'5px'}} />
        </Col>
        <Col>
        <Form.Label style={{fontWeight:'bold'}}>Last Name</Form.Label>
        <Form.Control type="Text" placeholder=""style={{borderWidth:'5px'}} />
        </Col>
        </Row>
        </Form.Group>

        <Form.Group >
        <Row>
          <Col>
        <Form.Label style={{fontWeight:'bold'}}>Gener</Form.Label>
        <Form.Control type="Text" placeholder=""style={{borderWidth:'5px'}} />
        </Col>

    <Col>
        <Form.Label style={{fontWeight:'bold'}}>Age</Form.Label>
        <Form.Control type="Text" placeholder=""style={{borderWidth:'5px'}} />
        </Col>
        <Col>
        <Form.Label style={{fontWeight:'bold'}}>Cast</Form.Label>
        <Form.Control type="Text" placeholder="" style={{borderWidth:'5px'}}/>
        </Col>
        <Col>
        <Form.Label style={{fontWeight:'bold'}}>Weight</Form.Label>
        <Form.Control type="Text" placeholder="" style={{borderWidth:'5px'}}/>
        </Col>
        </Row>
        
        </Form.Group>
        <Form.Group >
        <Row>
          <Col>
        <Form.Label style={{fontWeight:'bold'}}>Mobile No</Form.Label>
        <Form.Control type="Text" placeholder=""style={{borderWidth:'5px'}} />
        </Col>

    <Col>
        <Form.Label style={{fontWeight:'bold'}}>Education</Form.Label>
        <Form.Control type="Text" placeholder="" style={{borderWidth:'5px'}}/>
        </Col>
        <Col>
        <Form.Label style={{fontWeight:'bold'}}>Addition Skill</Form.Label>
        <Form.Control type="Text" placeholder=""style={{borderWidth:'5px'}} />
        </Col>
       
        </Row>
        
        </Form.Group>
      
    

    <Form.Group controlId="formGridAddress1">
      <Form.Label style={{fontWeight:'bold'}}>Permanent Address</Form.Label>
      <Form.Control placeholder="" style={{borderWidth:'5px'}}/>
    </Form.Group>
    <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Accept all Terms And Conditions" style={{fontWeight:'bold'}}/>
  </Form.Group>
  <Button variant="primary" type="submit" style={{borderWidth:'5px'}}>
    Submit
  </Button>

  </Form>
          </div>
      )
  }
