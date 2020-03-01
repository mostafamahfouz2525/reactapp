import React from 'react';
import { Col} from 'reactstrap';

const UsersData = (props) =>
{
    return (
       
        
        <Col md={4} >
            <div className="bg-info p-3 border-bottom mb-3 mt-3">
                <h4> <span className="text-white"> Employee Name Is : </span>  {props.item.employee_name} </h4>
                <h4> <span className="text-white"> Employee Salary Is : </span>  {props.item.employee_salary} </h4>
                <h5> <span className="text-white"> Employee Age Is : </span>  {props.item.employee_age} </h5>
            </div>
        </Col>
         
        
    )
}

export default UsersData;