import React, { Component } from 'react';
import UsersData from './UsersData';
import {Container,Row} from 'reactstrap';

import axios from 'axios';


class UsersPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            allUsers:[]
        }
    }
    getAllUsers = ()=>
    {
        const allUsers = axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response=>{
            const allUsers = response.data;
            this.setState({
                allUsers : allUsers.data
            })

            console.log(this.state.allUsers)
           
        }).catch(error=>{
            console.log(error)
        })
    }

    componentDidMount=()=>
    {
        this.getAllUsers();
    }
    render()
    {
        return (
            <Container fluid>
                <h1 className="text-center p-5"> All Users </h1>
                
                <Row> 
               {
                    this.state.allUsers.map((item,index)=>
                    {
                        return <UsersData item={item} key={index} />
                    })

               }
               </Row>
            </Container>
        )
    }
    
}

export default UsersPage;