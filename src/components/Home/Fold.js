import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
const Fold = (props) =>
{
    return (
      
        <div>
            <Jumbotron fluid>
                {props.title && <h1 className="display-3 text-center"> {props.title} </h1> }
                {props.supTitle && <p className="lead text-center">{props.supTitle}</p>}
                {props.text && <p className="lead text-center">{props.text}</p>}
            </Jumbotron>
        </div>

    )
}

export default Fold;