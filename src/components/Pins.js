import React, {useState} from 'react'
import pin from '../data/DummyPin.json'

const Pins = () => {

    const [data, setData] = useState(pin.components)
        data[0].pins.map(item =>{
            console.log(item)
        })
        // val.Route.map(val1 => {
        //     console.log(val1.x0)
        //     // console.log(val1.x1)
        //     // console.log(val1.y1 - val1.y0 )
        //     // console.log(val1.y1)
        // })


    return (
        <>

            {/* <React.Fragment>
                <div style={{
                    position: 'absolute', bottom: "3455.5mm",
                    left: "775.0mm",
                    width: "50.0mm", background: 'palegreen', height: "610.0mm"
                }}></div>

                
            </React.Fragment> */}
            {
                data[0].pins.map((val, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                val.Route.map((pinitems, val1) => {
                                    return (
                                        <div key={val1} style={{
                                            position: 'absolute', bottom: `${pinitems.y0}mm`,
                                            left: `${pinitems.x0}mm`,
                                            width: `${pinitems.x1}mm`, background: 'palegreen', height: `${pinitems.y1}mm`
                                        }}></div>
                                    )
                                })
                            }
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default Pins











// import React, { useState } from 're4500act'
// import pin from "../data/demo.json"



// const Pins = () => {



//     const [pinss, setPinss] = useState(pin.components);

//     return (
//         <>
//             {pinss.map((pinitems, index) => {

//                 return (
//                     <React.Fragment key={index}>
//                         {
//                             pinitems.pins.map((item, value) => {
//                                 if (it4500em.direction === 'INPUT') {
//                                     return (
//                                         <div key={value}
//                                             style={{
//                                                 position: 'absolute', bottom: `calc(${pinitems.y}mm + ${item.Route[1]}mm)`,
//                                                 left: `calc(${pinitems.x}mm + ${item.Route[0]}mm)`,
//                                                 width: '35mm', background: 'palegreen', height: '35mm'
//                                             }}>

//                                         </div>
//                                     )
//                                 }
//                                 if (item.direction === 'OUTPUT') {
//                                     return (
//                                         <div key={value}
//                                             style={{
//                                                 position: 'absolute', bottom: `calc(${pinitems.y1}mm - ${item.Route[1]}mm)`,
//                                                 left: `calc(${pinitems.x1}mm - ${item.Route[0]}mm)`,
//                                                 width: '35mm', background: 'palegreen', height: '35mm'
//                                             }}>
//                                         </div>)
//                                 }

//                             }

//                             )
//                         }
//                     </React.Fragment>
//                 )


//             })}



//         </>
//     )
// }





// export default Pins
