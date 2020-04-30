import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})
    return (
     
           <div style={{ fontWeight : "bold" }}>
           <center>
               <Row>
               <Col>
               <Card  style={{ width: '18rem',border : '#fff' }}>
               <br /> 
               <center>
               <Col>
                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10,height: '500px',width:'500px' }} />
                </Col>
               </center>
               </Card>
               </Col>
               <Col>
               <Card  style={{ width: '48rem',border : '#fff'}}>
               <br /> 
               <Card.Body>
               <Card.Text>
               <br />
           

            <Row style={{ fontWeight : "bold",fontSize : '25px'  }}>{props.location.projectData.projectTitle}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>{props.location.projectData.projectDescription}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Timeline : {props.location.projectData.projectTimeline}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Manager Name : {props.location.projectData.projectManagerName}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Manager Contact : {props.location.projectData.projectManagerContact}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Manager Email : {props.location.projectData.projectManagerEmail}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Project Category : {props.location.projectData.projectCategory}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Project Technology : {props.location.projectData.projectTechnology}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Budget : {props.location.projectData.projectBudget}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Email : {props.location.projectData.email}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Specialization : {props.location.projectData.specialization}</Row>

                   <br/>
                   <Row>projectData Details
                    <Link to={{
                        pathname: '/freelancerDashboard/confirmationPage',
                        projectData: props.location.projectData,
                        bookingInfo: "ticketQuantity"

                    }}>
                    &nbsp;  &nbsp;  &nbsp; <Button>Apply Now</Button></Link>
                   </Row>
                   </Card.Text>
                   </Card.Body>
                   </Card>
                   </Col>    
                   </Row>
           </center>
           </div>
    )
}

export default DetailsComponent
