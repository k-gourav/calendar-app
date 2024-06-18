import ListOfWeeks from "./ListOfWeeks";
import Dates from "./Dates"


const Body = ({currentMonth, currentYear}) => {
    return (
        <>
        <ListOfWeeks />
        <Dates currentMonth={currentMonth} currentYear={currentYear} />
        </>
    )
}
export default Body;