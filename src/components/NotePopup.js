import React, { useState } from "react";

const NotePopup = ({ date, note, onSave, onClose }) => {
  const [noteItems, setNoteItems] = useState(
    note ? note.split("\n").filter((item) => item.trim() !== "") : [""]
  );

  const handleItemChange = (index, value) => {
    const newItems = [...noteItems];
    newItems[index] = value;
    setNoteItems(newItems);
  };

  const addItem = () => {
    setNoteItems([...noteItems, ""]);
  };

  const removeItem = (index) => {
    const newItems = noteItems.filter((_, i) => i !== index);
    setNoteItems(newItems);
  };

  const handleSave = () => {
    const noteText = noteItems.filter((item) => item.trim() !== "").join("\n");
    onSave(date, noteText);
  };

  return (
    <div className="note-popup">
      <h3>Plan your Day {date}</h3>
      <ul className="note-list">
        {noteItems.map((item, index) => (
          <li key={index} className="note-item">
            <input
              type="text"
              value={item}
              onChange={(e) => handleItemChange(index, e.target.value)}
              placeholder="Enter a note item..."
            />
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
      <div className="popup-actions">
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default NotePopup;
