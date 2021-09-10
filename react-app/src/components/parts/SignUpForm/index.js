import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import InputField from '../InputField';
import FormErrors from '../FormErrors';
import ActionButton from '../ActionButton';

import styles from './SignUpForm.module.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [openConfirmPasswordInput, setOpenConfirmPasswordInput] = useState(false);

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword === ''){
      setErrors(['password_match: Enter a password.'])
    } else if (password === repeatPassword) {
        const data = await dispatch(signUp(firstName, lastName, email, password));
        if (data) {
          setErrors(data)
        }
      } else {
        setErrors(['password_match: Make sure your passwords match.'])
      }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const openPasswordConfirm = () => {
    setOpenConfirmPasswordInput(true)
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={onSignUp}
      >
        <FormErrors errors={errors} />
        <div className={styles.input}>
          <InputField
            type='text'
            placeholder='first name'
            name='firstName'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className={styles.input}>
          <InputField
            type='text'
            placeholder='last name'
            name='lastName'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className={styles.input}>
          <InputField
            type='text'
            name='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.input}>
          <InputField
            type='password'
            name='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            setFunction={openPasswordConfirm}
            value={password}
            />
        </div>
        <div className={styles.input}>
        {openConfirmPasswordInput && <InputField
          type='password'
          name='repeat_password'
          placeholder='repeat password'
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          required={true}
        />}
        </div>
        <div className={styles.buttonDiv}>
          <ActionButton buttonText={'Sign Up'}/>
        </div>
        <div className={styles.linkContainer}>
          <div>Already have an account?</div>
          <div className={styles.lastLine}>
            <span><Link to='/login' exact={true} activeClassName='active' className={styles.link}>Log in</Link></span>
            <span> instead.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
