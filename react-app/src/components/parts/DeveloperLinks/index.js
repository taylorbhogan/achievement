import { useState } from 'react'
import { FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa";
import styles from './DeveloperLinks.module.css'

const DeveloperLinks = () => {
  const [openForBusiness, setOpenForBusiness] = useState(false)

  const style = {
    // backgroundColor: 'white'
    color: 'white',
    fontSize: '24px',
  }

  return (
    <div
      onMouseEnter={() => setOpenForBusiness(true)}
      className={styles.container}>
      {openForBusiness ? (
        <div className={styles.openContainer}>
          <div className={styles.header}>Developer Links</div>
          <div className={styles.linkContainer}>
            <a href='https://github.com/taylorbhogan'>
              <FaGithub style={style}/>
            </a>
            <a href='https://www.linkedin.com/in/taylorbhogan/'>
              <FaLinkedin style={style}/>
            </a>
            <a href='https://angel.co/u/taylorbhogan'>
              <FaAngellist style={style}/>
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
