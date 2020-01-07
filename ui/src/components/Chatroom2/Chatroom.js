import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BACKEND_URL } from "../../config";
import styles from './Sean.module.css';

export default class Chatroom extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chatrooms: [],
            selected_room: 1,
            room_info: [],
            room_users: [],
            room_messages: [],
            input: "",
        };
    }

    componentDidMount() {
      let self = this;
        this.reference = setInterval(() => self.updateRoom(self.state.selected_room), 2500)
    }

    updateChatroomData() {
        const token = sessionStorage.getItem('jwt');
        const customHeaders = { headers: { "Authorization": "Bearer " + token } }
        const userid = sessionStorage.getItem('userId');
        const response = Axios
        .get(BACKEND_URL + `/chatroom/${userid}/${this.state.selected_room}`, customHeaders)
        .then(res => {const query = res.data;
            this.setState({
                chatrooms: query.chatrooms,
                room_info: query.info,
                room_users: query.users,
                room_messages: query.messages,
            });
        })
        return response;
    }

    componentWillUnmount() {
        clearInterval(this.reference);
    }

    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        });
    }

    renderRooms() {
        this.list = this.state.chatrooms
            .map((item, key) =>
                <span onClick={() => this.updateRoom(item.id)}>
                    <Card className={styles.generic}>
                        <Row>
                            <Col>
                                <Card.Body>
                                <Card.Title>{item.room_name}</Card.Title>
                                <span>
                                    <Button variant="outline-danger" onClick={() => this.leaveRoom(item.id)}>Leave</Button>
                                </span>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </span>
            )
        return this.list
    }

    // BROKEN
    updateRoom(roomid) {
        this.setState({
            selected_room: roomid,
        });
        this.updateChatroomData()
    }

    // BROKEN
    createRoom() {
        const input = this.state.input
        const query = {
            chatroom: {
                user_id: window.sessionStorage.getItem("userId"),
                room_name: input,
            }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/create_room', query, options)
    }

    // BROKEN
    leaveRoom(input) {
        const query = {
            chatroomUser: {
                user_id: window.sessionStorage.getItem("userId"),
                chatroom_id: input,
            }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/leave_room', query, options)
    }

    renderChat() {
        this.list = this.state.room_messages
            .map((item, key) =>
                <ListGroup.Item>
                    <Card.Text>{item.first_name}: {item.message}</Card.Text>
                </ListGroup.Item>
            )
        return this.list
    }

    // eyyyy
    sendMessage() {
      let self = this;
        const input = this.state.input
        const query = {
            chatroom_messages: {
            user_id: window.sessionStorage.getItem("userId"),
            chatroom_id: this.state.selected_room,
            message: input
          }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/create_message', query, options)
        .then((response) => {
          self.updateRoom(self.state.selected_room)
        })
    }

    renderParticipants() {
        this.list = this.state.room_users
            .map((item, key) =>
                <a href={`/profile/${item.id}`}>
                    <Card className={styles.generic}>
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

    // BROKEN
    addMember() {
        const input = this.state.input
        const query = {
            chatroom: {
                username: input,
                chatroom_id: this.state.selected_room,
                is_admin: false,
            }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/add_user_chatroom', query, options)
    }

    render() {
        return(
            <Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col md={3}>  
                        <h1 className={styles.generic}>Chatroom</h1>
                        <Card.Header>
                            <Row>
                            <input className={styles.generic} type="string" placeholder="Room name" onChange={this.onChangeHandler.bind(this)}/>
                                <Button className={styles.generic} variant="outline-primary" onClick={() => this.createRoom()}>Create Room</Button>
                            </Row>
                        </Card.Header>
                        {this.renderRooms()}   
                    </Col>

                    <Col md={6}>
                        <h1 className={styles.generic}>{this.state.room_info.room_name}</h1>
                        <ListGroup variant="flush">
                            {this.renderChat()}
                        </ListGroup>
                        <Card.Footer>
                            <Row>
                            <input className={styles.generic} type="string" placeholder="Message" onChange={this.onChangeHandler.bind(this)}/>
                                <Button className={styles.generic} variant="primary" onClick={() => this.sendMessage()}>Send</Button>
                            </Row>
                        </Card.Footer>
                    </Col>
                    
                    <Col md={3}>
                        <h1 className={styles.generic}>Members</h1>
                        <Card.Header>
                            <Row>
                                <input className={styles.generic} type="string" placeholder="Username" onChange={this.onChangeHandler.bind(this)}/>
                                <Button className={styles.generic} variant="outline-primary" onClick={() => this.addMember()}>Add to room</Button>
                            </Row>
                        </Card.Header>
                        {this.renderParticipants()}
                    </Col>
                </Row>
            </Container>
        )
    }
}
