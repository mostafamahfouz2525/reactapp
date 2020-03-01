import React from 'react';
import about from '../assets/images/about.jpg'
import {
    Container,
  } from 'reactstrap';

const AboutPage = (props) =>
{
    return (
        <Container fluid className="p-0 m-0" >
                <h1 className="text-center">About Page</h1>
          
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam qui tempora! Eveniet ut numquam, dignissimos dolor reprehenderit, voluptates aspernatur nisi deleniti, enim necessitatibus aperiam in voluptatibus labore pariatur quae animi voluptate! Ducimus quos modi sapiente neque, doloribus labore nobis culpa, dignissimos error minima id. Dolor quos quibusdam expedita veritatis? 


                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam qui tempora! Eveniet ut numquam, dignissimos dolor reprehenderit, voluptates aspernatur nisi deleniti, enim necessitatibus aperiam in voluptatibus labore pariatur quae animi voluptate! Ducimus quos modi sapiente neque, doloribus labore nobis culpa, dignissimos error minima id. Dolor quos quibusdam expedita veritatis? 
                    
                    
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam qui tempora! Eveniet ut numquam, dignissimos dolor reprehenderit, voluptates aspernatur nisi deleniti, enim necessitatibus aperiam in voluptatibus labore pariatur quae animi voluptate! Ducimus quos modi sapiente neque, doloribus labore nobis culpa, dignissimos error minima id. Dolor quos quibusdam expedita veritatis? 
                    
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ipsam qui tempora! Eveniet ut numquam, dignissimos dolor reprehenderit, voluptates aspernatur nisi deleniti, enim necessitatibus aperiam in voluptatibus labore pariatur quae animi voluptate! Ducimus quos modi sapiente neque, doloribus labore nobis culpa, dignissimos error minima id. Dolor quos quibusdam expedita veritatis?                 
                </p>
                <img src={about} width="100%" height="700" />

            
        </Container>
    )
}

export default AboutPage;