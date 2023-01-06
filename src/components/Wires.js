import React, { useState } from "react";
import wires from "../data/wires.json";


const Wires = () => {

  const [wire, setWire] = useState(wires.nets[0].route);



  return (
    <>
          <React.Fragment>

            {wire.map((item, index) => {
              return(
                <div key={index}
                    style={{
                      position: "absolute",
                      left: `${item.line[0].x0}mm`,
                      bottom: `${item.line[0].y0}mm`,
                      width: `calc(${item.line[0].x1}mm - ${item.line[0].x0}mm)`,
                      height: `calc(${item.line[0].y1}mm - ${item.line[0].y0}mm)`,
                      border: item.layer === "M1" ? "20mm solid aqua" 
                      : item.layer ==="M2" ? "20mm solid green"
                      : item.layer ==="M3" ? "20mm solid orange"
                      : item.layer ==="M4" ? "20mm solid white" 
                      : null
                    }}
                  ></div>
              )
              
            })}
          </React.Fragment>
    </>
  );

};

export default Wires;
