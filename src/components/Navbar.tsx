import { useContext } from "react"
import { NavLink, Link} from 'react-router-dom'
import { ThemeContext } from "../contexts/ThemeContext"
import styles from "../css/navbar.module.css"

export default function Navbar() {
    const {themeName, toggleTheme} = useContext(ThemeContext)

  return (
    <>
        <div className={styles.navbar}>
            <div className={styles["left-bar"]}>
                <span className={styles.logo}>
                    <Link className={styles.home} to="/">Toggle Theme</Link>
                </span>
            </div>

            <div className={styles["menu-items"]}>
                <span className={styles["menu-item"]}><NavLink to="/new"> New Note</NavLink></span>
                <span className={styles["menu-item"]}><NavLink to="/edit">Edit</NavLink></span>
            </div>

            <div className={styles["right-bar"]}>     
                <button onClick={toggleTheme} id={styles["toggle-theme"]} className={`material-symbols-outlined ${styles[themeName == "dark" ? "dark" : "light"]}`}>
                {themeName == "light" ? "dark_mode" : "sunny"}
                </button>
            </div>
        </div>
    </>
  )
}
