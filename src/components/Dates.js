const Dates = ({ currentMonth, currentYear }) => {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const coloredDay = new Date()
  const daysArray = [...Array(daysInMonth).keys()].map((i) => i + 1);

  return (
    <>
      <div className="date-container">
        {daysArray.map((day) => (
          (currentMonth === coloredDay.getMonth() && currentYear === coloredDay.getFullYear() && day === coloredDay.getDate()) ?
            <div key={day} className="date-content today-color-day">
            {day}
          </div> : <div key={day} className="date-content">
          {day}
        </div>
        ))}
      </div>
    </>
  );
};

export default Dates;
