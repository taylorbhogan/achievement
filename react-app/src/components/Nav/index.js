
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavPublic from '../parts/NavPublic';

import DropdownOpenButton from './DropdownOpenButton';
import styles from './Nav.module.css'

const Nav = () => {
  const user = useSelector(state => state.session.user)


  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <NavLink to='/reflect' exact={true} activeClassName='active'>
          <div className={styles.reflect}>reflect</div>
        </NavLink>
        <NavLink to='/' exact={true} activeClassName='active'>
          <div className={styles.logo}>Achievement.</div>
        </NavLink>
        <div>
          {!user ? <NavPublic /> :
            <div>
              <DropdownOpenButton />
            </div>}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
