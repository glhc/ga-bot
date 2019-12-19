import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { BACKEND_URL } from "../../config";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            profile: [],
            following: [],
            followers: [],
            posts: [],
        };
    }

    componentDidMount() {
        const token = sessionStorage.getItem('jwt');
        const customHeaders = { headers: { "Authorization": "Bearer " + token } };
        const userid = this.props.match.params.id;
        const response = Axios
        .get(BACKEND_URL + `/profile/${userid}`, customHeaders)
        .then(res => {const query = res.data;
            this.setState({ 
                profile: query.user,
                following: query.following,
                followers: query.followers,
                posts: query.posts,
            });
        })
        return response;
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
            return this.list
        }
    }

    renderPosts() {
        const arr = this.state.posts
        if(arr.length < 1) {
            this.lonely = 
                <Card>
                    <Card.Header>
                        <Card.Title>{this.state.profile.first_name} hasnt posted anything :C</Card.Title>
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
                            <Card.Title>{item.post_title}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {item.post_content}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {item.created_at}
                        </Card.Footer>
                    </Card>
                )
            return this.list
        }
    }

    render() {
        const profile = this.state.profile;

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
                        <h1>Following {this.state.following.length}</h1>
                        {this.renderList(this.state.following)}
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <h1>{profile.first_name} {profile.last_name}</h1>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>@{profile.username}</Card.Text>
                                <Card.Text>{profile.age}</Card.Text>
                                <Card.Text>{profile.email}</Card.Text>
                            </Card.Body>
                        </Card>
                        {this.renderPosts()}
                    </Col>

                    <Col md={3}>
                        <h1>{this.state.followers.length} Followers</h1>
                        {this.renderList(this.state.followers)}
                    </Col>

                </Row>
            </Container>
        )
    }

}

export default withRouter(Profile);