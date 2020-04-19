import React from 'react';
import Backdrop from '../../hoc/Backdrop/Backdrop';
import styles from './Modal.module.css';

export default (props)=>(
    <Backdrop close={props.close}>
        <div onClick={e=>e.stopPropagation()} className={styles.Modal}>
            {props.children}
        </div>
    </Backdrop>
);