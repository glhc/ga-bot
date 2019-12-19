import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { BACKEND_URL } from "../../config";

export default class Chatroom extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chatrooms: [],
            selected_room: 1,
            room_info: [],
            room_users: [],
            room_messages: [],
        };
    }

    componentDidMount() {
        const token = sessionStorage.getItem('jwt');
        const customHeaders = { headers: { "Authorization": "Bearer " + token } }
        const response = Axios
        .get(BACKEND_URL + `/chatroom/${this.state.selected_room}`, customHeaders)
        .then(res => {const query = res.data;
            this.setState({ 
                chatrooms: query.chatrooms,
                room_info: query.info,
                room_users: query.users,
                room_messages: query.messages
            });
        })
        return response;
    }

        renderRooms() {
            this.list = this.state.chatrooms
                .map((item, key) =>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Body>
                                <Card.Title>{item.room_name}</Card.Title>
                                <Card.Text>
                                    filler text
                                </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            return this.list
        }

        renderChat() {
            this.list = this.state.room_messages
                .map((item, key) =>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Header>
                                    {item.user_id}
                                </Card.Header>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Text>
                                        {item.message}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            return this.list
        }

        renderParticipants() {
            this.list = this.state.room_users
                .map((item, key) =>
                    <a href={`/profile/${item.id}`}>
                        <Card>
                            <Row>
                                <Card.Body>
                                <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                                <Card.Text>
                                    @{item.username}
                                </Card.Text>
                                </Card.Body>
                            </Row>
                        </Card>
                    </a>
                )
            console.log(this.state)
            return this.list
        }

    render() {
        return(
            <Container>
                <Row>
                    <h1>break</h1>
                </Row>
                <Row>
                    <h1>.</h1>
                </Row>
                <Row>
                    <Col md={3}>
                        <h1>chatroom list:</h1>
                        {this.renderRooms()}
                    </Col>

                    <Col md={6}>
                        <h1>{this.state.room_info.room_name}</h1>
                        {this.renderChat()}
                        <Row>
                            <input type="string"/>
                            <Button variant="primary">Send</Button>
                        </Row>
                    </Col>

                    <Col md={3}>
                        <h1>chat participants</h1>
                        {this.renderParticipants()}
                    </Col>
                </Row>
            </Container>
        )
    }
}