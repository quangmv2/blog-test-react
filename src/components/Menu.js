import React, { memo, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './menu.module.css';


const navigation = [
  {
    to: "/admin/blog",
    title: "List Blog",
    active: false
  },
  {
    to: "/admin/blog/add",
    title: "Add Blog",
    active: false
  },
  {
    to: "/admin/blog/edit",
    title: "Edit Blog",
    active: false
  },
  
]

const Menu = () => {

  const [navigas, setNavigate] = useState(navigation);
  const location = useLocation();


  useEffect(() => {
    setupRouter();
  }, []);

  const setupRouter = () => {
    const pathName = location.pathname;
    setNavigate(navigas.map(route => route.to===pathName?{...route, active:true}:{...route, active:false}))
  }

  return (
    <div className={styles.menu}>
      <ul id='menu' className={styles["menu-item"]}>
        {
          navigas.map(navigate => navigate? <li className={navigate.active?styles.active:''} key={`path: ${navigate.to}`} onClick={setupRouter}>
                                              <Link to={navigate.to}>{navigate.title}</Link>
                                            </li>:'' )
        }
        {/* <li><button data-test='logout__btn' onClick={()=> {localStorage.removeItem("token"); history.push('/login')}}>Logout</button></li> */}
      </ul>
    </div>
  )
}
export default memo(Menu);