import {Card, Col, Row} from 'react-bootstrap'
import {useEffect, useState} from "react";


const Profile = (props) =>{
    let [ loading, setLoading ] = useState( true )

    useEffect(
        ()=>{
            fetch().then(r => r.json()).then(
                (data)=>{}
            )
        },[]
    )

    return (
        <Row>
        <Col xs={3} style={{paddingTop: '5px'}}>
            <div style={{backgroundColor: 'grey', height: '60px', width: '60px', borderRadius: '50%'}}/>
        </Col>
        <Col xs={9} style={{paddingTop: '5px'}}>
            <p style={{backgroundColor: 'gray', height: '100px'}}/>
        </Col>
    </Row> )
}



const ProfilesCardList = (props) =>
    <>
        <h4 className={'mb-4'}>
            {props.heading}
        </h4>
        {
            ((n) => {
                let arr = []
                for (let I = 0; I < n; I++) {
                    arr.push(
                        <Card className={'mb-4'}>
                            <Card.Body>
                                <Profile id={''}/>
                            </Card.Body>
                        </Card>
                    )
                }
                return arr
            })(props.quantityToShow)
        }

    </>
export default ProfilesCardList