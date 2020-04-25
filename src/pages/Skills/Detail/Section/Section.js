import React, {useState} from 'react';
import styles from './Section.module.css';
import {Link} from 'react-router-dom';

function Section({section, data}){
    const [open, setOpen] = useState(false);
    
    return (
        <div className={styles.Section}>
            <h2 
                onClick={()=>setOpen(!open)} 
                className={styles.Section_Title}
            >
                {section}
            </h2>
            {data && data.map(d=>(
                <Link to={`/detail/${d.id}`}>
                    <div 
                        className={[styles.post, open ? styles.open : null].join(' ')}
                    >
                        <p className={styles.title}>{d.title}</p>
                        <p className={styles.description}>{d.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Section;