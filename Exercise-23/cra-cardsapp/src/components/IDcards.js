import IDcard from "./IDcard";
import Data from '../Data.json'

function IDCards() {
    return (<>
        <h1>IDCards</h1>
        {/*  Using Functional Component */}
        {Data.data.map(elm => {
            return <IDcard key={elm.id} name={elm.name} age={elm.age} des={elm.des}/>
        })}
    </>
    );
}

export default IDCards;