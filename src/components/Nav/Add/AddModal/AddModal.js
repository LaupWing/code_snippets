import React, {useState,useCallback} from 'react';
import styles from './AddModal.module.css';
import MyEditor from '../../../Editor/Editor';

function AddModal(){
    let content = null
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(content);
    }
    const setContent = (text)=>{
        content = text
    }

    return (
        <form onSubmit={handleSubmit} className={styles.AddModal}>
            <input name="title" type="text" placeholder="Title of code"></input>
            <input name="description" type="text" placeholder="Your Description"></input>
            <MyEditor setContent={setContent}/>
            <button>Submit</button>
        </form> 
    );
}

export default AddModal;