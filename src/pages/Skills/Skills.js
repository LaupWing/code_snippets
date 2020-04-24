import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import {Route, Switch} from 'react-router-dom';
import Overview from './Overview/Overview';

function Skills(){
    const {data} = useContext(DataContext);
    return (
        <>
            <Switch>
                <Route 
                    path="/skills" 
                    exact 
                    render={()=><
                        Overview 
                            data={data}
                        />
                    }
                />
                <Route 
                    path="/skills/:id" 
                    component={()=><div>skills Id</div>}
                />
            </Switch>
        </>
    );
}

export default Skills;