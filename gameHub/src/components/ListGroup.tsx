import {Fragment} from "react"
function ListGroup(){
    const items=[
        'NY',
        'MD',
        'CA',
        'TX',
    ]
    
    return (
        <Fragment>
            <h1>List </h1>
            <ul>
            {items.map((item)=>(<li key={item}>{item}</li>))}
           </ul>
        </Fragment>);
}
export default ListGroup