import ListOfWeeks from "./ListOfWeeks";
import Dates from "./Dates"

const Body = () => {
    return (
        <>
        <ListOfWeeks />
        {/*January*/}
        <Dates currentMonth="0" currentYear="2024" />   
        </>
    )
}
export default Body;