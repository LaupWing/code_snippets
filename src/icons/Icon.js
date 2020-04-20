import React from 'react';
import icons from './icons';

export default ({skill})=>{
    const Icon = icons[skill]
    return(
        <Icon/>
    )
}

