import React, { useState } from 'react'
import draw from '../css/draw.module.css'
const Path = () => {
    const [pathActive, setPathActive] = useState(false)
    const path = ["Path_1", "Path_2", "Path_3"]

    const handlePath = (e) => {
        console.log(e.target.checked, e.target.value)
    }
    return (
        <React.Fragment>
            {
                path.map((item, index) => {
                    return <li key={index}><input onChange={e => handlePath(e)} type={'checkbox'} value={item} /> {item}</li>
                })
            }
        </React.Fragment>
    )
}

export default Path
