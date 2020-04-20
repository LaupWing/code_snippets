import React from 'react';
import styles from './AddModal.module.css';
import MyEditor from '../../../Editor/Editor';

function AddModal(){
    return (
        <form className={styles.AddModal}>
            <input name="title" type="text" placeholder="Title of code"></input>
            <input name="description" type="text" placeholder="Your Description"></input>
            <MyEditor/>
        </form> 
    );
}

export default AddModal;