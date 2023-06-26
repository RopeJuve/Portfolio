import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Social.module.css'
import { faLinkedin , faGithub, faWhatsappSquare, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  return (
    <div className={styles.social}>
            <FontAwesomeIcon icon={faGithub} className={styles.socialIcons} />
            <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className={styles.socialIcons}
            />
            <FontAwesomeIcon
              icon={faTelegramPlane}
              className={styles.socialIcons}
            />
          </div>
  )
}

export default Social