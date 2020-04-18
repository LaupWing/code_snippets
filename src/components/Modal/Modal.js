import React from 'react';
import Backdrop from '../../hoc/Backdrop/Backdrop';
import styles from './Modal.module.css'

export default (props)=>{
    const handleClick = e =>{
        e.stopPropagation();
        
    }
    return (
        <Backdrop close={props.close}>
            <div onClick={handleClick} className={styles.Modal}>
                Backdrop
            </div>
        </Backdrop>)
}