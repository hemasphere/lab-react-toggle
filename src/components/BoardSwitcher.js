import React from "react";
import  {useState} from "react";
function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  let boards = [];
  const[selected, setSelected] = useState(0);
  const click = () => {
    setSelected((selected+1)%props.numBoards);
  };
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selected;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={click}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
