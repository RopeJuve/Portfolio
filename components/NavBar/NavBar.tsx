import styles from './NavBar.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Image src='./vercel.svg' width={50} height={50} alt='logo'/>
            <FontAwesomeIcon icon={faBars} style={{width: '25px',height: '25px', color: '#264653'}}/>
        </div>
    </div>
  )
}

export default NavBar