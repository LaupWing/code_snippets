import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import ArrayHelpers from '../../helpers/arrayhelpers';
function Skills(){
    const {data} = useContext(DataContext);
    const categorize = data
        .map(d=>d.skill)
        .filter(ArrayHelpers.removeDuplicates)
    console.log
    return (
        <React.Fragment>
            <h2>Skills</h2>
            <p>Orderd and categorised by skill. Click on the skill to have get more detail or use the arrows to fold out for an quick overview.</p>
        </React.Fragment>
    );
}

export default Skills;