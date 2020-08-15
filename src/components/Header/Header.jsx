import React from 'react'
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (

      <header className={s.header}>
         <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"></img>

         <div className={s.loginBlock}>
            {props.isAuth
               ? <div>
                  <div>
                     {props.login}
                  </div>
                  <button onClick={props.logout}>logout</button>
               </div>
               : <NavLink to={'/login'}>Login</NavLink>}
         </div>
      </header>
   )
}

export default Header   