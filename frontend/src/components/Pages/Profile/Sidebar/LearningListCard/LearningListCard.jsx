import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const LearningListCard = ()=>
    <Card >
        <Card.Body>
            <Card.Text>
                LEARNING
                Add new skills free for 24 hours

            </Card.Text>
        </Card.Body>

        <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </Card>
export default LearningListCard