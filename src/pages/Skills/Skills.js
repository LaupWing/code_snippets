import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import ArrayHelpers from '../../helpers/Arrayhelpers';
function Skills(){
    const {data} = useContext(DataContext);
    const categorize = ArrayHelpers
        .removeDuplicates(data.map(d=>d.skill))
        .map(d=>{
            return{
                skill: d,
                posts: data.filter(x=>x.skill===d) 
            };
        });
    console.log(categorize);
    return (
        <React.Fragment>
            <h2>Skills</h2>
            <p>Orderd and categorised by skill. Click on the skill to have get more detail or use the arrows to fold out for an quick overview.</p>
        </React.Fragment>
    );
}

export default Skills;