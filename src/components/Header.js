import '../App.css'
import arrow from '../assets/arrow-month.svg'
import { month } from './constant'

const Header = ({currentMonth, currentYear, previousMonthNavigate, nextMonthNavigate, todayDay}) => {
    return (
        <header>
            <div className="header-section">
                <div className="today">
                    <button id='today-btn' onClick={todayDay}>Today</button>
                </div>
                <div className="nav-btn">
                    <button className="previous-month" onClick={previousMonthNavigate}><img src={arrow} alt="arrow-button" /></button>
                    <button className="next-month" onClick={nextMonthNavigate}><img src={arrow} alt="arrow-button" /></button>
                </div>
                <div className="month">
                    <p>{month[currentMonth]},</p>
                    <p>{currentYear}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;