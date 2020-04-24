import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import {Route, Switch} from 'react-router-dom';
import Overview from './Overview/Overview';
import Detail from './Detail/Detail'
import ArrayHelpers from '../../helpers/Arrayhelpers';

function Skills(){
    const {data} = useContext(DataContext);
    const clustered = ArrayHelpers
        .removeDuplicates(data.map(d=>d.skill))
        .map(d=>{
            return{
                skill: d,
                posts: data.filter(x=>x.skill===d) 
            };
        });
    return (
        <>
            <Switch>
                <Route 
                    path="/skills" 
                    exact 
                    render={()=>
                        <Overview 
                            data={clustered}
                        />
                    }
                />
                <Route 
                    path="/skills/:id" 
                    render={()=>
                        <Detail
                            data={clustered}
                        />
                    }
                />
            </Switch>
        </>
    );
}

export default Skills;