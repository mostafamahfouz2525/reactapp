import React, { Component } from 'react';
import {Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ShowData from './ShowData';

class ContactPage extends Component
{

    constructor(props)
    {
        super(props)
        this.state ={
            name:'',
            email:'',
            message:'',
            disabled:false,
            emailSent:null,
        }
    }


    handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value,
            emailSent:false
        })
    }

    handleSubmit = (event) => 
    {
        event.preventDefault();
        this.setState({
            emailSent:true
        })
    }


    render()
    {

        
        return (
            <Container fluid>
                <h1 className="text-center">Contact Page</h1>
                <Form onSubmit={this.handleSubmit}>

                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Name</Label>
                        <Col sm={10}>
                        <Input type="text" name="name" id="exampleText" onChange={this.handleChange} placeholder="Name placeholder" value={this.state.name} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail"  onChange={this.handleChange}   placeholder="Email a placeholder" value={this.state.email} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplearea" sm={2}>Text Area</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="message" id="examplearea"  onChange={this.handleChange}  value={this.state.message} />
                        </Col>
                    </FormGroup>


                
                    <FormGroup  row>
                        <Col sm={{ size: 10, offset: 2 }}>
                        <Button type="submit" disabled={this.state.disabled}>Submit</Button>
                        </Col>
                    </FormGroup>
                    </Form>
                    {this.state.emailSent === true && <p className="alert alert-success text-center "> Email Sent </p>}
                    {this.state.emailSent === true &&  <ShowData  name={this.state.name} email={this.state.email}  message={this.state.message}/> }
            </Container>
        )
    }
}

export default ContactPage;