import './SidebarContainer.css'
import {Card} from "react-bootstrap";

import ProfilesCardList from '../ProfilesCardList/ProfilesCardList.jsx'

const SidebarContainer = () =>
    (<>
        <Card  >
            <Card.Body>
                <ProfilesCardList  heading={'People you maybe known'} quantityToShow={5}/>
            </Card.Body>
        </Card>


    </>)

export default SidebarContainer