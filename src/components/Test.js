import React, { useState, useEffect, useMemo } from 'react';
import dot from '../css/Dot.module.css';
import path from '../data/merge_out1.json';

const Test = (props) => {
    const [paths, setPaths] = useState([])
    const [position, setPosition] = useState([])
    const [instanceName, setInstanceName] = useState([])
    const a = ['reg2', 'G1', 'G2', 'reg5']
    const b = [['reg1', 'G1', 'G2', 'reg5'],
    ['reg2', 'G1', 'G2', 'reg5'],
    ['reg3', 'G1', 'G2', 'reg5'],
    ['reg1', "G2", "CLK_B1", "G5", "B1", "reg3"]]


    let dict = {}
    const Array1 = []
    const val = useMemo(() => {
        b.map((item, index) => {
            const data = []
            item.map(val => {
                const product = path.components.find((p) => p.instance_name === val)
                data.push(product)
            })

            dict[`Path_${index}`] = data
            setInstanceName(({ ...dict }))
        })
    }, [JSON.stringify(a)])


    // ********** Algorithm for triangle **********
    let count = 1
    // let PathChange = props.pathValue.Path
    let PathChange = "Path_3"


    useEffect(() => {

        // setPaths(paths => paths.concat(props.pathValue))
        // console.log(paths[0].Path)
        // Array1.push(paths.)

        for (let i = 0; i < instanceName[`${PathChange}`].length; i++) {
            const first_left = instanceName[PathChange][i].x1 / 2 + instanceName[PathChange][i].x
            const first_bottom = instanceName[PathChange][i].y1 / 2 + instanceName[PathChange][i].y
            const sec_left = instanceName[PathChange][count].x1 / 2 + instanceName[PathChange][count].x
            const sec_bottom = instanceName[PathChange][count].y1 / 2 + instanceName[PathChange][count].y

            // console.log(first_left, first_bottom, sec_bottom, sec_left)
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

            if (count < instanceName[`${PathChange}`].length - 1) {
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


    }, [PathChange])



    console.log(position)
    const l = [
        { X: 1750, Y: 4950, Width: 2730, Tranform: 0 },
        { X: 4480, Y: 4950, Width: 2874.53, Tranform: 198.26 },
        { X: 1750, Y: 5850, Width: 3953.8, Tranform: 13.16 },
        { X: 5600, Y: 4950, Width: 4500.54, Tranform: 89.16 },
        { X: 5670, Y: 450, Width: 4186.69, Tranform: -153.48 }
    ]
    // ********** Algorithm for triangle End Here **********

    return (
        <React.Fragment>

            {
                l.map((lineItems, index) => {
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

            {/* {
                instanceName.map((dataItem, index) => {
                    return <div key={index} className={dot.dataPoint} style={{ position: "absolute", bottom: `${(dataItem.y1 / 2 + dataItem.y)}mm`, left: `${(dataItem.x1 / 2 + dataItem.x - 40)}mm` }}></div>
                })
            } */}

        </React.Fragment>
    )
}

export default Test
