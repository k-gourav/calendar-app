import React, { useState } from 'react';
import NotePopup from './NotePopup';
import '../App.css';

const Dates = ({ currentMonth, currentYear }) => {
  const [notes, setNotes] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const coloredDay = new Date();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysArray = [
    ...Array.from({ length: firstDayOfMonth }, () => ""),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleSaveNote = (date, noteText) => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [date]: noteText
    }));
    setSelectedDate(null);
  };

  const handleClosePopup = () => {
    setSelectedDate(null);
  };

  const renderDateContent = (day) => {
    const isToday = currentMonth === coloredDay.getMonth() &&
      currentYear === coloredDay.getFullYear() &&
      day === coloredDay.getDate();
  
    const className = `date-content ${isToday ? 'today-color-day' : ''} ${day === 1 ? 'first-content' : ''}`;
  
    return (
      <div
        key={day}
        className={className}
        onClick={() => handleDateClick(day)}
      >
        <span className="day-number">{day}</span>
        {notes[day] && (
          <ul className="note-preview">
            {notes[day].split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="date-container">
        {daysArray.map((day, index) =>
          day === "" ? (
            <div key={index} className="date-content empty"></div>
          ) : renderDateContent(day)
        )}
      </div>
      {selectedDate && (
        <div className="popup-overlay">
          <NotePopup 
            date={selectedDate}
            note={notes[selectedDate]}
            onSave={handleSaveNote}
            onClose={handleClosePopup}
          />
        </div>
      )}
    </>
  );
};

export default Dates;