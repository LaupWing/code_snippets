import React, {useRef} from 'react';
import styles from './AddModal.module.css';
import MyEditor from '../../../Editor/Editor';

function AddModal(){
    let content = null;
    const formEl = useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = formEl.current
        const {title} = form; 
        const {description} = form; 
        console.log(title.value, description.value, content);
    }
    const setContent = (text)=>{
        content = text
    }

    return (
        <form ref={formEl} onSubmit={handleSubmit} className={styles.AddModal}>
            <input name="title" type="text" placeholder="Title of code"></input>
            <input name="description" type="text" placeholder="Your Description"></input>
            <MyEditor setContent={setContent}/>
            <button>Submit</button>
        </form> 
    );
}

export default AddModal;