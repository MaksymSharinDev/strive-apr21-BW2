import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import {BsFillQuestionSquareFill} from "react-icons/bs";

const RightCardList = ({dataType}) => {
    let [listItems, setListItems] = useState([null])

    useEffect(() => {
        //fetch().then(r => r.json()).then(data => setListItems(data))
        import(`../../../data/${dataType}`).then(module => setListItems(JSON.parse(module.default)))

    }, [])
    return (
        <Card className={'mb-4'}>
            <Card.Body>
                {dataType === 'news' && (
                    <>
                        <h4>News</h4>
                        <ul className={'p-2'} style={{
                            listStyleType: 'none',
                            margin: 0,
                            padding: 0
                        }}>
                        {
                            listItems.map(item => (
                                <li className={'mb-3'}>

                                    <h5>
                                        <span className={'headline-bullet'}/>{item.title}
                                    </h5>
                                    <span>
                                    <span className={'headline-bullet invisible'}/>
                                        {item.timeAgo + ' • ' + item.readers} </span>
                                </li>
                            ))
                        }
                        </ul>
                    </>
                )}
                {dataType === 'mainCourses' && (<>
                        <h4>Courses</h4>
                        <ul className={'p-2'} style={{
                            listStyleType: 'none',
                            margin: 0,
                            padding: 0
                        }}>
                        {
                            listItems.map((item, i) => (
                                <li className={'mb-3'}>
                                    <h5>
                                        {item.title}
                                    </h5>
                                    <span> {item.author} </span>
                                </li>
                            ))
                        }
                        </ul>
                    </>
                )}
                <ol>
                    <li>

                    </li>
                </ol>
            </Card.Body>
        </Card>
    )

}


export default RightCardList
