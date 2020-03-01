import React from 'react';
import Fold from '../components/Home/Fold';
import Cards from '../components/Home/Cards';
import {
    Container,
  } from 'reactstrap';

const HomePage = (props) =>
{
    return (
        <Container fluid>
            <Fold title={props.title} supTitle={props.supTitle} text={props.text} />
            <Cards />
        </Container>
    )
}

export default HomePage;