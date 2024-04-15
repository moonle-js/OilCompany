import Link from "../link"
import style from '../../../style.module.css'
import { useState, useEffect } from "react"
import OilLogo from '../../../images/OilLogo.svg'
import DropdownList from "./dropdownList"



export default function LinkList(){
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function(){
        setWindowWidth(window.innerWidth)
    })
    

    // Dropdown menu

    const [dropdownState, setDropdownState] = useState(false);

    function toggleVisible(){
      setDropdownState(!dropdownState)
    }

    return (
      <>
        <ul>
          <div className={style.LogoDiv}>
            <img className={style.OilLogo} src={OilLogo} alt="Oil Logo" />
            <Link href="#">AsOil</Link>
          </div>
  
          {windowWidth > 450 ? (
            <div className={style.navigator}>
              <Link href="#">Home</Link>
              <Link href="#">Store</Link>
              <Link href="#">Contact Us</Link>
            </div>
          ) : (
            <>
              <div onClick={toggleVisible} className={style.hamburgerText}>{dropdownState ? <DropdownList/> : "Menu"}</div>
              
            </>
            
          )}
        </ul>
      </>
    );
    
}