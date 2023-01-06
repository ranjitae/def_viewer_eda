import React, { useState } from "react";
import Popup from "./Popup";

const CellDraw = ({ cellsData, getDataFromCell, getDataForPopup }) => {

  const [style, setStyle] = useState(null)

  const sendDataToHeader = (id) => {
    setStyle(id)
    console.log(id)
  
    const product = cellsData.find((p) => p.Comp_id == id);
    // console.log(product);
    getDataFromCell(product);
  };

  const sendPopupData = (popupTrue) => {
    // console.log(popupTrue);
    getDataForPopup(popupTrue);
  };

  const hover = {
    position: "absolute",
    border: "45px solid yellow",
  }


  return (
    <>
      {cellsData.map((item, index) => {
        return (
          <div
            onClick={() => {
              sendDataToHeader(item.Comp_id);
            }}
            // id={style === item.Comp_id ? hover : null}
            
            onDoubleClick={() => sendPopupData(true)}
            key={index}
            style={{
              position: "absolute",
              bottom: `${item.y}mm`,
              left: `${item.x}mm`,
              width: `${item.x1}mm`,
              height: `${item.y1}mm`,
              border: style === item.Comp_id ? "65px solid yellow" :"25px solid red",
              background: "transparent"
            }}
          >
            <h2
              style={{ textAlign: "center", fontSize: "25rem", color: "white" }}
            >
              {item.instance_name}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default CellDraw;
