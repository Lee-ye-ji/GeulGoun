import { Link } from "react-router-dom";
import React, {Component} from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardCT.css';

import Dream from './image/Dream.jpg'
import relationship from './image/relationship.jpg'
import self_esteem from './image/self-esteem.jpg'

export default class CardCT extends Component {
    render(){
        return(
            <div className="cardCT">
                <CardDeck>
                    <Card className="card">
                        <Card.Img variant="top" className="img" src={relationship}/>
                        <Card.Body className="card-body">
                        <Card.Title>인간관계에 지친 사람들을 위한 글</Card.Title>
                        <Button variant="outline-warning">
                            <Link to="/Relationship">보러가기</Link>
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img variant="top" className="img" src={Dream} />
                        <Card.Body className="card-body">
                        <Card.Title>꿈을 꾸고 있는 사람들을 위한 글</Card.Title>
                        <Button variant="outline-warning">
                            <Link to="/Dream">보러가기</Link>
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img variant="top" className="img" src={self_esteem} />
                        <Card.Body className="card-body">
                        <Card.Title>자존감을 높여주는 글</Card.Title>
                        <Button variant="outline-warning">
                            <Link to="/self_esteem">보러가기</Link>
                        </Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        );
    }

}



