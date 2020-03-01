import React from 'react';

const ShowData = (props) =>
{
    return (
       
            <div>
                <h3 className="alert alert-info">Name Is    : {props.name} </h3>
                <h3 className="alert alert-info">Email Is   : {props.email} </h3>
                <h3 className="alert alert-info">Message Is : {props.message} </h3>
            </div>
        
    )
}

export default ShowData;