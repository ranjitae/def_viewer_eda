import React, { useState } from 'react'
import draw from '../css/draw.module.css'
const Path = (props) => {
    const { getDataFromPath } = props
    const [pathActive, setPathActive] = useState(false)
    const path = ["Path_0", "Path_1", "Path_2", "Path_3"]

    const handlePath = (e) => {
        console.log(e.target.checked, e.target.value)
        const dict = {
            "Path" : e.target.value,
            "Path_check" :  e.target.checked
        }
        getDataFromPath(dict)
    }

    return (
        <React.Fragment>
            {
                path.map((item, index) => {
                    return <li key={index}><input onChange={e => handlePath(e)} name={"radio"} type={'radio'} value={item} /> {item}</li>
                })
            }
        </React.Fragment>
    )
}

export default Path
