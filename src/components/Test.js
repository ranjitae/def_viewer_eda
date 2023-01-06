import React, { useState, useEffect, useMemo } from 'react';
import dot from '../css/Dot.module.css';
import path from '../data/merge_out1.json';

const Test = () => {
    const [paths, setPaths] = useState([])
    const [position, setPosition] = useState([])
    const [instanceName, setInstanceName] = useState([])
    const a = ['reg3', 'G1', 'G2', 'reg5']

    const val = useMemo(() => {
        a.map(item => {
            const product = path.components.find((p) => p.instance_name === item)
            setInstanceName(instanceName => instanceName.concat(product))
        })
    }, [JSON.stringify(a)])


    // ********** Algorithm for triangle **********
    let count = 1

    useEffect(() => {
        for (let i = 0; i < instanceName.length; i++) {

            const first_left = instanceName[i].x1 / 2 + instanceName[i].x
            const first_bottom = instanceName[i].y1 / 2 + instanceName[i].y
            const sec_left = instanceName[count].x1 / 2 + instanceName[count].x
            const sec_bottom = instanceName[count].y1 / 2 + instanceName[count].y



            const x = Number(Math.hypot(Math.abs(first_left - sec_left), Math.abs(first_bottom - sec_bottom)).toFixed(2))


            const deg = Math.asin(Math.abs(first_bottom - sec_bottom) / x)

            if (first_bottom < sec_bottom) {
                const A = {
                    "X": first_left,
                    "Y": first_bottom,
                    "Width": x,
                    "Tranform": Number(-Math.abs(deg * 180 / 3.14).toFixed(2))
                }
                setPosition(position => position.concat(A))
            }
            else {

                const A = {
                    "X": first_left,
                    "Y": first_bottom,
                    "Width": x,
                    "Tranform": Number(Math.abs(deg * 180 / 3.14).toFixed(2))
                }
                setPosition(position => position.concat(A))
            }

            if (count < 3) {
                count++;
            }
            else {
                break;
            }

        }

        return () => {
            console.log("return run")
            setPosition(position => [])
        }

    }, [JSON.stringify(instanceName)])

    console.log(instanceName)
    // ********** Algorithm for triangle End Here **********


    return (
        <React.Fragment>

            {
                position.map((lineItems, index) => {
                    return (
                        <div key={index} style={{
                            position: "absolute", left: `${lineItems.X}mm`,
                            bottom: `${lineItems.Y}mm`, borderTop: "50mm solid white",
                            width: `${lineItems.Width}mm`,
                            transformOrigin: "bottom left",
                            transform: `rotateZ(${lineItems.Tranform}deg)`

                        }}></div>
                    )
                })
            }

            {
                instanceName.map((dataItem, index) => {
                    return <div key={index} className={dot.dataPoint} style={{ position: "absolute", bottom: `${(dataItem.y1 / 2 + dataItem.y)}mm`, left: `${(dataItem.x1 / 2 + dataItem.x - 40)}mm` }}></div>
                })
            }

        </React.Fragment>
    )
}

export default Test