const Dates = ({ currentMonth, currentYear }) => {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const firstDay = daysInMonth.getDay()
  const daysArray = [...Array(daysInMonth).keys()].map((i) => i + 1);

  return (
    <>
      <div className="date-container">
        {daysArray.map((day) => (
          <div key={day} className="date-content">
            {day}
          </div>
        ))}
      </div>
      {/* <div>{firstDay}</div> */}
    </>
  );
};

export default Dates;
