import Link from "../../link";
import style from "../../../../style.module.css"


export default function DropdownList(){
    return(
        <>
            <div className={style.dropdownMenu}>
              <Link href="#">Home</Link>
              <Link href="#">Store</Link>
              <Link href="#">Contact Us</Link>
            </div>
        </>
    )
}