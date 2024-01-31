import "../index.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useState } from "react";

const Li = (props) => {
const[lineset,newlineset]=useState(false)
 const line=()=>{
 if (lineset==false) {
    return newlineset(true)
 }
 else{
    return newlineset(false)
 }
 }


  return (
    <li style={{textDecoration: lineset? 'line-through':'none'}}>
      <div className="input">{props.text}</div>
      <div className="lower-part-btn">
        <button className="tick" onClick={line}>
          <CheckCircleOutlineRoundedIcon />
        </button>
        <button className="cross" onClick={()=>{
            props.onSelect(props.id)
        }}>
          <CancelRoundedIcon />
        </button>
      </div>
    </li>
  );
};

export default Li;
