import styles from './PageNotFound.module.css'

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>It looks like I haven't built a page at this location.</div>
        <div>I'd consider building it if you shoot me a note...links are down and to the right.</div>
      </div>
    </div>
  )
}

export default PageNotFound
