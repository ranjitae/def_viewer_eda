import React, { useState, useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import draw from "../css/draw.module.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// **** importing chatbot****//
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import chatImg from "../images/r1.jpg";
import steps from "./Chatbot";

// ***** Reading Files *******
import cell from "../data/merge_out1.json";
import def from "../data/DEF.json";

// ******** Reading files ended ********
import DefDraw from "./DefDraw";
import CellDraw from "./CellDraw";
import Arrow from "./Arrow";
import Test from "./Test";
import Pins from "./Pins";
import Path from "./Path";
import Wires from "./Wires";
const Draw = ({ zooming, setOpen, setButtonPopup }) => {
  // ****chatbot start here****//
  const theme = {
    background: "#808080",
    headerBgColor: "#197B22",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
    // SpeechSynthesisVoice:'red',
  };

  const con = {
    botAvatar: chatImg, Wires,
    floating: true,
  };
  // ************** chatbot end here ***********//

  const [cells, setCells] = useState(cell.components);
  const [pins, setPins] = useState(def.pins);
  const [wire, setWire] = useState(def.wire);
  const [ports, setPorts] = useState(def.ports);

  const [dierea, setDierea] = useState({
    width: "",
    height: "",
    position: "",
    border: "",
    transformOrigin: "",
    transform: "",
    zoom: "",
    top: "",
    left: "",
  });

  useEffect(() => {
    setDierea({
      width: `${cell.diearea.x3}mm`,
      height: `${cell.diearea.y3}mm`,
      position: "relative",
      border: "30px solid violet",
      transformOrigin: "0px 0px",
      transform: "scale(0.5) translate(0px, 0px)",
      zoom: "0.05",
      left: "25%",
      top: "9%",
    });
  }, []);

  const box = {
    border: "2px solid black",
    width: "85vw",
    height: "100vh",
    background: "black",
  };

  // ******* show and Disable chart *******

  const [cellShape, setCellShape] = useState(true);
  const [pinShape, setPinShape] = useState(true);
  const [wireShape, setWireShape] = useState(true);
  const [portShape, setPortShape] = useState(true);
  const [pathValue, setPathValue] = useState({
    "Path": "Path_0",
    "Path_check": true
  })
  // /////////////////////////////////////////////////////////////
  // ****** Zoom in functionality *******
  const zoom = useRef();
  console.log(zooming);

  useEffect(() => {
    if (zooming.z == "zoomIn") {
      zoom?.current?.zoomIn();
    } else if (zooming.z == "zoomOut") {
      zoom?.current?.zoomOut();
    } else {
      zoom?.current?.resetTransform();
    }
  }, [zooming.count]);

  // ******* Ended **********

  // **** Get data from CellDraw and send to Header *******
  const getDataFromCell = (messages) => {
    setOpen(messages);
  };
  const getDataForPopup = (popUp) => {
    console.log("hi", popUp);
    setButtonPopup(popUp);
  };
  const getDataFromPath = (message) => {
    setPathValue(message)
  }
  // *************************************************
  return (
    <>
      <div className={draw.outerBox}>
        <div className={draw.box}>
          <TransformWrapper
            ref={zoom}
            centerZoomedOut
            defaultScale={0}
            defaultPositionX={0.2}
            defaultPositionY={0.2}
            doubleClick={{
              disabled: "false",
            }}
            initialScale={1}
            minScale={1}
            maxScale={50}
          >

            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <TransformComponent>
                <div
                  style={{ width: "85vw", height: "90vh", overflow: "hidden" }}
                >
                  <div style={dierea}>
                    {cellShape ? (
                      <CellDraw
                        cellsData={cells}
                        getDataFromCell={getDataFromCell}
                        getDataForPopup={getDataForPopup}
                      />
                    ) : (
                      ""
                    )}
                    {pinShape ? (
                      <DefDraw
                        data={pins}
                        cellsData={cells}
                        getDataFromCell={getDataFromCell}
                        getDataForPopup={getDataForPopup}
                      />
                    ) : (
                      ""
                    )}
                    {wireShape ? (
                      <Wires
                        data={wire}
                        // cellsData={cells}
                        getDataFromCell={getDataFromCell}
                        getDataForPopup={getDataForPopup}
                      />
                    ) : (
                      ""
                    )}
                    {/* {portShape ? (
                      <Pins
                        data={ports}
                        // cellsData={cells}
                        getDataFromCell={getDataFromCell}
                        getDataForPopup={getDataForPopup}
                      />
                    ) : (
                      ""
                    )} */}

                    <Test pathValue={pathValue} />


                  </div>
                </div>
              </TransformComponent>
            )}
          </TransformWrapper>
        </div>
        {/* ******** Chatbot ************** */}
        <div className="App">
          <ThemeProvider theme={theme}>
            <ChatBot
              // This appears as the header
              // text for the chat bot
              headerTitle="EDA CHAT"
              steps={steps}
              {...con}
            />
          </ThemeProvider>
        </div>
        {/* ******** Chatbot Ended Here ************** */}

        {/* ****** Sidebar Start Here ******** */}
        <div className={draw.sideBar}>
          <div className={draw.sideBarItems}>
            <ul>
              <li onClick={() => setCellShape(!cellShape)}>
                {" "}
                {cellShape ? (
                  <i>
                    <BsEyeFill />
                  </i>
                ) : (
                  <i>
                    <BsEyeSlashFill />
                  </i>
                )}{" "}
                Cell
              </li>
              <li onClick={() => setPinShape(!pinShape)}>
                {pinShape ? (
                  <i>
                    <BsEyeFill />
                  </i>
                ) : (
                  <i>
                    <BsEyeSlashFill />
                  </i>
                )}{" "}
                Ports
              </li>
              <li onClick={() => setWireShape(!wireShape)}>
                {wireShape ? (
                  <i>
                    <BsEyeFill />
                  </i>
                ) : (
                  <i>
                    <BsEyeSlashFill />
                  </i>
                )}{" "}
                Wires
              </li>
              <li onClick={() => setPortShape(!portShape)}>
                {portShape ? (
                  <i>
                    <BsEyeFill />
                  </i>
                ) : (
                  <i>
                    <BsEyeSlashFill />
                  </i>
                )}{" "}
                Pins
              </li>
            </ul>
          </div>
          <div className={draw.line}></div>
          <div>
            <input type={"search"} placeholder="Enter the Path" />
            <button>Apply</button>
          </div>
          <div className={draw.pathItems}>
            <ul>
              <Path getDataFromPath={getDataFromPath} />
            </ul>
          </div>
        </div>
        {/* ********** Sidebar Ended Here ********** */}
      </div>
    </>
  );
};

export default Draw;
