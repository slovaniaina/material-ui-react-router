import React from "react";

function List(props) {
  return (
    <ul>
      <li onClick={()=>props.handleChange(props.index)}>{props.question}</li>
      {props.currentIndex === props.index && <li>{props.answer}</li>}
    </ul>
  );
}

export default List;