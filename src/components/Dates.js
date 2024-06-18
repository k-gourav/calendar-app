const Dates = ({ currentMonth, currentYear }) => {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const coloredDay = new Date();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysArray = [
    ...Array.from({ length: firstDayOfMonth }, () => ""),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // const daysArray = [...Array(daysInMonth).keys()].map((i) => i + 1);

  return (
    <>
      <div className="date-container">
        {daysArray.map((day, index) =>
          day === "" ? (
            <div key={index} className="date-content empty"></div>
          ) : currentMonth === coloredDay.getMonth() &&
            currentYear === coloredDay.getFullYear() &&
            day === coloredDay.getDate() ? (
            <div key={index} className="date-content today-color-day">
              {day}
            </div>
          ) : (
            <div key={index} className="date-content">
              {day}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Dates;
// + new Date(new Date().setDate(1)).getDay()
