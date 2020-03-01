import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

// images 

import devgrub from '../../assets/images/devgrub.png';
import evverest from '../../assets/images/evverest.png';
import youtube from '../../assets/images/youtube.png';


const CardInner = (props) =>
{
   

    return (
    
       
        <Card className="card-img" style={{width:"32%",height:"auto"}}>
          <CardBody>
            <CardTitle className="pb-3 text-center"> <h3>{props.item.subTitle} </h3>  </CardTitle>
          </CardBody>
          <img width="100%" src={props.item.imgSrc} alt="Card image cap" height="450" className="mt-3" />
          <CardBody>
          <CardText className="p-3">{props.item.subTitle}</CardText>
          </CardBody>
        </Card>

    )
   
    
}

export default CardInner;