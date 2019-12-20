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

export default class MyProfile extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            profile: [],
            following: [],
            followers: [],
            posts: [],
            my_posts: [],
            id_index: {},
            post_filter: "everyone",
            input_title: "",
            input_content: "",
        };
    }

    componentDidMount() {
        const token = sessionStorage.getItem('jwt');
        const customHeaders = { headers: { "Authorization": "Bearer " + token } };
        const userid = sessionStorage.getItem('userId');
        const response = Axios
        .get(BACKEND_URL + `/feed/${userid}`, customHeaders)
        .then(res => {const query = res.data;
            this.setState({ 
                profile: query.user,
                following: query.following,
                followers: query.followers,
                posts: query.posts,
                my_posts: query.my_posts,
            });
        })
        return response;
    }

    onChangeHandlerTitle(e){
        this.setState({
            input_title: e.target.value,
        });
    }

    onChangeHandlerContent(e){
        this.setState({
            input_content: e.target.value,
        });
    }

    useridToName() {
        const arr = this.state.following
        for(let i = 0; i < arr.length; i++) {
            const index = this.state.id_index
            index[arr[i].id] = {
                "first_name": arr[i].first_name,
                "last_name": arr[i].last_name,
                "username": arr[i].username,
            }
        }
    }

    useridParser(id, field) {
        const index = this.state.id_index
        var query = index.id.field
        return query
    }

    renderMyPosts() {
        const arr = this.state.my_posts
        if(arr.length < 1) {
            this.lonely = 
                <Card>
                    <Card.Header>
                        <Card.Title>no posts :C</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>...</Card.Text>
                    </Card.Body>
                </Card>
            return this.lonely
        } else {
            this.list = arr
                .map((item, key) =>
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.post_title}</Card.Title>
                            <Card.Text>{item.post_content}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {item.created_at}
                        </Card.Footer>
                    </Card>
                )
            return this.list
        }
    }

    renderFollowingPosts() {
        this.useridToName()
        console.log(this.state)
        const arr = this.state.posts
        if(arr.length < 1) {
            this.lonely = 
                <Card>
                    <Card.Header>
                        <Card.Title>no posts :C</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>...</Card.Text>
                    </Card.Body>
                </Card>
            return this.lonely
        } else {
            this.list = arr
                .map((item, key) =>
                    <Card>
                        <Card.Header>
                            <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                            <Card.Text>@{item.username}</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{item.post_title}</Card.Title>
                            <Card.Text>{item.post_content}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {item.created_at}
                        </Card.Footer>
                    </Card>
                )
            return this.list
        }
    }

    togglePostFilterMe(e) {
        this.setState({
            post_filter: "me"
        });
        console.log("clicked")
    }

    togglePostFilterEveryone(e) {
        this.setState({
            post_filter: "everyone"
        });
        console.log("clicked")
    }

    renderPosts() {
        if(this.state.post_filter === "me") {
            return this.renderMyPosts()
        } else {
            return this.renderFollowingPosts()
        }
    }

    renderList(arr) {
        if(arr.length < 1) {
            this.lonely = 
                <Card>
                    <Row>
                        <Card.Body>
                        <Card.Title>No ones here :C</Card.Title>
                        </Card.Body>
                    </Row>
                </Card>
            return this.lonely
        } else {
            this.list = arr
                .map((item, key) =>
                        <Card>
                            <Row>
                                <Card.Body>
                                <a href={`/profile/${item.id}`}>
                                <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                                </a>
                                <Card.Text>
                                    @{item.username}
                                </Card.Text>
                                <span onClick={() => this.unfollowUser(item.id)}>
                                    <Button variant="outline-primary">Unfollow</Button>
                                </span>
                                </Card.Body>
                            </Row>
                        </Card>
                )
            return this.list
        }
    }

    //BROKEN
    postSomething() {
        const message = {
            post: {
                user_id: window.localStorage.getItem("userId"),
                post_title: this.state.input_title,
                post_content: this.state.input_content,
            }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/create_post', message, options);
    }

    //BROKEN
    unfollowUser = (unfollowed) => {
        const query = {
            friend: {
                user_id: window.localStorage.getItem("userId"),
                friend_id: unfollowed
            }
        };
        const token = sessionStorage.getItem('jwt');
        const options = { headers: { "Authorization": "Bearer " + token } }
        Axios.post(BACKEND_URL + '/unfollow', query, options)
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
                    <Col md={4}>
                        <h1 className={styles.generic}>Following {this.state.following.length}</h1>
                        {this.renderList(this.state.following)}
                    </Col>

                    <Col md={8}>
                        <h1 className={styles.generic}>Feed</h1>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <input type="string" placeholder="Title" className={styles.generic} onChange={this.onChangeHandlerTitle.bind(this)}></input>
                                </Card.Title>
                                <Card.Text>
                                    <input type="string" placeholder="Content" className={styles.generic} onChange={this.onChangeHandlerContent.bind(this)}></input>
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" onClick={() => this.postSomething()}>Post</Button>
                        </Card>
                        
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <ButtonGroup className="d-flex">
                                        <Button variant="outline-primary" onClick={() => this.togglePostFilterMe()}>My Posts</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col>
                                    <ButtonGroup className="d-flex">
                                        <Button variant="outline-primary" onClick={() => this.togglePostFilterEveryone()}>Following Posts</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Card.Footer>
                        {this.renderPosts()}
                    </Col>

                </Row>
            </Container>
        )
    }

}