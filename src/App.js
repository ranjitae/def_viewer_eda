
import Header from "./components/Header";

import React, {useState} from "react";
import Draw from "./components/Draw";
import Popup from "./components/Popup";
function App() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [open, setOpen] =  useState(true)
  const [zooming, setZooming] = useState("")

  return (
    <div className="main">
      <Header dataCell={open} setZooming={setZooming} setOpen = {setOpen} />


      <Draw zooming={zooming} setOpen = {setOpen} setButtonPopup ={setButtonPopup} />
      <Popup trigger={buttonPopup} setTrigger ={setButtonPopup} open={open} />
      </div>

  );
}

export default App;
