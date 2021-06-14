import './SidebarContainer.css'
import {Card} from "react-bootstrap";

import ProfilesCardList from '../ProfilesCardList/ProfilesCardList.jsx'

const SidebarContainer = () =>
    (<>
        <Card className={'mt-5'} >
            <Card.Body>
                <ProfilesCardList  itemsName={'maybeKnownPeople'} quantityToShow={5}/>
            </Card.Body>
        </Card>


    </>)

export default SidebarContainer