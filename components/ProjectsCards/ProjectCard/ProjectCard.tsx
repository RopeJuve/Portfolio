import Image from 'next/image'
import styles from './ProjectCard.module.css'
import laptop from '@/public/images/Laptop.png'

const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <Image src={laptop} alt='laptop' />
    </div>
  )
}

export default ProjectCard