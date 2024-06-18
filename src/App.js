import { useState } from "react";
import Header from './components/Header';
import Body from './components/Body'

function App() {
  const todayDate = new Date()
  const [currentMonth, setCurrentMonth] = useState(todayDate.getMonth())
  const [currentYear, setCurrentYear] = useState(todayDate.getFullYear())
  const previousMonthNavigate = () => {
    if (currentMonth){
      setCurrentMonth(currentMonth - 1)
  }
  else{
    setCurrentMonth(11)
    setCurrentYear(currentYear-1)
  }
}
const nextMonthNavigate = () => {
  if (currentMonth === 11){
    setCurrentMonth(0)
    setCurrentYear(currentYear + 1)
}
else{
  setCurrentMonth(currentMonth + 1)
}
}
const todayDay = () => {
  setCurrentMonth(todayDate.getMonth())
  setCurrentYear(todayDate.getFullYear())
}
  return (
    <>
    <Header currentMonth={currentMonth} currentYear={currentYear} previousMonthNavigate={previousMonthNavigate} nextMonthNavigate={nextMonthNavigate} todayDay={todayDay} />
    <Body currentMonth={currentMonth} currentYear={currentYear} />
    </>
  )


}

export default App;
