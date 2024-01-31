import "../index.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Li from "./Li";
import { useState } from "react";

const Todofoam = () => {
  const [newtext, settext] = useState("");
  const [textarray, setarray] = useState([]);

  const textchange = (event) => {
    return settext(event.target.value);
  };

  const settodo = () => {
    if (newtext.trim() !== "") {
      setarray((prevalue) => [...prevalue, newtext]);
      settext("");
    }
  };

  const deleteitem = (id) => {
    setarray((prevalue) => {
      return prevalue.filter((value, index) => {
        return index != id;
      });
    });
  };
  return (
    <>
      <h1>To-Do List</h1>
      <div className="upper-part">
        <input
          type="text"
          placeholder="Add task"
          onChange={textchange}
          value={newtext}
        />
        <button type="submit" onClick={settodo}>
          <AddRoundedIcon className="addbtn" />
        </button>
      </div>
      <hr className="seprator" />

      <div className="lower-part">
        {textarray.map((value, index) => {
          return (
            <Li text={value} key={index} id={index} onSelect={deleteitem} />
          );
        })}
      </div>
    </>
  );
};

export default Todofoam;
