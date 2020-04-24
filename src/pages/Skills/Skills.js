import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import ArrayHelpers from '../../helpers/Arrayhelpers';
import Skill from './Skill/Skill';
import styles from './Skills.module.css'

function Skills(){
    const {data} = useContext(DataContext);
    const skills = ArrayHelpers
        .removeDuplicates(data.map(d=>d.skill))
        .map(d=>{
            return{
                skill: d,
                posts: data.filter(x=>x.skill===d) 
            };
        })
        .map((d,i)=><Skill key={i} skill={d}/>);
        
    return (
        <>
            <h2>Skills</h2>
            <p>Orderd and categorised by skill. Click on the skill to have get more detail or use the arrows to fold out for an quick overview.</p>
            <section className={styles.Skills}>
                {skills}
            </section>
        </>
    );
}

export default Skills;