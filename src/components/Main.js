import React, { useState, useRef } from "react";
import main from "../css/main.module.css";

const Main = () => {
  const zooms = useRef(null);
  const [scales, setScale] = useState({
    scale: 1,
    panning: false,
    pointX: 0,
    pointY: 0,
    start: { x: 0, y: 0 },
  });

  function setTransform() {
    zooms.current.style.transform =
      "translate(" +
      scales.pointX +
      "px, " +
      scales.pointY +
      "px) scale(" +
      scales.scale +
      ")";
  }

  const increaseSize = (event) => {
    event.preventDefault();
    scales.start = {
      x: event.clientX - scales.pointX,
      y: event.clientY - scales.pointY,
    };
    scales.panning = true;
  };
  const decreaseSize = (event) => {
    scales.panning = false;
  };
  const mousemove = (event) => {
    event.preventDefault();
    if (!scales.panning) {
      return;
    }
    scales.pointX = event.clientX - scales.start.x;
    scales.pointY = event.clientY - scales.start.y;
    setTransform();
  };

  const handleOnWheel = function (event) {
    event.preventDefault();
    var xs = (event.clientX - scales.pointX) / scales.scale,
      ys = (event.clientY - scales.pointY) / scales.scale,
      delta = event.wheelDelta ? event.wheelDelta : -event.deltaY;
    delta > 0 ? (scales.scale *= 1.2) : (scales.scale /= 1.2);
    scales.pointX = event.clientX - xs * scales.scale;
    scales.pointY = event.clientY - ys * scales.scale;
    setTransform();
  };

  return (
    <div className={main.box}>
      <div
        id={main.diarea}
        ref={zooms}
        onMouseDown={increaseSize}
        onMouseUp={decreaseSize}
        onMouseMove={mousemove}
        onWheel={handleOnWheel}
      >
        <div id={main.A1}>
          <h1>Mux1</h1>
        </div>
        <div id={main.A2}>
          <h1>Gate</h1>
        </div>
        <div id={main.A3}>
          <h1>CLK_B1</h1>
        </div>
        <div id={main.A4}>
          <h1>REG1</h1>
        </div>
        <div id={main.A5}>
          <h1>REG2</h1>
        </div>
        <div id={main.A6}>
          <h1>REG3</h1>
        </div>
        <div id={main.A7}>
          <h1>G1</h1>
        </div>
        <div id={main.A8}>
          <h1>G2</h1>
        </div>
        <div id={main.A9}>
          <h1>G3</h1>
        </div>
        <div id={main.A10}>
          <h1>G4</h1>
        </div>
        <div id={main.A11}>
          <h1>G5</h1>
        </div>
        <div id={main.A12}>
          <h1>G7</h1>
        </div>
        <div id={main.A13}>
          <h1>G6</h1>
        </div>
        <div id={main.A14}>
          <h1>REG4</h1>
        </div>
        <div id={main.A15}>
          <h1>REG5</h1>
        </div>
        <div id={main.A16}>
          <h1>B1</h1>
        </div>
        <div id={main.A17}>
          <h1>B2</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
