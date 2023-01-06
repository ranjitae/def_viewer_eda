import React from 'react'
// import { Line } from 'react-native-svg';
import dot from '../css/Dot.module.css';

const Arrow = () => {
    return (

        <>

            <div className={dot.dataPoint} id={dot.one} style={{ position: "absolute", bottom: "1350mm", left: "2170mm" }}></div>
            <div className={dot.dataPoint} id={dot.two} style={{ position: "absolute", bottom: "5500mm", left: "2170mm" }}></div>
            <div className={dot.dataPoint} id={dot.three} style={{ position: "absolute", bottom: "5500mm", left: "3270mm" }}></div>
            <div className={dot.dataPoint} id={dot.four} style={{ position: "absolute", bottom: "5500mm", left: "4500mm" }}></div>{/* Please remove this dot afterwords*/}
            <div className={dot.dataPoint} style={{ position: "absolute", bottom: "4700mm", left: "4500mm" }}></div>
            <div className={dot.dataPoint} id={dot.five} style={{ position: "absolute", bottom: "2250mm", left: "4500mm" }}></div>

            {/*Path 2 : reg1/CP (SDFQOPPSBSGD1BWP30P140HVT)              0.00      0.00 r
  reg1/Q (SDFQOPPSBSGD1BWP30P140HVT)               0.25      0.25 f
  G1/Z (XOR2SGD0BWP30P140)                         0.05      0.30 f
  G2/Z (XOR2SGD0BWP30P140)                         0.05      0.35 r
    reg5/D (SDFQOPPSBSGD1BWP30P140HVT)*/}
            {/* <div className={dot.dataPoint} id={dot.six} style={{ position: "absolute", bottom: "3000mm", left: "3500mm" }}></div>
            <div className={dot.dataPoint} id={dot.two} style={{ position: "absolute", bottom: "5500mm", left: "2170mm" }}></div>
            <div className={dot.dataPoint} id={dot.three} style={{ position: "absolute", bottom: "5500mm", left: "3270mm" }}></div>
            <div className={dot.dataPoint} id={dot.four} style={{ position: "absolute", bottom: "5500mm", left: "4500mm" }}></div>
            <div className={dot.dataPoint} style={{ position: "absolute", bottom: "4700mm", left: "4500mm" }}></div>
            <div className={dot.dataPoint} id={dot.five} style={{ position: "absolute", bottom: "2250mm", left: "4500mm" }}></div> */}

        </>

    )
}

export default Arrow
