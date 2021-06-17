
import {Card} from "react-bootstrap";

import AdCard from '../../../components/AdCard/AdCard .jsx'
import RightCardList from './RightCardList'
const FeedRightSidebar = () =>
    (<>
        <Card  >
            <Card.Body>

                <RightCardList dataType={'news'}/>
                <RightCardList dataType={'mainCourses'}/>
                <AdCard/>
            </Card.Body>
        </Card>


    </>)

export default FeedRightSidebar