import React, { memo } from 'react';
import { Link } from "react-router-dom";
import styles from './loading.module.css';
import PropTypes from "prop-types";

const Loading = (props) => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader} style={{width: props.width, height: props.height}}>
      </div>
    </div>
  )
}
export default memo(Loading);

Loading.defaultProps = {
  width: 40,
  height: 40
}