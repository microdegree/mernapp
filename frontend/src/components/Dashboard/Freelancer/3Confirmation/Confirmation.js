import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div>
                       <center>
<Card style={{ width: '48rem',backgroundColor: '#68FFDC'  }}><Card.Body>
    <Card.Title>Confirmation Page</Card.Title>
    <Card.Title>Booking Information</Card.Title>
    <Card.Text>
    {props.location.projectData.specialization}
            {props.location.bookingInfo}
    </Card.Text>
    <Row>
        <Col>
        <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10,height: '250px',width:'300px' }} />
        </Col>
        <Col>
            <Row style={{ fontWeight : "bold",fontSize : '25px'  }}>{props.location.projectData.projectTitle}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Manager Email : {props.location.projectData.projectManagerEmail}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Project Category : {props.location.projectData.projectCategory}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Project Technology : {props.location.projectData.projectTechnology}</Row>
            <Row style={{ fontWeight : "bold",fontSize : '20px'  }}>Budget : {props.location.projectData.projectBudget}</Row>
        </Col>    
                   </Row>
    <Button variant="primary"><Link to='/freelancerDashboard/paymentsGateway' style={{ color : '#fff'}} onClick={confirmAppointmentAtServer}>COnfirm Booking and go to Payments</Link></Button>
   
  </Card.Body>
</Card>
</center>
            
        </div>
    )

    function confirmAppointmentAtServer() {

        fetch('/api/patient/addNewAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": auth.userEmail,
                "specialization": props.location.projectData.specialization,
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
