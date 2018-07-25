import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Topics from  '../Topics/Topics';
import NewStudentForm from '../NewStudentForm/NewStudentForm';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const bdr = {
    border: '2px solid #0099CC',
    borderradius: '10px',
    height: '100px'
  };
const Home = (props) => {
    
    return (
        <Router>
        <div>
            <Row>
                <Col xs={6} md={4}>
                    <Topics />
                </Col>
                <Col xs={12} md={8} style={bdr} >
                     {props.childern}
                    
                </Col>
            </Row>
        </div>
        </Router>
    )
}

export default Home;