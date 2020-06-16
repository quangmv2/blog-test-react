import React, { memo } from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul id='menu' className={styles["menu-item"]}>
        <li><Link to="/admin/blog">List Blog</Link></li>
        <li><Link to="/admin/blog/add">Add Blog</Link></li>
        <li><Link to="/admin/blog/edit">Edit Blog</Link></li>
        <li><Link to="/functions/foo">/functions/foo</Link></li>
        {/* <li><button data-test='logout__btn' onClick={()=> {localStorage.removeItem("token"); history.push('/login')}}>Logout</button></li> */}
      </ul>
    </div>
  )
}
export default memo(Menu);