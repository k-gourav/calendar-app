import '../App.css';
import {listOfWeeks} from './constant'

const ListOfWeeks = () => {
    return (
        <div className="day-container">
            {listOfWeeks.map((element) => {
                return <div>{element.day}</div>
            })}
        </div>
    )
}

export default ListOfWeeks;