import React, { useState, useEffect } from "react";
import nav from "../css/header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineFullscreen,
  AiOutlineExclamationCircle,
  AiOutlineClose,
  AiOutlineZoomOut,
  AiOutlineZoomIn,
  AiOutlineReload,
} from "react-icons/ai";
import { FaFileExport } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import p2fLogo from "../images/p2f_Logo.png";

const Header = ({ setZooming, dataCell }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  const [count, setCount] = useState(0);
  const [drop,setDrop] =useState('');

  useEffect(()=>{
    const cellData = Object.keys(dataCell)
    if (cellData.includes("ref_name")){
      setDrop(dataCell.ref_name)  
    }
    else if(cellData.includes("net_name")){
      setDrop(dataCell.net_name)
    }
  },[dataCell])

  const sendToTranform = (zoomValue) => {
    // console.log(zoomValue)
    setZooming({ z: zoomValue, count: count });
  };
  return (
    <div>
      <header>
        <img className={nav.logo} src={p2fLogo} alt="log" />
        <nav>
          <ul className={nav.nav__link}>
            <li>
            </li>
            <li>
              <a href="#">
                <AiOutlineZoomIn
                  onClick={() => sendToTranform("zoomIn", setCount(count + 1))}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineZoomOut
                  onClick={() => sendToTranform("zoomOut", setCount(count - 1))}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineFullscreen
                  onClick={() => sendToTranform("resetTransform", setCount(count + 1))}
                />
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className={nav.text}>
            <li>
              <a href="#">cell-&nbsp;{drop}</a>
            </li>
          </ul>
        </nav>

        <nav className={nav.dropdown}>
          <ul
            className={
              showMediaIcons ? `${nav.social_media_desktop}` : `${nav.menubar}`
            }
          >
            <li>
              <a href="#" target="_thapa">
                <FaFileExport className={nav.search} />
                &nbsp;EXPORT IMAGES
              </a>
            </li>
            <li>
              <a href="#" target="_thapa">
                <AiOutlineExclamationCircle className={nav.bell} />
                &nbsp;DESIGN STATS
              </a>
            </li>
            <li>
              <a href="#" target="_thapa">
                <FiSettings className={nav.user} />
              </a>
            </li>
            <li>
              <a href="#" target="_thapa">
                <AiOutlineClose className={nav.user} />
              </a>
            </li>
          </ul>
          {/* hamburget menu start  */}
          <div className={nav.hamburger_menu}>
            <a
              style={{ color: "white" }}
              href="#"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
