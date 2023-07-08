import React, { useState,useEffect } from "react";
import "./Box.css";
function Box() {
    const [initColor, setInitColor] = useState({
        red: "red",
        gold: "gold",
        aqua: "aqua",
        purple: "purple",
    });
    const [numberCheck ,setNumberCheck] = useState(0);
    
    const handleToggle = (color) => {
         if(numberCheck % 2 == 0) {
            setInitColor ({
                red: color,
                gold: color,
                aqua: color,
                purple: color,
            })
         }else {
            setInitColor({
                red: "red",
                gold: "gold",
                aqua: "aqua",
                purple: "purple",
            })
         }
        setNumberCheck(preState => preState + 1)

    };
  return (
    <div>
      <div className="row">
        <div className="box" style={{ backgroundColor: initColor.red }} onClick={() => handleToggle("red")}>
          RED
        </div>
        <div className="box" style={{ backgroundColor: initColor.gold } } onClick={() => handleToggle("gold")}>
          GOLD
        </div>
      </div>
      <div className="row">
        <div className="box" style={{ backgroundColor: initColor.aqua }} onClick={() => handleToggle("aqua")} >
          AQUA
        </div>
        <div className="box" style={{ backgroundColor: initColor.purple }} onClick={() => handleToggle("purple")}>
          PURPLE
        </div>
      </div>
    </div>
  );
}
export default Box;
