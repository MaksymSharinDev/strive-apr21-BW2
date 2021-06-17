
export default (() =>
        JSON.stringify([...new Array(5)].map(
            () => {return {title: 'Course', author: 'Name Surname'}}
        )) )()