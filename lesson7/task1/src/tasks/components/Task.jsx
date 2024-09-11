import React from 'react';

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={`list-item ${done ? 'list-item_done' : 'list-item__text'} `}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => onChange(id)}
      />
      {text}
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default Task;
