import { useState } from "react"

import axios from "axios"

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false)

  const activateFiles = (fileItems) => {
    console.log(fileItems)
    const defActivate = async () => {
      await axios.get(`http://127.0.0.1:8000/${fileItems}`);
      console.log();
    };
    defActivate()
  }


  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </span>
          <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
        </div>
      </div>
    )
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </a>
    )
  }
}