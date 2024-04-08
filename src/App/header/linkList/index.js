import Link from "../link"
import style from '../../../style.module.css'
import { useState, useEffect } from "react"
import OilLogo from '../../../images/OilLogo.svg'



export default function LinkList(){

    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //   window.addEventListener('resize', function(){
    //     setWindowWidth(window.innerWidth);
    //   });
    // }, []);

    window.addEventListener('resize', function(){
        setWindowWidth(window.innerWidth)
    })
    
    return (
      <>
        <ul>
          <div className={style.LogoDiv}>
            <img className={style.OilLogo} src={OilLogo} alt="Oil Logo" />
            <Link href="#">AsOil</Link>
          </div>
  
          {windowWidth > 400 ? (
            <div className={style.navigator}>
              <Link href="#">Home</Link>
              <Link href="#">Store</Link>
              <Link href="#">Contact Us</Link>
            </div>
          ) : (
            <span>Hamburger</span>
          )}
        </ul>
      </>
    );
    
}