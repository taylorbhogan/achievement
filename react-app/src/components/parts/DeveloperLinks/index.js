import { useState } from 'react'
import { FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa";
import styles from './DeveloperLinks.module.css'

const DeveloperLinks = () => {
  const [openForBusiness, setOpenForBusiness] = useState(false)

  return (
    <div
      onMouseEnter={() => setOpenForBusiness(true)}
      className={styles.container}>
      {openForBusiness ? (
        <div className={styles.openContainer}>
          <div>Developer Links</div>
          <div>
            <a href='https://github.com/taylorbhogan'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/taylorbhogan/'>
              <FaLinkedin />
            </a>
            <a href='https://angel.co/u/taylorbhogan'>
              <FaAngellist />
            </a>
          </div>
        </div>
      ) : (
          <div>Developer Links</div>
      )}
    </div>
  )
}
export default DeveloperLinks
