import React, {useRef} from 'react';
import styles from './AddModal.module.css';
import MyEditor from '../../../Editor/Editor';
import * as icons from '../../../../icons/icons';

function AddModal(){
    let content = null;
    const formEl = useRef(null);
    const availableIcons = Object.keys(icons.default); 

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
    const options = availableIcons.map(icon=>(
        <option>{icon}</option>
    ))

    return (
        <form ref={formEl} onSubmit={handleSubmit} className={styles.AddModal}>
            <div className={styles.skills}>
                <select>
                    <option value="" disabled selected>Select Skill</option>
                    {options}
                </select>
                <select>
                    <option value="" disabled selected>Select Section</option>
                </select>
                 or
                <input type="text" placeholder="New Section"></input>
            </div>
            <input name="title" type="text" placeholder="Title of code"></input>
            <input name="description" type="text" placeholder="Your Description"></input>
            <MyEditor setContent={setContent}/>
            <button>Submit</button>
        </form> 
    );
}

export default AddModal;