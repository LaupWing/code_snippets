import React, {useRef, useState, useContext, useEffect} from 'react';
import styles from './AddModal.module.css';
import MyEditor from '../../../Editor/Editor';
import * as icons from '../../../../icons/icons';
import DataContext from '../../../../context/DataContext';

function AddModal(){
    let content = null;
    const [sections, setSections] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [skill, setSkill] = useState(null);
    const formEl = useRef(null);
    const availableIcons = Object.keys(icons.default); 
    const {data, addPost} = useContext(DataContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = formEl.current
        const {title} = form; 
        const {description} = form;
        const {new_section} = form;
        const section = new_section.value === '' ? selectedSection : new_section.value

        if(
            !title.value ||
            !description.value ||
            !new_section.value ||
            !content ||
            !skill ||
            !section
        ){
            return alert('You have to fill in all fields!');
        }

        const newPost = {
            title: title.value,
            description: description.value,
            content,
            skill,
            section,
            createdAt: new Date()
        } 
        addPost(newPost);
    }
    const setContent = (text)=>{
        content = text
    }
    const optionsSkills = availableIcons.map(icon=>(
        <option key={icon} value={icon}>{icon}</option>
    ))

    const optionsSections = sections && sections.map(section=>(
        <option>{section}</option>
    ))
    

    useEffect(()=>{
        const filtering = data
            .filter(s=>s.skill === skill)
            .map(s=>s.section);
        const removeDuplicates = filtering.filter((item,index)=>filtering.indexOf(item)===index);
        setSections(removeDuplicates);
    },[skill, data]);

    return (
        <form ref={formEl} onSubmit={handleSubmit} className={styles.AddModal}>
            <div className={styles.skills}>
                <select 
                    onChange={(e)=>{
                        setSkill(e.target.value);
                    }} 
                    value={skill ? skill : ''}
                >
                    <option value="" disabled defaultValue>Select Skill</option>
                    {optionsSkills}
                </select>
                <select 
                    value={selectedSection ? selectedSection : ''} 
                    onChange={(e)=>{
                        setSelectedSection(e.target.value);
                    }}
                >
                    <option value="" disabled defaultValue>Select Section</option>
                    {optionsSections}
                </select>
                 or
                <input name="new_section" type="text" placeholder="New Section"></input>
            </div>
            <input name="title" type="text" placeholder="Title of code"></input>
            <input name="description" type="text" placeholder="Your Description"></input>
            <MyEditor setContent={setContent}/>
            <button>Submit</button>
        </form> 
    );
}

export default AddModal;