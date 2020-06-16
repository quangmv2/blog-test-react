import React, { memo } from 'react';
import { Link } from "react-router-dom";
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}>
      </div>
    </div>
  )
}
export default memo(Loading);