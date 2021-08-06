import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import InputField from '../InputField';
import ActionButton from '../ActionButton';
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('taylorb.hogan@gmail.com', 'password'));
    if (data) {
      setErrors(data);
    }
  };


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.container}>
      <form
        onSubmit={onLogin}
        className={styles.form}
        >
        <div>Welcome back.</div>
        {errors.length > 0 && <div>Please try again. We didn't find an account with that info.</div>}
        <div className={styles.input}>
          <InputField
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <InputField
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttonDiv}>
          <ActionButton buttonText={'Login'}/>
        </div>
        <div className={styles.linkContainer}>
          <div>
            <span>Or </span>
            <span><Link to='/signup'>sign up</Link></span>
            <span> if you're new.</span>
          </div>
          <div className={styles.lastLine}>
            <span>Or </span>
            <button
              onClick={demoLogin}
              className={styles.demoButton}>try Achievement as a demo user.</button></div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
