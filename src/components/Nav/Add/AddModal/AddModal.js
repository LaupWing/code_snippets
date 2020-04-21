import React, {useRef, useState, useContext, useEffect} from 'react';
import styles from './AddModal.module.css';
import MyEditor from '../../../Editor/Editor';
import * as icons from '../../../../icons/icons';
import UserContext from '../../../../context/UserContext';

function AddModal(){
    let content = null;
    const [sections, setSections] = useState(null);
    const [skill, setSkill] = useState(null);
    const formEl = useRef(null);
    const availableIcons = Object.keys(icons.default); 
    const user = useContext(UserContext);

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
    const optionsSkills = availableIcons.map(icon=>(
        <option value={icon}>{icon}</option>
    ))

    const optionsSections = sections && sections.map(section=>(
        <option>{section}</option>
    ))
    
    const setSkillAndSection = (event)=>{
        setSkill(event.target.value);
    }

    useEffect(()=>{
        const filtering = user.data
            .filter(s=>s.skill === skill)
            .map(s=>s.section);
        setSections(filtering);
    },[skill, user.data]);

    return (
        <form ref={formEl} onSubmit={handleSubmit} className={styles.AddModal}>
            <div className={styles.skills}>
                <select onChange={setSkillAndSection} value={skill}>
                    <option value="" disabled selected>Select Skill</option>
                    {optionsSkills}
                </select>
                <select>
                    <option value="" disabled selected>Select Section</option>
                    {optionsSections}
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