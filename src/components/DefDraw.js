import React, {useState} from "react";

const DefDraw = ({ data, getDataFromCell, getDataForPopup }) => {
  const [style, setStyle] = useState(null)
  const sendDataToHeader = (id) => {
    setStyle(id)
    const product = data.find((p) => p.id == id);
    console.log(product);
    getDataFromCell(product);
  };

  const sendPopupData = (popupTrue) => {
    console.log(popupTrue);
    getDataForPopup(popupTrue);
  };

  return (
    <>
      {data.map((defItems, index) => {
        return (
          <div
            onClick={() => {
              sendDataToHeader(defItems.id);
            }}
            onDoubleClick={() => sendPopupData(true)}
            key={index}
            style={{
              position: "absolute",
              bottom: `${defItems.y}mm`,
              left: `${defItems.x}mm`,
              width: style === defItems.id ? "50rem" :"30rem",
              height: style === defItems.id ? "50rem" :"30rem",
              border: "1px solid black",
              backgroundColor: "yellow",
              zIndex: "1000",
            }}
          >
            {defItems.pin_name}
          </div>
        );
      })}
    </>
  );
};

export default DefDraw;
