
import {Card, Col, Row} from 'react-bootstrap'
const ProfilesCardList = (props) =>
    <>
        {
            ((n)=>{
                let arr = []
                for(let I=0; I < n; I++){
                        arr.push(
                            <Card className={'mb-4'}>
                                <Card.Body>
                                    <Row>
                                        <Col style={{backgroundColor:'blue',height: '50px'}} xs={2}>

                                        </Col>
                                        <Col xs={10} style={{backgroundColor:'red',height: '100px'}}>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        )
                }
                return arr
            })(props.quantityToShow)
        }

    </>
export default ProfilesCardList