import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/session';
import {unloadHabits} from '../../../store/habit'
import styles from './LogoutButton.module.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    dispatch(unloadHabits())
    await dispatch(logout());
  };

  return <button className={styles.logout} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
