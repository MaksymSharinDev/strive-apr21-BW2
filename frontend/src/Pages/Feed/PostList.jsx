import {Card, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

const PostList = (props) => {
    let [postData, setPostData] = useState(
        [{
            "_id": 'loading...',
            "text": 'loading...',
            "username": 'loading...',
            "createdAt": 'loading...',
            "updatedAt": 'loading...',
            "__v": 'loading...'
        }]
    )

    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/posts/', {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MWRmYzI5MTkzMDAwMTU2MGFiOWEiLCJpYXQiOjE2MjM2NjIwNzcsImV4cCI6MTYyNDg3MTY3N30.S-4OzceDjWQt4-jFgqD0QsGS1neM4wsDD60vIc397hg",
            },
        }).then(r => r.json())
            .then((data) => {
                let tmpArr = [];
                for (let I = 0; I < props.quantityToShow; I++) {
                    let randomIndex = Math.floor(Math.random() * data.length);
                    tmpArr.push(data[randomIndex])
                }
                setPostData(tmpArr)
            })
    }, [])

    return (
        <Card>
            <Card.Body>
                {
                    postData.map(post => (
                        <Card className="mb-4">
                            <Card.Body>
                                <Row><h5>{post.username}</h5></Row>
                                <Row><p>Created at post {post.createdAt}</p></Row>
                                <Row><p>updatedAt {post.updatedAt}</p></Row>
                                <Row>
                                    <p style={{maxHeight: '300px', overflow: 'hidden'}}>
                                        Text: { post.text}
                                    </p>
                                </Row>

                            </Card.Body>
                        </Card>
                        /*
                        {
            "_id": null,
            "text": null,
            "username": null,
            "createdAt": null,
            "updatedAt": null,
            "__v": null
        }
                        */
                    ))
                }
            </Card.Body>
        </Card>
    )
}

export default PostList