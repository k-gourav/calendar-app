import '../App.css'
import arrow from '../assets/arrow-month.svg'
// {currentMonth, currentYear, nextYear, nextMonth, prevYear, prevMonth}

const Header = () => {
    return (
        <header>
            <div className="header-section">
                <div className="today">
                    <button id='today-btn'>Today</button>
                </div>
                <div className="nav-btn">
                    <button className="previous-month"><img src={arrow} alt="arrow-button" /></button>
                    <button className="next-month"><img src={arrow} alt="arrow-button" /></button>
                </div>
                <div className="month">
                    {/* <p>{currentMonth}</p>
                    <p>{currentYear}</p> */}
                    <p>currentMonth,</p>
                    <p>currentYear</p>
                </div>
            </div>
        </header>
    )
}

export default Header;