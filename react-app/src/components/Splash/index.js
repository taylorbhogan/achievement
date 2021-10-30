import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import FormErrors from '../parts/FormErrors';
import styles from './Splash.module.css'


const Splash = () => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState([])



  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('taylorb.hogan@gmail.com', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.textDiv}>
          <div>Check in with your habits on the dashboard.</div>
        </div>
        <div className={styles.imgDiv}>
          <img className={styles.image1} src="https://i.imgur.com/zYHK0Ak.png" title="source: imgur.com" alt='achievement homescreen' />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.imgDiv}>
          <img className={styles.image2} src="https://i.imgur.com/nON0KQU.png" title="source: imgur.com" alt='adding a new habit' />
        </div>
        <div className={styles.textDiv}>
          <div>Create new habits.</div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.textDiv}>
          <div>Reflect upon your achievements to date.</div>
        </div>
        <div className={styles.imgDiv}>
          <img className={styles.image1} src="https://i.imgur.com/7iOIJ7d.png " title="source: imgur.com" alt='achievement homescreen' />
        </div>
      </div>
      <div className={styles.lastRow}>
        <div className={styles.signUp}>
          <div className={styles.try}>Would you like to check it out?</div>
          <div>
            <span><Link className={styles.link} to='/signup'>Sign up here</Link></span>
            <span> or </span>
            <button
              onClick={demoLogin}
              className={styles.demoButton}
            > try it out </button>
            <span> as a demo user.</span>
          </div>
          <FormErrors errors={errors}/>
        </div>
      </div>
    </div>
  )
}

export default Splash
