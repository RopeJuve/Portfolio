import styles from './NavBar.module.css'
import { Logo } from '../Logo/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
           <Logo className={styles.logo} />
            <FontAwesomeIcon icon={faBars} style={{width: '25px',height: '25px', color: '#264653'}}/>
        </div>
    </div>
  )
}

export default NavBar