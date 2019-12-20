// import React, { PureComponent as Component } from 'react';
import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BACKEND_URL } from "../../config";
import styles from './Sean.module.css';
export default class People extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            friends: [],
            input: '',
            filteredFriends: [],
            selectedUser: {},
        };
    }

    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        });
    }

    // componentDidMount() {
    //     const FriendURL = 'http://localhost:3010/read_people';
    //     Axios.get(FriendURL)      
    //             .then(res => {const query = res.data;
    //                 this.setState({ friends: query});
    //     })
    // }

    componentDidMount() {
        const token = sessionStorage.getItem('jwt');
        const customHeaders = { headers: { "Authorization": "Bearer " + token } }
        const response = Axios
        .get(BACKEND_URL + '/read_people', customHeaders)
        .then(res => {const query = res.data;
            this.setState({ friends: query});
        })
        return response;
    }

    getRelatedFields = (item) => {
        const output = [];
        const fields = ['first_name', 'last_name', 'email', 'username']
        fields.map(field => output.push(item[field]))
        return output;
    }

    updateSelectedUser = (userid) => {
        const update = this.state.friends[userid - 1];
        this.setState({
            selectedUser: update,
        });
    }

    followUser = () => {
        const query = {
            friend: {
                user_id: window.localStorage.getItem("userId"),
                friend_id: this.state.selectedUser.id
            }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/follow', query, options)
    }

    unfollowUser = () => {
        const query = {
            friend: {
                user_id: window.localStorage.getItem("userId"),
                friend_id: this.state.selectedUser.id
            }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/unfollow', query, options)
    }

    render() {
        const {friends} = this.state;
        this.friends = friends
            .filter(item => {
                const relatedFieldsArray = this.getRelatedFields(item);
                const searched = relatedFieldsArray.map(item => item.toLowerCase().includes(this.state.input.toLowerCase()));
                return searched.includes(true) ? item : null;
            })
            .map((item, key) =>
                    <span onClick={() => this.updateSelectedUser(item.id)}>
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
                    </span>
            );

        return(
            <div>
            <Container>
                <Row>
                    <h1>break</h1>
                </Row>
                <Row>
                    <h1>.</h1>
                </Row>
                <Row>
                    <Col md={4}>
                        <h2 className={styles.generic}>Search: </h2>
                        <Card>
                            <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
                        </Card>
                        {this.friends}
                    </Col>
                    <Col md={8}>
                        <Card className={styles.generic}>
                            <a href={`/profile/${this.state.selectedUser.id}`}>
                                <Card.Header>
                                    <h1>{this.state.selectedUser.first_name} {this.state.selectedUser.last_name}</h1>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>@{this.state.selectedUser.username}</Card.Title>
                                    <Card.Text>age: {this.state.selectedUser.age}</Card.Text>
                                    <Card.Text>email: {this.state.selectedUser.email}</Card.Text>
                                </Card.Body>
                            </a>
                            <Card.Footer>
                                <Row>
                                    <Col>
                                        <ButtonGroup className="d-flex">
                                            <Button variant="primary" onClick={() => this.followUser()}>Follow</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col>
                                        <ButtonGroup className="d-flex">
                                            <Button variant="outline-primary" onClick={() => this.unfollowUser()}>Unfollow</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }

}
