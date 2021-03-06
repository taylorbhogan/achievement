import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { login } from '../../store/session'
import styles from './NavPublic.module.css'

const NavPublic = () => {
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('taylorb.hogan@gmail.com', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <NavLink to='/login' exact={true} activeClassName='active' className={styles.link}>
          Login
        </NavLink>
      </button>
      <button className={styles.button}>
        <NavLink to='/signup' exact={true} activeClassName='active' className={styles.link}>
          Sign Up
        </NavLink>
      </button>
      <button className={styles.button} onClick={demoLogin}>
        Try it out
      </button>
      {errors.length > 0 && <span>please try again</span>}
    </div>
  )
}

export default NavPublic
