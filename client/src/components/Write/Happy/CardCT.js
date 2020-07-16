import { Link } from "react-router-dom";
import React, {Component} from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardCT.css';

import SchoolBG from './image/SchoolBG.jpg'
import CompanyBG from './image/CompanyBG.jpg'
import DietBG from './image/DietBG.jpg'

export default class CardCT extends Component {
    render(){
        return(
            <div className="cardCT">
                <CardDeck>
                    <Card className="card">
                        <Card.Img variant="top" className="img" src={CompanyBG}/>
                        <Card.Body className="card-body">
                        <Card.Title>직장인을 위한 글</Card.Title>
                        <Button variant="outline-warning">
                            <Link to="/Company">보러가기</Link>
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img variant="top" className="img" src={SchoolBG} />
                        <Card.Body className="card-body">
                        <Card.Title>대학생을 위한 글</Card.Title>
                        <Button variant="outline-warning">
                            <Link to="/School">보러가기</Link>
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img variant="top" className="img" src={DietBG} />
                        <Card.Body className="card-body">
                        <Card.Title>체중감량을 꿈꾸는 사람을 위한 글</Card.Title>
                        <Button variant="outline-warning">
                            <Link to="/Diet">보러가기</Link>
                        </Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        );
    }

}



